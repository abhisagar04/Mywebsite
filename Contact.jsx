// src/components/Contact.jsx
import { useLanguage } from '../hooks/useLanguage';

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

export default function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      ),
      label: t('contact_phone'),
      value: '8550852773',
      href: WHATSAPP_URL,
      external: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact_locations'),
      value: 'Dommasandra, Bengaluru',
      value2: 'Shop No 3, V. Kallahalli Main Rd, Chambenahalli, Bengaluru, KA 562125',
      href: 'https://maps.google.com/?q=Dommasandra+Bengaluru',
      external: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t('contact_hours'),
      value: t('contact_hours_val'),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">{t('contact_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {t('contact_title')}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-4" />
          <p className="font-body text-lg" style={{ color: 'var(--text-muted)' }}>
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactItems.map((item, i) => (
              <div key={i} className="card-hover reveal border border-white/5 hover:border-gold-500/25 rounded-xl p-6 flex gap-5"
                style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-sans text-xs text-gold-600 tracking-widest uppercase mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.external ? '_blank' : '_self'} rel="noopener noreferrer"
                      className="font-display text-lg text-white hover:text-gold-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-display text-lg text-white">{item.value}</p>
                  )}
                  {item.value2 && (
                    <p className="font-sans text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{item.value2}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Placeholders */}
            <div className="reveal border border-white/5 rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="font-sans text-xs text-gold-600 tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', icon: '📷', href: '#' },
                  { name: 'Facebook', icon: '👥', href: '#' },
                  { name: 'YouTube', icon: '▶️', href: '#' },
                ].map((s) => (
                  <a key={s.name} href={s.href}
                    className="flex items-center gap-2 border border-gold-500/20 rounded-lg px-4 py-2 hover:bg-gold-500/10 hover:border-gold-500/40 transition-all font-sans text-sm text-gray-400 hover:text-gold-400">
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed + CTA block */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="reveal rounded-xl overflow-hidden border border-gold-500/15" style={{ height: '280px' }}>
              <iframe
                title="Saanvi Artography Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4383!2d77.7408!3d12.8640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUxJzUwLjQiTiA3N8KwNDQnMjYuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* WhatsApp CTA card */}
            <div className="reveal rounded-xl p-8 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(212,160,23,0.1) 0%, rgba(212,160,23,0.04) 100%)', border: '1px solid rgba(212,160,23,0.2)' }}>
              <div className="absolute inset-0 opacity-5"
                style={{ background: 'radial-gradient(circle at 30% 50%, #d4a017 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <p className="font-sans text-xs text-gold-500 tracking-widest uppercase mb-2">Quick Connect</p>
                <h3 className="font-display text-2xl text-white mb-3">Chat With Us on WhatsApp</h3>
                <p className="font-body text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                  We typically respond within minutes. Let's discuss your event!
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded font-sans font-semibold text-sm tracking-wider uppercase">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  +91 8550852773
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
