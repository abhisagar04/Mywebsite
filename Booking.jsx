// src/components/Booking.jsx
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const eventTypes = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Baby Photography',
  'Portrait Session',
  'Drone Photography',
  'Cinematic Videography',
  'Wedding Planning',
  'Birthday Party',
  'Baby Shower',
  'Anniversary Event',
  'Corporate Event',
  'Religious Event',
  'Decoration Only',
  'Full Event Package',
];

export default function Booking() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', date: '', location: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    const msg = `Hello Saanvi Artography! 🌟

*Name:* ${form.name}
*Phone:* ${form.phone}
*Event Type:* ${form.eventType || 'Not specified'}
*Event Date:* ${form.date || 'Not specified'}
*Location:* ${form.location || 'Not specified'}
*Message:* ${form.message || 'No additional message'}

I want to book your services.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918550852773?text=${encoded}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,160,23,0.05) 0%, transparent 70%)' }}
      />
      {/* Top/bottom border lines */}
      <div className="absolute top-0 left-0 right-0 gold-line" />
      <div className="absolute bottom-0 left-0 right-0 gold-line" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-tag">{t('booking_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {t('booking_title')}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-4" />
          <p className="font-body text-lg" style={{ color: 'var(--text-muted)' }}>
            {t('booking_subtitle')}
          </p>
        </div>

        {/* Form Card */}
        <div className="reveal bg-white/2 border border-gold-500/15 rounded-2xl p-6 md:p-10"
          style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(8px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_name')} *
              </label>
              <input
                type="text" name="name" value={form.name}
                onChange={handleChange}
                placeholder="Priya Sharma"
                className="form-input"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_phone')} *
              </label>
              <input
                type="tel" name="phone" value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="form-input"
              />
            </div>

            {/* Event Type */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_event')}
              </label>
              <select
                name="eventType" value={form.eventType}
                onChange={handleChange}
                className="form-input"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <option value="" style={{ background: '#141414' }}>{t('select_event')}</option>
                {eventTypes.map((et) => (
                  <option key={et} value={et} style={{ background: '#141414' }}>{et}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_date')}
              </label>
              <input
                type="date" name="date" value={form.date}
                onChange={handleChange}
                className="form-input"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_location')}
              </label>
              <input
                type="text" name="location" value={form.location}
                onChange={handleChange}
                placeholder="Bengaluru, Karnataka"
                className="form-input"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="font-sans text-xs text-gold-500 tracking-wider uppercase">
                {t('field_message')}
              </label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your event, special requirements, budget, etc."
                rows={4}
                className="form-input resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleSubmit}
              className="btn-gold w-full sm:w-auto px-10 py-4 rounded font-sans font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {t('btn_submit')}
            </button>
            <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
              You'll be redirected to WhatsApp with your details pre-filled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
