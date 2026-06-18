'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current) {
        setScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── UNIVERSAL BOTTOM NAVBAR (Floating Liquid Glass Dock) ── */}
      <div 
        className={`fixed bottom-5 left-4 right-4 max-w-[400px] mx-auto z-40 transition-all duration-500 ease-in-out 
        bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl backdrop-saturate-150 
        border border-white/60 dark:border-white/20 rounded-[28px] 
        shadow-[0_16px_40px_-8px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.6)]
        ${scrollingDown ? 'scale-[0.8] translate-y-2 opacity-95' : 'scale-100 translate-y-0 opacity-100'}
      `}>
        <div className="flex justify-around items-center h-[68px] px-1">
          {/* Home */}
          <Link href="/" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'}`}>
            <svg className="w-[22px] h-[22px] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={pathname === '/' ? 2.5 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-medium leading-none">{t('home')}</span>
          </Link>
          
          {/* Sermons */}
          <Link href="/sermons" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${pathname === '/sermons' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'}`}>
            <svg className="w-[22px] h-[22px] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={pathname === '/sermons' ? 2.5 : 2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={pathname === '/sermons' ? 2.5 : 2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium leading-none">{t('sermons')}</span>
          </Link>

          {/* Events */}
          <Link href="/events" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${pathname === '/events' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'}`}>
            <svg className="w-[22px] h-[22px] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={pathname === '/events' ? 2.5 : 2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-medium leading-none">{t('events')}</span>
          </Link>

          {/* Menu */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="flex flex-col items-center justify-center w-full h-full text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
            <svg className="w-[22px] h-[22px] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-[10px] font-medium leading-none">Меню</span>
          </button>
        </div>
      </div>

      {/* ── SLIDE-UP MENU (Bottom Sheet) ── */}
      <div 
        className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute bottom-0 left-0 right-0 max-w-[440px] mx-auto bg-white dark:bg-slate-900 rounded-t-[32px] pt-3 pb-10 px-6 transition-transform duration-300 transform shadow-[0_-10px_40px_rgba(0,0,0,0.1)] ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag Handle indicator */}
          <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Меню навігації</h3>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-2 mb-6">
            {[
              { href: '/', label: 'home' },
              { href: '/servants', label: 'servants' },
              { href: '/sermons', label: 'sermons' },
              { href: '/events', label: 'events' },
              { href: '/about', label: 'about' },
              { href: '/contact', label: 'contact' },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`block px-4 py-4 rounded-[18px] font-semibold transition-colors ${pathname === link.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.label as any)}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">Мова:</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
