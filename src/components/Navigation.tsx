'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Navigation() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative p-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={124} 
                height={64} 
                className="relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('home')}
            </Link>
            <Link href="/servants" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('servants')}
            </Link>
            <Link href="/sermons" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('sermons')}
            </Link>
            <Link href="/events" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('events')}
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
              {t('contact')}
            </Link>
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-amber-600 p-2 rounded-lg hover:bg-amber-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              href="/servants" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('servants')}
            </Link>
            <Link 
              href="/sermons" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('sermons')}
            </Link>
            <Link 
              href="/events" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('events')}
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}