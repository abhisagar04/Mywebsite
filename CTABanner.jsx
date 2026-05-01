// src/components/CTABanner.jsx
import { useLanguage } from '../hooks/useLanguage';

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

export default function CTABanner() {
  const { t } = useLanguage();

  const handleBook = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gold gradient bg */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(212,160,23,0.04) 50%, rgba(212,160,23,0.10) 100%)',
          borderTop: '1px solid rgba(212,160,23,0.2)',
          borderBottom: '1px solid rgba(212,160,23,0.2)',
        }}
      />
      {/* Decorative circles */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #d4a017 0%, transparent 70%)' }} />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #d4a017 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
        {/* Ornament */}
        <div className="ornament max-w-xs mx-auto mb-6">
          <span className="font-sans text-xs text-gold-500 tracking-[0.3em] uppercase">Since 2010</span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          {t('cta_title')}
        </h2>
        <p className="font-body text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('cta_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleBook}
            className="btn-gold px-10 py-4 rounded font-sans font-semibold text-sm tracking-widest uppercase">
            {t('cta_btn')}
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-outline-gold flex items-center justify-center gap-2 px-10 py-4 rounded font-sans font-semibold text-sm tracking-widest uppercase">
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
