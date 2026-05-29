'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/logo.svg" alt="Logo" width={124} height={64} className="drop-shadow-lg" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/skinia.lubovi.istini/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/slti.church"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Skyniya_Lyubovi_Istyny"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-blue-400">{t('footerQuickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('sermons')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-blue-400">{t('contact')}</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">вул. Уласа Самчука, 14<br />м. Рівне</span>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm">+38 (063) 3 444-555</span>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-white/10">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm break-all">slti0633444555@gmail.com</span>
              </div>
            </div>

            {/* Service Times */}
            <div className="mt-8">
              <h5 className="font-bold mb-3 text-blue-400 text-sm uppercase tracking-wide">{t('footerServiceSchedule')}</h5>
              <div className="text-sm text-gray-300 space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span>{t('footerSundayService')}</span>
                  <span className="text-blue-400 font-medium">{t('footerSundayTime')}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span>{t('footerPrayerMeeting')}</span>
                  <span className="text-blue-400 font-medium">{t('footerThursdayTime')}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span>{t('footerSundaySchool')}</span>
                  <span className="text-blue-400 font-medium">{t('footerSaturdaySchoolTime')}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>{t('footerYouthService')}</span>
                  <span className="text-blue-400 font-medium">{t('footerSaturdayYouthTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Скинія Любові та Істини. {t('allRightsReserved')}.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center gap-2">
            Створено з
            <span className="text-blue-500 animate-pulse">❤️</span>
            для Божої слави
          </p>
        </div>
      </div>
    </footer>
  );
}