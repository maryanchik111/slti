'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function Manifest() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-[#05090f] relative overflow-hidden border-t border-white/5">
      {/* Rich Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[13px] font-semibold tracking-widest uppercase text-blue-200">
              Цінності та бачення
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 drop-shadow-sm">
            {t('manifestTitle')}
          </h2>
          <p className="text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed font-light">
            {t('manifestSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* YouTube Video (Left/Main) */}
          <div className="lg:col-span-7">
            <div className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 p-2 backdrop-blur-3xl shadow-[0_0_60px_rgba(37,99,235,0.1)] transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_80px_rgba(37,99,235,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full bg-black rounded-[1.5rem] overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
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
          </div>

          {/* Links and Description (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
                {t('watchVideo')}
              </h3>
              <p className="text-blue-100/70 leading-relaxed text-lg font-light">
                Переглядайте наш маніфест та дізнавайтесь про те, що ми проповідуємо та в що віримо як церковна спільнота. Приєднуйтеся до нашої духовної подорожі.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid032HpkQTfSCRyLzaUh8iWjF8HbvKm33dedpHj7NMxZEuHEFwsfJzL4oZPj5onV4HNvl&id=100068544552751"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Facebook Story</h4>
                    <p className="text-sm text-blue-100/50 font-light">Дивитись на Facebook</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">
                  <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a
                href="https://youtu.be/QPQjREEFHwY"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors duration-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">YouTube Channel</h4>
                    <p className="text-sm text-blue-100/50 font-light">Дивитись на YouTube</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-red-500/50 group-hover:bg-red-500/20 transition-all duration-500">
                  <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <p className="text-blue-100/60 font-light tracking-wide">
                  {t('shareManifest')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
