// src/components/Reviews.jsx
import { useLanguage } from '../hooks/useLanguage';

const reviews = [
  {
    name: 'Ananya Reddy',
    event: 'Wedding Photography',
    rating: 5,
    review: 'Awesome photography and service! The team captured every emotion of our wedding day beautifully. We were overwhelmed with happiness when we saw the photos. Truly professional!',
    initial: 'A',
    location: 'Bengaluru',
  },
  {
    name: 'Karthik & Priya',
    event: 'Wedding Planning',
    rating: 5,
    review: 'Event management nice maintaining — everything was perfectly organized. From decoration to catering, every detail was handled with such care. We had the wedding of our dreams!',
    initial: 'K',
    location: 'Bengaluru',
  },
  {
    name: 'Meghana Shetty',
    event: 'Pre-Wedding Shoot',
    rating: 5,
    review: 'Highly skilled team with an eye for perfection. Our pre-wedding photos look like they are from a movie. The drone shots were absolutely stunning. 100% recommend Saanvi Artography!',
    initial: 'M',
    location: 'Bengaluru',
  },
  {
    name: 'Rajesh Iyengar',
    event: 'Corporate Event',
    rating: 5,
    review: 'Very professional team. Managed our company annual event seamlessly. The photography was top-notch and the event flow was perfect. Will definitely hire them again.',
    initial: 'R',
    location: 'Bengaluru',
  },
  {
    name: 'Deepika Nair',
    event: 'Baby Photography',
    rating: 5,
    review: 'Wonderful experience! They were so gentle and patient with our little one. The baby photos turned out absolutely adorable. I recommend Saanvi Artography to every new parent!',
    initial: 'D',
    location: 'Bengaluru',
  },
  {
    name: 'Suresh & Kavitha',
    event: 'Anniversary Event',
    rating: 5,
    review: 'They made our 25th anniversary unforgettable. The decorations were elegant and the cinematic video they made brought tears to our eyes. Pure gold service!',
    initial: 'S',
    location: 'Bengaluru',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="star text-base">★</span>
      ))}
    </div>
  );
}

function ReviewCard({ name, event, rating, review, initial, location }) {
  return (
    <div className="card-hover reveal border border-white/5 hover:border-gold-500/25 rounded-xl p-6 flex flex-col gap-4"
      style={{ background: 'rgba(255,255,255,0.02)' }}>
      {/* Quote mark */}
      <div className="text-gold-500 opacity-30 font-display text-5xl leading-none -mb-2">"</div>

      {/* Stars */}
      <StarRating count={rating} />

      {/* Review text */}
      <p className="font-body text-base leading-relaxed flex-1" style={{ color: 'rgba(245,240,232,0.75)' }}>
        {review}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-dark-300 font-display font-bold text-sm">
          {initial}
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-white">{name}</p>
          <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
            {event} · {location}
          </p>
        </div>
        {/* Verified badge */}
        <div className="ml-auto">
          <span className="font-sans text-[10px] tracking-wider text-gold-600 border border-gold-500/20 px-2 py-0.5 rounded-full">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(212,160,23,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">{t('reviews_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {t('reviews_title')}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-6" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star text-2xl">★</span>
              ))}
            </div>
            <div className="text-left">
              <p className="font-display text-3xl font-bold text-white">5.0</p>
              <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>Average Rating</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="text-center mt-12 reveal">
          <p className="font-body text-base mb-4" style={{ color: 'var(--text-muted)' }}>
            Had a great experience with us? We'd love to hear from you!
          </p>
          <a
            href="https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20share%20my%20feedback!"
            target="_blank" rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 rounded font-sans text-sm font-semibold"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
