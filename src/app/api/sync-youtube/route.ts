import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

async function resolveUploadsPlaylistId(handle: string, apiKey: string) {
  const url = `${YOUTUBE_API_BASE}/channels?part=contentDetails&forHandle=${encodeURIComponent(handle)}&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to resolve channel: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  const uploadsPlaylistId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) {
    throw new Error(`Channel not found for handle "${handle}"`);
  }
  return uploadsPlaylistId as string;
}

async function fetchAllPlaylistVideos(playlistId: string, apiKey: string) {
  const items: any[] = [];
  let pageToken = "";

  do {
    const url = `${YOUTUBE_API_BASE}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}${
      pageToken ? `&pageToken=${pageToken}` : ""
    }`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch playlist items: ${res.status} ${await res.text()}`);
    }
    const data = await res.json();
    items.push(...(data.items ?? []));
    pageToken = data.nextPageToken ?? "";
  } while (pageToken);

  return items;
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const handle = process.env.YOUTUBE_CHANNEL_HANDLE;
  if (!apiKey || !handle) {
    return NextResponse.json(
      { error: "Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_HANDLE env vars" },
      { status: 500 }
    );
  }

  try {
    const uploadsPlaylistId = await resolveUploadsPlaylistId(handle, apiKey);
    const videos = await fetchAllPlaylistVideos(uploadsPlaylistId, apiKey);

    const validItems = videos.filter((item) => item.snippet?.resourceId?.videoId);
    const existingSnapshots = await Promise.all(
      validItems.map((item) => adminDb.collection("records").doc(item.snippet.resourceId.videoId).get())
    );

    const BATCH_SIZE = 400;
    let synced = 0;

    for (let i = 0; i < validItems.length; i += BATCH_SIZE) {
      const batch = adminDb.batch();
      const chunk = validItems.slice(i, i + BATCH_SIZE);

      chunk.forEach((item, idx) => {
        const videoId = item.snippet.resourceId.videoId;
        const publishedAt = item.snippet?.publishedAt as string | undefined;
        const date = publishedAt ? publishedAt.slice(0, 10) : "";
        const existing = existingSnapshots[i + idx];

        const docRef = adminDb.collection("records").doc(videoId);
        batch.set(
          docRef,
          {
            title: item.snippet?.title ?? "",
            description: item.snippet?.description ?? "",
            date,
            videoUrl: videoId,
            thumbnail: item.snippet?.thumbnails?.high?.url ?? item.snippet?.thumbnails?.default?.url ?? "",
            syncedAt: new Date().toISOString(),
            ...(existing.exists ? {} : { category: "Богослужіння", speaker: "Служителі" }),
          },
          { merge: true }
        );
        synced += 1;
      });

      await batch.commit();
    }

    return NextResponse.json({ synced, totalFound: videos.length });
  } catch (error) {
    console.error("YouTube sync failed:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
