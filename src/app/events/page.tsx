'use client';

import { EventCard } from '@/components/Cards';
import { events } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

export default function EventsPage() {
  const { t, language } = useLanguage();
  const { visitService, contactUs } = useNavigation();

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              {language === 'en' ? 'Events' : 'Події'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
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
