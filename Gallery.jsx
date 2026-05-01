// src/components/Gallery.jsx
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

// Placeholder image grid items with themed labels
const photos = [
  { id: 1, label: 'Wedding Ceremony', aspect: 'tall', color: '#1a1208' },
  { id: 2, label: 'Pre-Wedding Shoot', aspect: 'wide', color: '#120e08' },
  { id: 3, label: 'Baby Portrait', aspect: 'square', color: '#0e1208' },
  { id: 4, label: 'Drone Aerial', aspect: 'wide', color: '#08100e' },
  { id: 5, label: 'Event Decor', aspect: 'tall', color: '#14100a' },
  { id: 6, label: 'Couple Portrait', aspect: 'square', color: '#100a14' },
  { id: 7, label: 'Wedding Reception', aspect: 'wide', color: '#0a1410' },
  { id: 8, label: 'Birthday Celebration', aspect: 'square', color: '#14080a' },
  { id: 9, label: 'Corporate Event', aspect: 'tall', color: '#080a14' },
];

const videos = [
  { id: 1, label: 'Wedding Cinematic Film', duration: '4:32', thumb: '#1a1208' },
  { id: 2, label: 'Pre-Wedding Highlight', duration: '2:48', thumb: '#120e08' },
  { id: 3, label: 'Birthday Recap', duration: '3:10', thumb: '#0e1208' },
  { id: 4, label: 'Drone Showcase Reel', duration: '1:55', thumb: '#08100e' },
];

function PhotoCard({ label, color }) {
  return (
    <div className="gallery-item relative overflow-hidden rounded-lg group cursor-pointer"
      style={{ background: color, minHeight: '200px' }}>
      {/* Placeholder gradient background */}
      <div className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, rgba(212,160,23,0.08) 100%)`,
        }}
      />
      {/* Decorative frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-gold-500/10 w-3/4 h-3/4 rounded flex items-center justify-center">
          <svg className="w-10 h-10 opacity-20" fill="none" viewBox="0 0 24 24" stroke="#d4a017">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="gallery-overlay absolute inset-0 bg-dark-300/80 flex items-end p-4"
        style={{ background: 'rgba(10,10,10,0.75)' }}>
        <div>
          <p className="font-display text-sm text-gold-400">{label}</p>
          <p className="font-sans text-xs text-gray-500 mt-0.5">Saanvi Artography</p>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ label, duration, thumb }) {
  return (
    <div className="gallery-item relative overflow-hidden rounded-lg group cursor-pointer aspect-video"
      style={{ background: thumb }}>
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${thumb} 0%, rgba(212,160,23,0.06) 100%)` }}
      />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-gold-500/50 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
          <svg className="w-6 h-6 text-gold-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Info */}
      <div className="gallery-overlay absolute inset-0 bg-dark-300/60 flex items-end justify-between p-4">
        <p className="font-display text-sm text-gold-400">{label}</p>
        <span className="font-sans text-xs text-gray-400 bg-black/50 px-2 py-0.5 rounded">{duration}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('photos');

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(212,160,23,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-tag">{t('gallery_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {t('gallery_title')}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-4" />
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t('gallery_subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-10 reveal">
          <div className="border border-gold-500/20 rounded-lg p-1 flex gap-1 bg-white/2">
            {['photos', 'videos'].map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setTab(tabKey)}
                className={`px-6 py-2.5 rounded font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  tab === tabKey
                    ? 'bg-gold-gradient text-dark-300'
                    : 'text-gray-400 hover:text-gold-400'
                }`}
              >
                {t(tabKey === 'photos' ? 'gallery_photos' : 'gallery_videos')}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        {tab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {photos.map((photo, i) => (
              <div key={photo.id}
                className={`${i === 0 || i === 4 ? 'row-span-2' : ''} ${i === 1 || i === 6 ? 'col-span-2 md:col-span-1' : ''}`}
                style={{ minHeight: (i === 0 || i === 4) ? '400px' : '200px' }}>
                <div style={{ height: '100%' }}>
                  <PhotoCard {...photo} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Grid */}
        {tab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        )}

        {/* Note */}
        <p className="text-center font-sans text-xs mt-8 reveal" style={{ color: 'var(--text-muted)' }}>
          ✦ Real portfolio images will be displayed here. Contact us to see our full work.
        </p>
      </div>
    </section>
  );
}
