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

  const getServantName = (s: typeof servant) => language === 'en' ? `${s.nameEn || s.name} ${s.surnameEn || s.surname}` : `${s.name} ${s.surname}`;
  const getServantRole = (s: typeof servant) => language === 'en' ? s.roleEn || s.role : s.role;
  const getServantBio = (s: typeof servant) => language === 'en' ? s.bioEn || s.bio : s.bio;

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-300 hover:text-white transition-colors mb-8 font-medium group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('backToHome')}
        </Link>

        {/* Main Profile Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Photo Section */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-auto bg-slate-100">
              {servant.image && !servant.image.includes('placeholder') ? (
                <img 
                  src={servant.image} 
                  alt={getServantName(servant)}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
              ) : null}
              <div className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center ${servant.image && !servant.image.includes('placeholder') ? 'hidden' : 'flex'}`}>
                <div className="w-32 h-32 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner">
                  <svg className="w-16 h-16 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {getServantName(servant)}
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-medium tracking-wide">
                  {getServantRole(servant)}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-10">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{t('biography')}</h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p className="leading-relaxed">
                    {getServantBio(servant)}
                  </p>
                </div>
              </div>

              {/* Social Media */}
              {(servant.socialMedia.facebook || servant.socialMedia.instagram || servant.socialMedia.telegram || servant.socialMedia.email) && (
                <div>
                  <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{t('contacts')}</h2>
                  <div className="flex flex-wrap gap-4">
                    {servant.socialMedia.facebook && (
                      <a
                        href={servant.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    
                    {servant.socialMedia.instagram && (
                      <a
                        href={servant.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-pink-600 rounded-2xl hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                    )}

                    {servant.socialMedia.telegram && (
                      <a
                        href={servant.socialMedia.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        aria-label="Telegram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </a>
                    )}

                    {servant.socialMedia.email && (
                      <a
                        href={`mailto:${servant.socialMedia.email}`}
                        className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        aria-label="Email"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Servants */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{t('otherServants')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servants
              .filter((s) => s.id !== servant.id)
              .slice(0, 3)
              .map((otherServant) => (
                <Link
                  key={otherServant.id}
                  href={`/servant/${otherServant.id}`}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex items-center gap-5 hover:-translate-y-1"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all">
                    {otherServant.image && !otherServant.image.includes('placeholder') ? (
                      <img 
                        src={otherServant.image} 
                        alt={getServantName(otherServant)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center ${otherServant.image && !otherServant.image.includes('placeholder') ? 'hidden' : 'flex'}`}>
                      <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.1 17.7 6.6 17.5 6.4 17.1L4.8 14.2C4.4 13.5 3.5 13.3 2.8 13.7C2.1 14.1 1.9 15 2.3 15.7L3.9 18.6C4.8 20.2 6.6 20.9 8.3 20.1L13 18V11C14.1 11 15 10.1 15 9Z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {getServantName(otherServant)}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium mt-1 line-clamp-1">
                      {getServantRole(otherServant)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}