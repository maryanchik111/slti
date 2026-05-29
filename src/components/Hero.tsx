'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

export default function Hero() {
  const { t } = useLanguage();
  const { joinService, learnMore } = useNavigation();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* You can replace this with an image: */}
        {/* <img src="/path-to-your-image.jpg" className="w-full h-full object-cover" alt="Church background" /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.15)_0%,transparent_70%)]"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="church-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#church-texture)" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 py-20">
        {/* Decorative element */}
        <div className="mb-6 inline-block">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v11h14V7l-7-5zM8 16H6v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2V9h2v7z"/>
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          <span className="block mb-2">{t('churchName')}</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-100 font-light tracking-wide">
          {t('heroSubtitle')}
        </p>
        
        <p className="text-base sm:text-lg mb-10 text-gray-300 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          {t('heroLocation')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={joinService}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg"
          >
            {t('joinService')}
          </button>
          <button 
            onClick={learnMore}
            className="border-2 border-white/60 hover:border-white text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg"
          >
            {t('learnMore')}
          </button>
        </div>
        
        {/* Schedule Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t('sundayService')}</h3>
            <p className="text-blue-200 text-sm">{t('sunday')}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t('prayer')}</h3>
            <p className="text-blue-200 text-sm">{t('thursday')}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t('sundaySchool')}</h3>
            <p className="text-blue-200 text-sm">{t('saturdaySchool')}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t('youth')}</h3>
            <p className="text-blue-200 text-sm">{t('saturdayYouth')}</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}