'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

export default function Hero() {
  const { t } = useLanguage();
  const { joinService, learnMore } = useNavigation();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pb-20 md:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="church-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 2L3 7v11h14V7l-7-5zM8 16H6v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2V9h2v7z" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#church-pattern)" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-8">
        <div className="mb-4 sm:mb-8">
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          {t('churchName').split(' ').slice(0, 2).join(' ')} <span className="text-yellow-300">{t('churchName').split(' ')[2]}</span><br />
          {t('churchName').split(' ').slice(3).join(' ').split(' ')[0]} <span className="text-yellow-300">{t('churchName').split(' ').slice(4).join(' ')}</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-blue-100 max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        
        <p className="text-sm sm:text-lg mb-6 sm:mb-8 text-blue-200 max-w-xl mx-auto">
          📍 {t('heroLocation')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-0">
          <button 
            onClick={joinService}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {t('joinService')}
          </button>
          <button 
            onClick={learnMore}
            className="border-2 border-white/50 hover:border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base"
          >
            {t('learnMore')}
          </button>
        </div>
        
        {/* Schedule Info */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{t('sundayService')}</h3>
            <p className="text-blue-200 text-xs sm:text-base">{t('sunday')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{t('prayer')}</h3>
            <p className="text-blue-200 text-xs sm:text-base">{t('thursday')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{t('sundaySchool')}</h3>
            <p className="text-blue-200 text-xs sm:text-base">{t('saturdaySchool')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{t('youth')}</h3>
            <p className="text-blue-200 text-xs sm:text-base">{t('saturdayYouth')}</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}