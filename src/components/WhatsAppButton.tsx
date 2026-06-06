import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      id="floating-whatsapp-btn"
      href="https://wa.me/2347065000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lexzy Autos on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-cream p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      {/* Pulse Outer Wave for Nigerian Call To Action optimization */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/20 active:bg-transparent animate-ping -z-10" />

      <MessageCircle
        id="whatsapp-fab-icon"
        size={24}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:rotate-12"
      />

      {/* Slide-out tooltip to capture user intent */}
      <span className="absolute right-14 bg-obsidian border border-gold/15 text-gold text-[10px] tracking-widest uppercase font-mono py-1 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:inline">
        ONLINE ADVISOR
      </span>
    </a>
  );
}
