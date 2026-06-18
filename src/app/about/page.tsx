'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider text-blue-200 uppercase">
              {t('aboutChurch')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
            {language === 'en' ? 'Who We Are' : 'Хто ми є'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Mission & Vision (Overlapping Hero) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 -mt-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-10 md:p-12 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300 shadow-inner">
              <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('ourMission')}</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              {language === 'en' 
                ? 'To spread the Gospel of Jesus Christ, build strong relationships with God and each other, serve our community, and develop every believer in spiritual maturity.' 
                : 'Поширювати Євангеліє Ісуса Христа, будувати міцні стосунки з Богом та один з одним, служити нашій спільноті та розвивати кожного віруючого в духовній зрілості.'}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-10 md:p-12 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-300 shadow-inner">
              <svg className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('ourVision')}</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              {language === 'en'
                ? 'To be a church that transforms people\'s lives through the love of Christ, creating a community where everyone can grow in faith and serve God with all their heart.'
                : 'Бути церквою, що перетворює життя людей через любов Христа, створюючи спільноту, де кожен може зростати у вірі та служити Богу всім серцем.'}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('ourValues')}</h2>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Love */}
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <svg className="w-12 h-12 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('love')}</h3>
              <p className="text-slate-500 text-lg">
                {language === 'en' ? 'We live and share God\'s unconditional love for all people.' : 'Живемо та ділимося безумовною любов\'ю Бога до всіх людей.'}
              </p>
            </div>

            {/* Truth */}
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('truth')}</h3>
              <p className="text-slate-500 text-lg">
                {language === 'en' ? 'We are guided by God\'s Word as the foundation for life and ministry.' : 'Керуємося Божим Словом як основою для життя та служіння.'}
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('community')}</h3>
              <p className="text-slate-500 text-lg">
                {language === 'en' ? 'We build strong relationships and support each other in faith.' : 'Будуємо міцні стосунки та підтримуємо один одного у вірі.'}
              </p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 mb-24 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-10">{t('ourHistory')}</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-xl font-light">
              <p>
                {language === 'en' 
                  ? 'Our church was founded with a deep desire to seek God\'s presence and serve our city. Over the years, we have seen God\'s faithfulness in growing our community, answering prayers, and transforming lives.' 
                  : 'Наша церква була заснована з глибоким бажанням шукати Божої присутності та служити нашому місту. Протягом років ми бачили Божу вірність у зростанні нашої спільноти, відповідях на молитви та змінених життях.'}
              </p>
              <p>
                {language === 'en'
                  ? 'Today, "Tabernacle of Love and Truth" continues to be a spiritual home for many families. We are writing our history together with God, stepping forward in faith and anticipating great things ahead.'
                  : 'Сьогодні "Скинія Любові та Істини" продовжує бути духовним домом для багатьох сімей. Ми пишемо нашу історію разом з Богом, крокуючи вперед у вірі та очікуючи великих речей попереду.'}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center divide-x divide-slate-100">
            <div className="px-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">2</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                {language === 'en' ? 'Years of Ministry' : 'Роки служіння'}
              </div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">45+</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                {language === 'en' ? 'Church Members' : 'Членів церкви'}
              </div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">22</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                {language === 'en' ? 'Servants' : 'Служителів'}
              </div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">10+</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                {language === 'en' ? 'Kids & Youth' : 'Дітей та молоді'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}