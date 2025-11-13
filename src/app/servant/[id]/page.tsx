'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servants } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';

interface ServantPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ServantPage({ params }: ServantPageProps) {
  const { language, t } = useLanguage();
  const resolvedParams = React.use(params) as { id: string };
  const servant = servants.find((s) => s.id === resolvedParams.id);

  if (!servant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('backToHome')}
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Photo Section */}
            <div className="md:w-1/3">
              <div className="relative h-96 md:h-full">
                {servant.image && !servant.image.includes('placeholder') ? (
                  <img 
                    src={servant.image} 
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
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center ${servant.image && !servant.image.includes('placeholder') ? 'hidden' : 'flex'}`}>
                  <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-20 h-20 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {language === 'en' ? `${servant.nameEn || servant.name} ${servant.surnameEn || servant.surname}` : `${servant.name} ${servant.surname}`}
                </h1>
                <p className="text-xl text-blue-600 font-semibold">
                  {language === 'en' ? servant.roleEn || servant.role : servant.role}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('biography')}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {language === 'en' ? servant.bioEn || servant.bio : servant.bio}
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('contacts')}</h2>
                <div className="flex flex-wrap gap-4">
                  {servant.socialMedia.facebook && (
                    <a
                      href={servant.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  )}
                  
                  {servant.socialMedia.instagram && (
                    <a
                      href={servant.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.431-1.431c.504.504 1.201.815 1.968.815 1.547 0 2.804-1.257 2.804-2.804s-1.257-2.804-2.804-2.804c-.767 0-1.464.311-1.968.815L5.244 8.615c.757-.937 1.908-1.533 3.205-1.533 2.27 0 4.108 1.838 4.108 4.108s-1.838 4.108-4.108 4.108z"/>
                      </svg>
                      Instagram
                    </a>
                  )}

                  {servant.socialMedia.telegram && (
                    <a
                      href={servant.socialMedia.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Telegram
                    </a>
                  )}

                  {servant.socialMedia.email && (
                    <a
                      href={`mailto:${servant.socialMedia.email}`}
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Servants */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('otherServants')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servants
              .filter((s) => s.id !== servant.id)
              .slice(0, 2)
              .map((otherServant) => (
                <Link
                  key={otherServant.id}
                  href={`/servant/${otherServant.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="flex">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z"/>
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        {language === 'en' ? `${otherServant.nameEn || otherServant.name} ${otherServant.surnameEn || otherServant.surname}` : `${otherServant.name} ${otherServant.surname}`}
                      </h3>
                      <p className="text-blue-600 text-sm">
                        {language === 'en' ? otherServant.roleEn || otherServant.role : otherServant.role}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}