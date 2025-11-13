'use client';

import { EventCard } from '@/components/Cards';
import { events } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

export default function EventsPage() {
  const { t } = useLanguage();
  const { visitService, contactUs } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('events')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('eventsSubtitle')}
          </p>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4h4a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('noEventsPlanned')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('noEventsMessage')}</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('joinFamily')}</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('joinFamilyText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={visitService}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {t('visitService')}
              </button>
              <button 
                onClick={contactUs}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                {t('contactUs')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}