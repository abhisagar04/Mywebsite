// src/components/Services.jsx
import { useLanguage } from '../hooks/useLanguage';

const photographyServices = [
  { icon: '💍', title: 'Wedding Photography', desc: 'Timeless frames capturing the emotion of your sacred union.' },
  { icon: '🌅', title: 'Pre-Wedding Shoots', desc: 'Romantic storytelling before the big day arrives.' },
  { icon: '👶', title: 'Baby Photography', desc: 'Precious milestones preserved with softness and warmth.' },
  { icon: '🎭', title: 'Portraits', desc: 'Your personality captured through the lens, artfully.' },
  { icon: '🚁', title: 'Drone Photography', desc: 'Breathtaking aerial perspectives for grand occasions.' },
  { icon: '🎬', title: 'Cinematic Videography', desc: 'Movie-quality films that replay your finest moments.' },
];

const eventServices = [
  { icon: '💒', title: 'Wedding Planning', desc: 'Full-service planning for your dream wedding.' },
  { icon: '🎂', title: 'Birthday Parties', desc: 'Celebrations crafted with joy and attention to detail.' },
  { icon: '🌸', title: 'Baby Showers', desc: 'Gentle, elegant celebrations welcoming new life.' },
  { icon: '💫', title: 'Anniversary Events', desc: 'Renewing love with beautifully curated evenings.' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Professional events that leave a lasting impression.' },
  { icon: '🪔', title: 'Religious Events', desc: 'Sacred ceremonies managed with utmost respect.' },
  { icon: '🌷', title: 'Decorations', desc: 'Stunning floral and thematic decor for every venue.' },
  { icon: '✉️', title: 'Invitation Printing', desc: 'Luxury printed invitations that set the tone.' },
  { icon: '🍽️', title: 'Catering', desc: 'Exquisite menus tailored to your taste and occasion.' },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="card-hover reveal bg-dark-100 border border-white/5 hover:border-gold-500/30 rounded-lg p-6 flex flex-col gap-3 group cursor-default"
      style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="text-3xl mb-1">{icon}</div>
      <h3 className="font-display text-lg text-white group-hover:text-gold-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {desc}
      </p>
      <div className="mt-auto pt-3 w-8 h-px bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(212,160,23,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">{t('services_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {t('services_title')}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-4" />
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t('services_subtitle')}
          </p>
        </div>

        {/* Photography */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-1 h-8 bg-gold-500 rounded-full" />
            <h3 className="font-display text-2xl text-gold-400">{t('photography')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photographyServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Event Management */}
        <div>
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-1 h-8 bg-gold-500 rounded-full" />
            <h3 className="font-display text-2xl text-gold-400">{t('event_management')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
