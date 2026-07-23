'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Record as SermonRecord } from '@/types';

function getCategoryColor(category: string) {
  switch (category) {
    case 'Проповідь': return 'bg-blue-100 text-blue-800';
    case 'Богослужіння': return 'bg-green-100 text-green-800';
    case 'Сімʼя': return 'bg-purple-100 text-purple-800';
    case 'Питання': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

export default function SermonDetailClient({ record }: { record: SermonRecord }) {
  const router = useRouter();
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === 'en' ? 'en-US' : 'uk-UA';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          До всіх записів
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${record.videoUrl}`}
              title={record.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-blue-600 font-medium">{formatDate(record.date)}</span>
              {record.category && (
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getCategoryColor(record.category)}`}>
                  {record.category}
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">{record.title}</h1>

            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{record.speaker}</p>
                <p className="text-sm text-gray-500">Спікер</p>
              </div>
            </div>

            {record.description && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="whitespace-pre-wrap">{record.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
