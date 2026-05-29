'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function Manifest() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('manifestTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('manifestSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* YouTube Video */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/QPQjREEFHwY"
                title="Church Manifest Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Links and Description */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('watchVideo')}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Переглядайте наш маніфест та дізнавайтесь про те, що ми проповідуємо та в що вірим як церкова спільнота.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid032HpkQTfSCRyLzaUh8iWjF8HbvKm33dedpHj7NMxZEuHEFwsfJzL4oZPj5onV4HNvl&id=100068544552751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  Facebook Story
                </span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://youtu.be/QPQjREEFHwY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  YouTube
                </span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {t('shareManifest')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
