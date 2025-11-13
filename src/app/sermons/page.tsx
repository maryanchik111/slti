'use client';

import { records } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

function RecordCard({ record }: { record: any }) {
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Проповідь': return 'bg-blue-100 text-blue-800';
      case 'Богослужіння': return 'bg-green-100 text-green-800';
      case 'Сімʼя': return 'bg-purple-100 text-purple-800';
      case 'Питання': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* YouTube Video */}
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${record.videoUrl}`}
          title={record.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
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
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{record.description}</p>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            {record.speaker}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SermonsPage() {
  const { t, language } = useLanguage();
  const { learnSchedule } = useNavigation();
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

        {/* Featured Record */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Найновіше служіння</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${records[0].videoUrl}`}
                    title={records[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-1/3 p-8">
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {new Date(records[0].date).toLocaleDateString('uk-UA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{records[0].title}</h3>
                {records[0].description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">{records[0].description}</p>
                )}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{records[0].speaker}</p>
                    <p className="text-sm text-gray-500">Спікер</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">За категоріями</h2>
          
          {/* Проповіді */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
              Проповіді
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {records.filter(record => record.category === 'Проповідь').map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>

          {/* Богослужіння */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
              Богослужіння
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {records.filter(record => record.category === 'Богослужіння').map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>

          {/* Сімейна тематика */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-purple-600 mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
              Сімейна тематика
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {records.filter(record => record.category === 'Сімʼя').map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>

          {/* Питання та відповіді */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-orange-600 mb-6 flex items-center">
              <span className="w-3 h-3 bg-orange-600 rounded-full mr-3"></span>
              Питання та відповіді
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {records.filter(record => record.category === 'Питання').map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>
        </div>

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