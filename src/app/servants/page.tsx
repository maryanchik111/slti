'use client';

import { ServantCard } from '@/components/Cards';
import { servants } from '@/data';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ServantsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('ourServants')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('servantsSubtitle')}
          </p>
        </div>

        {/* Керівництво церкви */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t('leadership')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servants.filter(s => s.role.includes('Старший служитель') || s.role.includes('Помічниця старшого')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Старійшини та диякони */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t('eldersAndDeacons')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => s.role.includes('Старійшина') || s.role.includes('Диякон')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Музичне та творче служіння */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('musicAndCreativeMinistry')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => s.role.includes('Музич') || s.role.includes('Левит') || s.role.includes('стиль') || s.role.includes('Творч')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Молодіжне та дитяче служіння */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {t('youthAndChildrenMinistry')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => s.role.includes('Молодіжн') || s.role.includes('Дитяч') || s.role.includes('Підлітк')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Соціальне та суспільне служіння */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            {t('socialAndPublicMinistry')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => s.role.includes('Соціальн') || s.role.includes('Суспільн') || s.role.includes('Євангеліст')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Молитовне служіння */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('prayerMinistry')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => s.role.includes('Молитовн') || s.role.includes('молитв')).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Спеціальні та міжнародні служіння */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {t('specialAndInternationalMinistry')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servants.filter(s => 
              s.role.includes('Веб') || 
              s.role.includes('Адвокат') ||
              s.role.includes('Ірланд') || 
              s.role.includes('США') ||
              s.role.includes('Ізра') ||
              s.role.includes('ОСББ') ||
              s.role.includes('правопорядк')
            ).map((servant) => (
              <ServantCard key={servant.id} servant={servant} />
            ))}
          </div>
        </div>

        {/* Ministry Areas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            {t('ministryAreas')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('pastoralMinistry')}</h3>
              <p className="text-gray-600 text-sm">{t('pastoralDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v6.114a4 4 0 10.894 7.618c.084-.385.155-.772.222-1.162V9.692a1 1 0 00-.894-1.114l-6-1A1 1 0 000 8.692v-2a1 1 0 00.894-1.114l10-2A1 1 0 0012 4.692V11a4 4 0 10.894 7.618c.084-.385.155-.772.222-1.162V3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('worship')}</h3>
              <p className="text-gray-600 text-sm">{t('worshipDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('youthMinistry')}</h3>
              <p className="text-gray-600 text-sm">{t('youthDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Соціальне служіння</h3>
              <p className="text-gray-600 text-sm">Допомога нужденним та громадська діяльність</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Місіонерство</h3>
              <p className="text-gray-600 text-sm">Євангелізація та міські місії</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a1 1 0 00.364.081zm2.97-2.749a1 1 0 00-.364-.081L10.088 12.9a1 1 0 01-.788 0L7.482 11.9.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Навчання</h3>
              <p className="text-gray-600 text-sm">Біблійні школи та освітні програми</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('joinMinistry')}</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('joinMinistryText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                {t('learnOpportunities')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300">
                {t('contactLeaders')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}