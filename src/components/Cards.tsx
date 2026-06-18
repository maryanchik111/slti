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
    <Link href={`/servant/${servant.id}`} className="block h-full outline-none group">
      <div className="relative h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">

        {/* Image Area */}
        <div className="relative h-80 w-full bg-slate-100 overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>

          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${servant.name} ${servant.surname}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 ${imageSrc ? 'hidden' : 'flex'}`}>
            <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          {/* Role Badge */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-xs font-semibold tracking-wide uppercase">
                {language === 'en' ? servant.roleEn || servant.role : servant.role}
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col grow bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
            {language === 'en' ? `${servant.nameEn || servant.name} ${servant.surnameEn || servant.surname}` : `${servant.name} ${servant.surname}`}
          </h3>

          <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {language === 'en' ?
              (servant.bioEn || servant.bio || 'Служитель церкви, присвячений Богу та людям.') :
              (servant.bio || 'Служитель церкви, присвячений Богу та людям.')
            }
          </p>

          <div className="mt-auto pt-5 border-t border-slate-100 flex items-start justify-start">
            <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:text-blue-700 transition-colors shrink-0">
              <span>{language === 'en' ? 'Profile' : 'Детальніше'}</span>
              <div className="w-8 h-8 rounded-full bg-blue-50 ml-2 flex items-center justify-center transform group-hover:translate-x-1 group-hover:bg-blue-100 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
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
    <Link href={`/events/${event.id}`} className="block h-full outline-none group">
      <div className="relative h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">

        {/* Card Header / Image Area */}
        <div className="relative h-60 w-full bg-slate-100 overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

          {event.image ? (
            <img
              src={event.image}
              alt={language === 'en' ? event.titleEn || event.title : event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 uppercase tracking-widest shadow-sm">
              {event.category === 'holiday' ? t('holidayEvents') :
                event.category === 'birthday' ? (language === 'en' ? 'Birthday' : 'День народження') :
                  event.category === 'baptizing' ? t('baptism') :
                    event.category === 'baby-shower' ? t('babyShower') :
                      event.category === 'thanksgiving' ? t('thanksgiving') :
                        event.category === 'simeyne' ? (language === 'en' ? 'For Couples' : 'Для пар') :
                          t('events')}
            </span>
          </div>

          {/* Date Float */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-semibold text-sm drop-shadow-md">
              {formatDate(event.date)}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col grow bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
            {language === 'en' ? event.titleEn || event.title : event.title}
          </h3>

          <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {language === 'en' ? event.descriptionEn || event.description : event.description}
          </p>

          <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col items-start justify-between">
            {event.location ? (
              <div className="flex items-center text-sm text-slate-500 max-w-[65%]">
                <svg className="w-4 h-4 mr-1.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate text-lg">{language === 'en' ? event.locationEn || event.location : event.location}</span>
              </div>
            ) : <div></div>}

            <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:text-blue-700 transition-colors shrink-0">
              <span>{t('learnMore')}</span>
              <div className="w-8 h-8 rounded-full bg-blue-50 ml-2 flex items-center justify-center transform group-hover:translate-x-1 group-hover:bg-blue-100 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}
