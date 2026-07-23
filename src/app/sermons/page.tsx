'use client';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Record as SermonRecord } from '@/types';

const PAGE_SIZE = 12;

function RecordCard({ record }: { record: SermonRecord }) {
  const { language } = useLanguage();
  const [playing, setPlaying] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === 'en' ? 'en-US' : 'uk-UA';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Проповідь': return 'bg-blue-100 text-blue-800';
      case 'Богослужіння': return 'bg-green-100 text-green-800';
      case 'Сімʼя': return 'bg-purple-100 text-purple-800';
      case 'Питання': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const thumbnail = record.thumbnail || `https://i.ytimg.com/vi/${record.videoUrl}/hqdefault.jpg`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* YouTube Video */}
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${record.videoUrl}?autoplay=1`}
            title={record.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Відтворити: ${record.title}`}
          >
            <img
              src={thumbnail}
              alt={record.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 3.5a1 1 0 011.5-.87l10 6.5a1 1 0 010 1.74l-10 6.5A1 1 0 016.3 16.5v-13z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-blue-600 font-medium">{formatDate(record.date)}</span>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(record.category)}`}>
            {record.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">{record.title}</h3>
        {record.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">{record.description}</p>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            {record.speaker}
          </div>
          <Link href={`/sermons/${record.id}`} className="text-sm text-blue-600 font-medium hover:text-blue-800">
            Детальніше →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SermonsPage() {
  const { t } = useLanguage();
  const { learnSchedule } = useNavigation();
  const [records, setRecords] = useState<SermonRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    getDocs(query(collection(db, 'records'), orderBy('date', 'desc')))
      .then((snapshot) => {
        setRecords(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as SermonRecord))
        );
      })
      .catch((error) => console.error('Failed to load records from Firestore:', error))
      .finally(() => setLoading(false));
  }, []);

  const searchQuery = search.trim().toLowerCase();
  const filteredRecords = searchQuery
    ? records.filter((record) =>
        [record.title, record.speaker, record.description]
          .join(' ')
          .toLowerCase()
          .includes(searchQuery)
      )
    : records;

  const visibleRecords = filteredRecords.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('sermonsTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sermonsSubtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Пошук за назвою чи спікером..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
        </div>

        {/* Records */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredRecords.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {visibleRecords.map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
            {visibleCount < filteredRecords.length && (
              <div className="text-center mb-12">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                >
                  Показати ще ({filteredRecords.length - visibleCount})
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-gray-500 mb-12">
            Нічого не знайдено за запитом «{search}»
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('dontMissServices')}</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('servicesText')}
            </p>
            <button
              onClick={learnSchedule}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('learnSchedule')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
