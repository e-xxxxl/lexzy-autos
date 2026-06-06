import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="bg-surface border-t border-gold/10 py-12 px-6 sm:px-12 text-whisper text-xs font-light tracking-wide"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Brand Wordmark */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a
            id="footer-wordmark"
            href="#root"
            className="font-cormorant text-gold text-lg md:text-xl tracking-[0.3em] font-medium transition-opacity hover:opacity-85"
          >
            LEXZY AUTOS
          </a>
          <p className="font-cormorant italic text-[11px] text-whisper/75 tracking-wider select-none">
            Est. London, UK, 2012
          </p>
        </div>

        {/* Center/Right Side: Disclaimer and Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3 text-center md:text-right md:order-last">
          <p id="footer-copyright" className="font-inter font-light text-whisper/80 text-[11px] tracking-wider">
            &copy; {currentYear} Lexzy Autos Limited. All rights reserved.
          </p>
          <p id="footer-legal" className="text-[10px] text-whisper/50 tracking-wide max-w-xs leading-relaxed">
            Lexzy Autos is an independent portfolio curatorship house. Designated marques, logos, and emblems are registered trademarks of their respective makers.
          </p>
        </div>

        {/* Social interactions */}
        <div className="flex items-center space-x-6">
          <a
            id="footer-social-instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whisper hover:text-gold transition-colors duration-300 p-2 border border-gold/10 rounded-full hover:border-gold/35"
            aria-label="Follow Lexzy Autos on Instagram"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>

          <a
            id="footer-social-whatsapp"
            href="https://wa.me/4479460884"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whisper hover:text-gold transition-colors duration-300 p-2 border border-gold/10 rounded-full hover:border-gold/35"
            aria-label="Inquire directly via WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
