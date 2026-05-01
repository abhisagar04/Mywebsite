// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ', full: 'Kannada' },
  { code: 'te', label: 'తెలుగు', full: 'Telugu' },
  { code: 'hi', label: 'हिंदी', full: 'Hindi' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home',     label: t('nav_home') },
    { href: '#services', label: t('nav_services') },
    { href: '#gallery',  label: t('nav_gallery') },
    { href: '#booking',  label: t('nav_booking') },
    { href: '#reviews',  label: t('nav_reviews') },
    { href: '#contact',  label: t('nav_contact') },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-200/95 backdrop-blur-md border-b border-gold-500/20 py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleNav('#home')}
            className="flex flex-col leading-none group">
            <span className="font-display text-2xl text-gold-gradient font-bold tracking-wide group-hover:opacity-90 transition-opacity">
              Saanvi
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-gold-600 uppercase">
              Artography
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-sm text-text-muted hover:text-gold-400 transition-colors duration-200 tracking-wide relative group"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 font-sans text-xs text-gold-500 border border-gold-500/30 rounded px-3 py-1.5 hover:bg-gold-500/10 transition-all"
              >
                <span>{LANGUAGES.find(l => l.code === lang)?.label}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-9 bg-dark-100 border border-gold-500/20 rounded shadow-2xl py-1 min-w-[120px] z-50">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs font-sans hover:bg-gold-500/10 transition-colors ${lang === l.code ? 'text-gold-400' : 'text-gray-400'}`}
                    >
                      {l.full}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-5 py-2 rounded text-sm font-sans font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark-200/98 backdrop-blur-lg transition-all duration-500 flex flex-col justify-center items-center gap-8 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="mobile-nav-link"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link.label}
          </button>
        ))}
        <div className="flex gap-3 mt-4">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); }}
              className={`px-3 py-1.5 rounded border text-xs font-sans transition-all ${lang === l.code ? 'border-gold-500 text-gold-400 bg-gold-500/10' : 'border-white/10 text-gray-500'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="btn-gold mt-4 px-8 py-3 rounded font-sans font-semibold">
          WhatsApp Now
        </a>
      </div>
    </>
  );
}
