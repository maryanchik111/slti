'use client';

import Hero from '@/components/Hero';
import { ServantCard, EventCard } from '@/components/Cards';
import Manifest from '@/components/Manifest';
import { servants, events } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getCountFromServer } from 'firebase/firestore';
import Link from 'next/link';

export default function Home() {
  const { t, language } = useLanguage();
  const { visitService, contactUs, learnMoreBibleSchool } = useNavigation();
  const [sermonsCount, setSermonsCount] = useState<number | null>(null);

  useEffect(() => {
    getCountFromServer(collection(db, 'records'))
      .then((snapshot) => setSermonsCount(snapshot.data().count))
      .catch((error) => console.error('Failed to load sermons count:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Sermons Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наші проповіді та служіння</h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                Всі наші зібрання та проповіді доступні у відеозаписі на YouTube-каналі церкви.
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">
                  {sermonsCount !== null ? `${sermonsCount}+` : '—'}
                </p>
                <p className="text-slate-300 font-medium">Відеозаписів</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">Щотижня</p>
                <p className="text-slate-300 font-medium">Нові служіння</p>
              </div>
            </div>
            <div className="relative z-10 text-center">
              <Link
                href="/sermons"
                className="inline-flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Переглянути всі проповіді
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servants Section */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              {t('ourServants')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('servantsSubtitle')}
            </p>
          </div>

          {/* Керівництво */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">{t('leadership')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {servants.filter(s => s.role.includes('Старший служитель') || s.role.includes('Помічниця старшого')).map((servant) => (
                <ServantCard key={servant.id} servant={servant} />
              ))}
            </div>
          </div>

          {/* Старійшини та диякони */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">{t('eldersAndDeacons')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servants.filter(s => s.role.includes('Старійшина') || s.role.includes('Диякон')).map((servant) => (
                <ServantCard key={servant.id} servant={servant} />
              ))}
            </div>
          </div>

          {/* Найактивніші служіння (показуємо тільки деякі для головної сторінки) */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">{t('keyMinistries')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servants.filter(s =>
                s.role.includes('Музич') ||
                s.role.includes('Левит') ||
                s.role.includes('Молодіжн') ||
                s.role.includes('Дитяч') ||
                s.role.includes('Євангеліст')
              ).slice(0, 6).map((servant) => (
                <ServantCard key={servant.id} servant={servant} />
              ))}
            </div>
          </div>

          {/* Кнопка "Переглянути всіх" */}
          <div className="text-center">
            <a
              href="/servants"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('viewAllServants')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Service Schedule Section */}
      <section id="service-schedule" className="py-24 relative overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">

            {/* Left Content */}
            <div className="lg:w-5/12 mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-semibold text-sm mb-6 border border-blue-200/50 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Щотижневі зустрічі
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {t('schedule')}
              </h2>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Приєднуйтесь до наших регулярних служінь та заходів. Ми завжди раді бачити нових людей в нашій духовній родині.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-200/50 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Наша адреса</h4>
                    <p className="text-slate-600 font-medium">м. Рівне, вул. Уласа Самчука, 14</p>
                  </div>
                </div>
              </div>

              <button
                onClick={contactUs}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/20 w-full sm:w-auto"
              >
                <span className="relative z-10">Отримати детальну інформацію</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Right Grid */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">

                {/* Card 1: Sunday Service */}
                <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700 ease-out"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 text-white relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{t('sundayService')}</h3>

                  <div className="inline-flex items-center gap-2 text-blue-700 font-semibold bg-blue-50/80 px-4 py-2.5 rounded-xl relative z-10 border border-blue-100/50">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('sunday')}
                  </div>
                </div>

                {/* Card 2: Prayer */}
                <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:mt-12">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700 ease-out"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 text-white relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{t('prayer')}</h3>

                  <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50/80 px-4 py-2.5 rounded-xl relative z-10 border border-emerald-100/50">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('thursday')}
                  </div>
                </div>

                {/* Card 3: Sunday School */}
                <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:-mt-4">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-violet-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700 ease-out"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-violet-500/30 text-white relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{t('sundaySchool')}</h3>

                  <div className="inline-flex items-center gap-2 text-violet-700 font-semibold bg-violet-50/80 px-4 py-2.5 rounded-xl relative z-10 border border-violet-100/50">
                    <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('saturdaySchool')}
                  </div>
                </div>

                {/* Card 4: Youth */}
                <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:mt-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-rose-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700 ease-out"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-rose-500/30 text-white relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{t('youth')}</h3>

                  <div className="inline-flex items-center gap-2 text-rose-700 font-semibold bg-rose-50/80 px-4 py-2.5 rounded-xl relative z-10 border border-rose-100/50">
                    <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('saturdayYouth')}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Events Section */}
      {events.filter(e => e.category === 'holiday' || e.category === 'birthday' || e.category === 'baptizing' || e.category === 'baby-shower' || e.category === 'thanksgiving' || e.category === 'simeyne').length > 0 && (
        <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 relative overflow-hidden">
          {/* subtle decorative background */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -mt-96 -mr-96"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-semibold text-sm mb-6 border border-blue-200/50 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Особливі події
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {t('holidayEvents')}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t('celebrateMoments')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.filter(e => e.category === 'holiday' || e.category === 'birthday' || e.category === 'baptizing' || e.category === 'baby-shower' || e.category === 'thanksgiving' || e.category === 'simeyne').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -translate-y-1/2 -ml-64"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-200/50 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Анонси
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {t('upcomingEvents')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('eventsSubtitle')}
            </p>
          </div>
          {events.filter(e => e.category !== 'holiday' && e.category !== 'birthday' && e.category !== 'baptizing' && e.category !== 'baby-shower' && e.category !== 'thanksgiving' && e.category !== 'simeyne').length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.filter(e => e.category !== 'holiday' && e.category !== 'birthday' && e.category !== 'baptizing' && e.category !== 'baby-shower' && e.category !== 'thanksgiving' && e.category !== 'simeyne').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-inner">
                  <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('noEventsPlanned')}</h3>
                <p className="text-slate-500 leading-relaxed">{t('noEventsMessage')}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Manifest Section */}
      <Manifest />

      {/* Bible School Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-stone-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-10 md:p-14 text-white flex items-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('bibleSchool')}
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    {t('bibleSchoolTitle')}
                  </p>
                  <div className="hidden md:block space-y-4">
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Систематичне вивчення Біблії</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Досвідчені викладачі</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Духовне зростання</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex items-center bg-gradient-to-br from-white to-stone-50">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    Розпочніть свою духовну освіту
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {t('bibleSchoolDescription')}
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center text-gray-700">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">Гнучкий розклад занять</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">Навчання в групі однодумців</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="font-medium">Сертифікат про закінчення</span>
                    </div>
                  </div>
                  <button
                    onClick={learnMoreBibleSchool}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('learnMoreBibleSchool')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
