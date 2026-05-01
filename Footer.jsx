// src/components/Footer.jsx
import { useLanguage } from '../hooks/useLanguage';

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

const navLinks = ['#home', '#services', '#gallery', '#booking', '#reviews', '#contact'];
const navLabels = ['Home', 'Services', 'Gallery', 'Booking', 'Reviews', 'Contact'];

const services = [
  'Wedding Photography', 'Pre-Wedding Shoots', 'Baby Photography',
  'Drone Photography', 'Wedding Planning', 'Birthday Parties',
  'Baby Shower', 'Catering', 'Decorations',
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#080808', borderTop: '1px solid rgba(212,160,23,0.15)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #d4a017 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display text-3xl text-gold-gradient font-bold">Saanvi</span>
              <br />
              <span className="font-sans text-[11px] tracking-[0.3em] text-gold-600 uppercase">Artography</span>
            </div>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              {t('footer_tagline')}
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              +91 8550852773
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-5">{t('footer_links')}</h4>
            <ul className="flex flex-col gap-2.5">
              {navLabels.map((label, i) => (
                <li key={label}>
                  <button onClick={() => handleNav(navLinks[i])}
                    className="font-sans text-sm transition-colors hover:text-gold-400"
                    style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-5">{t('footer_services')}</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Locations */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-5">{t('footer_connect')}</h4>
            <div className="flex flex-col gap-3 mb-6">
              {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                <a key={s} href="#"
                  className="font-sans text-sm transition-colors hover:text-gold-400"
                  style={{ color: 'var(--text-muted)' }}>
                  {s}
                </a>
              ))}
            </div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-3">Locations</h4>
            <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Dommasandra, Bengaluru
              <br />
              Shop No 3, V. Kallahalli Main Rd,
              <br />
              Chambenahalli, Bengaluru,
              <br />
              Karnataka 562125
            </p>
            <div className="mt-4">
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-2">Languages</h4>
              <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
                English · ಕನ್ನಡ · తెలుగు · हिंदी
              </p>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Saanvi Artography. {t('footer_rights')}
          </p>
          <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
            {t('footer_made')}
          </p>
        </div>
      </div>
    </footer>
  );
}
