import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="app-footer"
      role="contentinfo"
      className="bg-obsidian border-t border-gold/10 py-16 sm:py-20 text-cream"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left space-y-4">
            <a
              id="footer-logo"
              href="#root"
              className="font-cormorant text-gold text-2xl tracking-[0.25em] font-medium inline-block hover:opacity-80 transition-opacity"
            >
              LEXZY AUTOS
            </a>
            <p id="footer-fineprint" className="font-inter text-muted text-[11px] sm:text-xs font-light tracking-widest uppercase max-w-sm leading-relaxed">
              We deal in brand new, tokunbo, and luxury exotic cars across Nigeria.
            </p>
          </div>

          <div className="text-center space-y-4">
            <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
              SHOWROOM PRESENCE
            </h4>
            <p id="footer-locations" className="font-cormorant text-cream text-lg sm:text-xl font-light tracking-[0.1em] block">
              Ibadan &middot; Lagos &middot; Nigeria
            </p>
          </div>

          <div className="text-center md:text-right space-y-4">
            <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
              CONNECT ONLINE
            </h4>
            <div id="footer-social-deck" className="flex items-center justify-center md:justify-end space-x-6 text-cream/70">
              <a
                id="social-instagram"
                href="https://instagram.com/lexzyautos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Lexzy Autos on Instagram"
                className="hover:text-gold transition-colors duration-300 transform hover:scale-105"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                id="social-whatsapp"
                href="https://wa.me/2347065000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct trade inquiry on WhatsApp"
                className="hover:text-gold transition-colors duration-300 transform hover:scale-105"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <a
                id="social-facebook"
                href="https://facebook.com/lexzyautos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Lexzy Autos on Facebook"
                className="hover:text-gold transition-colors duration-300 transform hover:scale-105"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p id="footer-copyright" className="font-inter text-neutral-500 text-[10px] tracking-widest uppercase font-light">
            &copy; 2025 Lexzy Autos. All rights reserved.
          </p>

          <p id="footer-signature" className="font-inter text-neutral-600 text-[10px] tracking-widest uppercase font-light">
            Engineered for Ibadan &amp; Lagos Markets
          </p>
        </div>
      </div>
    </footer>
  );
}
