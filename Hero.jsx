// src/components/Hero.jsx
import { useLanguage } from '../hooks/useLanguage';

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden hero-pattern">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-300" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,160,23,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Decorative corner ornaments */}
      <div className="absolute top-24 left-6 md:left-12 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 M0 0 L0 60" stroke="#d4a017" strokeWidth="1"/>
          <path d="M10 10 L30 10 M10 10 L10 30" stroke="#d4a017" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="absolute top-24 right-6 md:right-12 opacity-20 rotate-90">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 M0 0 L0 60" stroke="#d4a017" strokeWidth="1"/>
          <path d="M10 10 L30 10 M10 10 L10 30" stroke="#d4a017" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: '#d4a017',
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow tag */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="h-px w-12 bg-gold-500 opacity-60" />
          <span className="section-tag">Saanvi Artography</span>
          <div className="h-px w-12 bg-gold-500 opacity-60" />
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold leading-tight mb-4"
          style={{ animation: 'fadeUp 0.9s ease 0.2s both' }}>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white">
            {t('hero_title')}
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-gold-gradient mt-1">
            {t('hero_title2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 0.9s ease 0.4s both', color: 'var(--text-muted)' }}>
          {t('hero_subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          style={{ animation: 'fadeUp 0.9s ease 0.6s both' }}>
          <button
            onClick={() => handleScroll('#booking')}
            className="btn-gold px-8 py-4 rounded text-sm font-sans font-semibold tracking-wider uppercase w-full sm:w-auto"
          >
            {t('hero_btn_primary')}
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-outline-gold flex items-center gap-2 px-8 py-4 rounded text-sm font-sans font-semibold tracking-wider uppercase w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            {t('hero_btn_whatsapp')}
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4"
          style={{ animation: 'fadeUp 0.9s ease 0.8s both' }}>
          {[
            { icon: '✦', label: t('badge_since') },
            { icon: '★', label: t('badge_rated') },
            { icon: '◈', label: t('badge_location') },
          ].map((badge) => (
            <div key={badge.label}
              className="trust-badge flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="text-gold-500 text-sm">{badge.icon}</span>
              <span className="font-sans text-xs tracking-wide text-gray-300">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: 'float 2s ease-in-out infinite' }}>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500 to-transparent" />
      </div>
    </section>
  );
}
