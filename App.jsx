// src/App.jsx
import { LanguageContext, useLanguageState } from './hooks/useLanguage';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CTABanner from './components/CTABanner';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function AppContent() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark)' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <CTABanner />
        <Booking />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  const languageState = useLanguageState();

  return (
    <LanguageContext.Provider value={languageState}>
      <AppContent />
    </LanguageContext.Provider>
  );
}
