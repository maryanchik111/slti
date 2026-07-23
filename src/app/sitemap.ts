import type { MetadataRoute } from 'next'
import { adminDb } from '@/lib/firebase-admin'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://slti.church'

  let sermonEntries: MetadataRoute.Sitemap = []
  try {
    const snapshot = await adminDb.collection('records').get()
    sermonEntries = snapshot.docs.map((doc) => ({
      url: `${baseUrl}/sermons/${doc.id}`,
      lastModified: doc.data().syncedAt ? new Date(doc.data().syncedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Failed to load records for sitemap:', error)
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servants`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sermons`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servant/ivan-petrov`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servant/maria-kovalenko`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servant/andriy-tkachuk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...sermonEntries,
  ]
}