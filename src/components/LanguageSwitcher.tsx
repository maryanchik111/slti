'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('uk')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'uk'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
        }`}
      >
        УК
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
        }`}
      >
        EN
      </button>
    </div>
  );
}