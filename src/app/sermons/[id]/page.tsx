import type { Metadata } from 'next';
import Link from 'next/link';
import { adminDb } from '@/lib/firebase-admin';
import { records as staticRecords } from '@/data';
import type { Record as SermonRecord } from '@/types';
import SermonDetailClient from './SermonDetailClient';

export const revalidate = 3600;

const SITE_URL = 'https://slti.church';

async function getRecord(id: string): Promise<SermonRecord | null> {
  try {
    const snapshot = await adminDb.collection('records').doc(id).get();
    if (snapshot.exists) {
      return { id: snapshot.id, ...snapshot.data() } as SermonRecord;
    }
  } catch (error) {
    console.error('Failed to load record from Firestore:', error);
  }
  return staticRecords.find((r) => r.id === id) ?? null;
}

function thumbnailFor(record: SermonRecord) {
  return record.thumbnail || `https://i.ytimg.com/vi/${record.videoUrl}/hqdefault.jpg`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const record = await getRecord(id);

  if (!record) {
    return { title: 'Запис не знайдено — Скинія Любові та Істини' };
  }

  const description = (record.description || `${record.title} — ${record.speaker}. Проповідь церкви "Скинія Любові та Істини".`).slice(0, 160);
  const thumbnail = thumbnailFor(record);
  const url = `${SITE_URL}/sermons/${record.id}`;

  return {
    title: `${record.title} — Скинія Любові та Істини`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: record.title,
      description,
      url,
      type: 'video.other',
      images: [{ url: thumbnail, width: 480, height: 360, alt: record.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: record.title,
      description,
      images: [thumbnail],
    },
  };
}

export default async function SermonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const record = await getRecord(id);

  if (!record) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Запис не знайдено</p>
          <Link
            href="/sermons"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            До всіх записів
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: record.title,
    description: record.description || record.title,
    thumbnailUrl: [thumbnailFor(record)],
    uploadDate: record.date ? new Date(record.date).toISOString() : undefined,
    contentUrl: `https://www.youtube.com/watch?v=${record.videoUrl}`,
    embedUrl: `https://www.youtube.com/embed/${record.videoUrl}`,
    publisher: {
      '@type': 'Organization',
      name: 'Скинія Любові та Істини',
      url: SITE_URL,
    },
    ...(record.speaker
      ? { creator: { '@type': 'Person', name: record.speaker } }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SermonDetailClient record={record} />
    </>
  );
}
