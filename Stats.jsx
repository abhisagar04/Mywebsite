// src/components/Stats.jsx

const stats = [
  { number: '14+', label: 'Years of Experience', icon: '✦' },
  { number: '500+', label: 'Events Managed', icon: '◈' },
  { number: '1200+', label: 'Happy Clients', icon: '♡' },
  { number: '5.0', label: 'Average Rating', icon: '★' },
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'rgba(212,160,23,0.03)', borderTop: '1px solid rgba(212,160,23,0.1)', borderBottom: '1px solid rgba(212,160,23,0.1)' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label}
              className={`reveal flex flex-col items-center text-center py-4 ${i < stats.length - 1 ? 'md:border-r md:border-gold-500/10' : ''}`}>
              <span className="text-gold-500 text-lg mb-2 opacity-70">{stat.icon}</span>
              <span className="font-display text-4xl md:text-5xl font-bold text-gold-gradient">
                {stat.number}
              </span>
              <span className="font-sans text-xs tracking-wider uppercase mt-2" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
