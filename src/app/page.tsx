'use client';

import Hero from '@/components/Hero';
import { ServantCard, EventCard } from '@/components/Cards';
import Manifest from '@/components/Manifest';
import { servants, events } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

export default function Home() {
  const { t } = useLanguage();
  const { visitService, contactUs, learnMoreBibleSchool } = useNavigation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Servants Section */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
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
            <h3 className="text-2xl font-bold text-center mb-10 text-amber-700">{t('leadership')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {servants.filter(s => s.role.includes('Старший служитель') || s.role.includes('Помічниця старшого')).map((servant) => (
                <ServantCard key={servant.id} servant={servant} />
              ))}
            </div>
          </div>

          {/* Старійшини та диякони */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-amber-700">{t('eldersAndDeacons')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servants.filter(s => s.role.includes('Старійшина') || s.role.includes('Диякон')).map((servant) => (
                <ServantCard key={servant.id} servant={servant} />
              ))}
            </div>
          </div>

          {/* Найактивніші служіння (показуємо тільки деякі для головної сторінки) */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-10 text-amber-700">{t('keyMinistries')}</h3>
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
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
      <section id="service-schedule" className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              {t('schedule')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Приєднуйтесь до наших регулярних служінь та заходів
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{t('sundayService')}</h3>
              <p className="text-amber-600 font-semibold">{t('sunday')}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{t('prayer')}</h3>
              <p className="text-emerald-600 font-semibold">{t('thursday')}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{t('sundaySchool')}</h3>
              <p className="text-violet-600 font-semibold">{t('saturdaySchool')}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{t('youth')}</h3>
              <p className="text-rose-600 font-semibold">{t('saturdayYouth')}</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-slate-600 mb-8 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">м. Рівне, вул. Уласа Самчука, 14</span>
            </div>
            <div>
              <button 
                onClick={contactUs}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Отримати детальну інформацію
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              {t('upcomingEvents')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('eventsSubtitle')}
            </p>
          </div>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4h4a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('noEventsPlanned')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('noEventsMessage')}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Manifest Section */}
      <Manifest />

      {/* Bible School Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-10 md:p-14 text-white flex items-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('bibleSchool')}
                  </h2>
                  <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                    {t('bibleSchoolTitle')}
                  </p>
                  <div className="hidden md:block space-y-4">
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Систематичне вивчення Біблії</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Досвідчені викладачі</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">Гнучкий розклад занять</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">Навчання в групі однодумців</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="font-medium">Сертифікат про закінчення</span>
                    </div>
                  </div>
                  <button 
                    onClick={learnMoreBibleSchool}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('learnMoreBibleSchool')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h14V7l-7-5zM8 16H6v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2V9h2v7z"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('joinFamily')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('joinFamilyText')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={visitService}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              {t('visitService')}
            </button>
            <button 
              onClick={contactUs}
              className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
