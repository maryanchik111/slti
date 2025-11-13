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
    <Link href={`/servant/${servant.id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
        <div className="relative h-64 flex-shrink-0">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${servant.name} ${servant.surname}`}
              className="w-full h-full object-cover"
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
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center ${imageSrc ? 'hidden' : 'flex'}`}>
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {language === 'en' ? `${servant.nameEn || servant.name} ${servant.surnameEn || servant.surname}` : `${servant.name} ${servant.surname}`}
          </h3>
          <p className="text-blue-600 font-medium mb-3">
            {language === 'en' ? servant.roleEn || servant.role : servant.role}
          </p>
          <p className="text-gray-600 text-sm flex-grow">
            {language === 'en' ? 
              (servant.bioEn || servant.bio || 'Служитель церкви, присвячений Богу та людям.').slice(0, 120) + ((servant.bioEn && servant.bioEn.length > 120) || (servant.bio && servant.bio.length > 120) ? '...' : '') :
              (servant.bio || 'Служитель церкви, присвячений Богу та людям.').slice(0, 120) + (servant.bio && servant.bio.length > 120 ? '...' : '')
            }
          </p>
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-200 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
          </svg>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-blue-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {formatDate(event.date)}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {language === 'en' ? event.titleEn || event.title : event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {language === 'en' ? event.descriptionEn || event.description : event.description}
        </p>
        {event.location && (
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {language === 'en' ? event.locationEn || event.location : event.location}
          </div>
        )}
      </div>
    </div>
  );
}