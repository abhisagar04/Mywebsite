// src/components/WhatsAppFloat.jsx

const WHATSAPP_URL = "https://wa.me/918550852773?text=Hello%20Saanvi%20Artography,%20I%20want%20to%20book%20an%20event.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative group">
        {/* Ping ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.943l6.265-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.524-5.291-1.432l-.38-.226-3.717.974.992-3.633-.247-.396A9.931 9.931 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark-100 border border-gold-500/20 text-white text-xs font-sans px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat with us!
        </div>
      </div>
    </a>
  );
}
