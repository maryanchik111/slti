'use client';

import Link from 'next/link';
import { Servant } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

interface ServantCardProps {
  servant: Servant;
}

export function ServantCard({ servant }: ServantCardProps) {
  const { language } = useLanguage();

  // Функція для перевірки чи існує зображення
  const getImageSrc = () => {
    if (servant.image && !servant.image.includes('placeholder')) {
      return servant.image;
    }
    return null;
  };

  const imageSrc = getImageSrc();

  return (
    <Link href={`/servant/${servant.id}`} className="group block h-full">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        <div className="relative h-72 flex-shrink-0 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${servant.name} ${servant.surname}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Якщо зображення не завантажилось, показуємо градієнт
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 via-stone-100 to-blue-200 flex items-center justify-center ${imageSrc ? 'hidden' : 'flex'}`}>
            <div className="w-24 h-24 bg-white/40 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg">
              <svg className="w-14 h-14 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-white to-stone-50">
          <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">
            {language === 'en' ? `${servant.nameEn || servant.name} ${servant.surnameEn || servant.surname}` : `${servant.name} ${servant.surname}`}
          </h3>
          <p className="text-blue-700 font-semibold mb-4 text-sm uppercase tracking-wide">
            {language === 'en' ? servant.roleEn || servant.role : servant.role}
          </p>
          <p className="text-gray-600 text-sm flex-grow leading-relaxed">
            {language === 'en' ?
              (servant.bioEn || servant.bio || 'Служитель церкви, присвячений Богу та людям.').slice(0, 120) + ((servant.bioEn && servant.bioEn.length > 120) || (servant.bio && servant.bio.length > 120) ? '...' : '') :
              (servant.bio || 'Служитель церкви, присвячений Богу та людям.').slice(0, 120) + (servant.bio && servant.bio.length > 120 ? '...' : '')
            }
          </p>
          <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
            <span>Детальніше</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const { language, t } = useLanguage();

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
    <Link href={`/events/${event.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 group h-full flex flex-col">
        <div className="relative h-52 bg-gradient-to-br from-blue-100 via-stone-100 to-blue-200 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20"></div>
          {event.image ? (
            <img
              src={event.image}
              alt={language === 'en' ? event.titleEn || event.title : event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-20 h-20 bg-white/50 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" />
              </svg>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              {event.category === 'holiday' ? t('holidayEvents') :
                event.category === 'birthday' ? (language === 'en' ? 'Birthday' : 'День народження') :
                  event.category === 'baptizing' ? t('baptism') :
                    event.category === 'baby-shower' ? t('babyShower') :
                      event.category === 'thanksgiving' ? t('thanksgiving') :
                        t('events')}
            </span>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-b from-white to-stone-50 flex-grow flex flex-col">
          <div className="flex items-center text-sm text-blue-700 mb-3 font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {formatDate(event.date)}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
            {language === 'en' ? event.titleEn || event.title : event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
            {language === 'en' ? event.descriptionEn || event.description : event.description}
          </p>
          <div className="mt-auto">
            {event.location && (
              <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100 mb-4">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{language === 'en' ? event.locationEn || event.location : event.location}</span>
              </div>
            )}
            <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:text-blue-700 transition-colors">
              <span>{t('learnMore')}</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
