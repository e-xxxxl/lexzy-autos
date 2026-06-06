import { useState } from 'react';
import { MapPin, Phone, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello@lexzyautos.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0, 0.2, 1] as any,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 font-inter">
        {/* Section Header */}
        <div id="contact-header" className="text-center mb-16 max-w-2xl mx-auto">
          <span
            id="contact-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            DISCREET CONNECTIONS / CONTACT
          </span>
          <h2
            id="contact-heading"
            className="font-cormorant text-cream text-4xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight"
          >
            Let's Keep In Touch
          </h2>
          <p id="contact-subtext" className="font-inter text-muted text-sm font-light leading-relaxed max-w-xl mx-auto mt-4">
            No long automation queues or sales pressure. Connect with us directly to secure your dream drive.
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <motion.div
          id="contact-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-12"
        >
          {/* Card 1: Email Channel */}
          <motion.div
            id="contact-card-email"
            variants={itemVariants}
            className="group relative bg-[#0d0d0d] border border-gold/15 p-8 flex flex-col justify-between rounded-xs overflow-hidden transition-all duration-500 hover:border-gold hover:bg-[#121212]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div>
              <div className="text-gold mb-6 inline-block p-3 bg-gold/5 rounded-xs transition-transform duration-500 group-hover:scale-105">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-cormorant text-cream text-2xl font-light tracking-wide mb-2 text-left">
                Send Us An Email
              </h3>
              <p className="font-inter text-muted text-xs tracking-wider uppercase mb-6 font-light text-left">
                EMAIL INQUIRIES
              </p>
              <div className="bg-obsidian border border-gold/10 p-4 rounded-xs mb-8 flex items-center justify-between gap-3">
                <span className="font-mono text-cream text-sm truncate select-all">
                 lexzycarhub@gmail.com
                </span>
                <button
                  id="email-copy-btn"
                  onClick={copyToClipboard}
                  className="text-gold hover:text-white transition-colors p-1 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <a
                id="contact-email-link"
                href="mailto:lexzycarhub@gmail.com"
                className="w-full flex items-center justify-center gap-2 border border-gold text-obsidian bg-gold hover:bg-transparent hover:text-gold py-3 tracking-[0.2em] text-[10px] font-inter font-light uppercase transition-all duration-300 rounded-xs cursor-pointer"
              >
                Send Direct Mail
                <ExternalLink size={12} />
              </a>
              {copied && (
                <p className="text-center font-inter text-[10px] text-emerald-400 font-light tracking-wider">
                  Address copied to clipboard!
                </p>
              )}
            </div>
          </motion.div>

          {/* Card 2: WhatsApp Channel */}
          <motion.div
            id="contact-card-whatsapp"
            variants={itemVariants}
            className="group relative bg-[#0d0d0d] border border-gold/15 p-8 flex flex-col justify-between rounded-xs overflow-hidden transition-all duration-500 hover:border-gold hover:bg-[#121212]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div>
              <div className="text-gold mb-6 inline-block p-3 bg-gold/5 rounded-xs transition-transform duration-500 group-hover:scale-105">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-cormorant text-cream text-2xl font-light tracking-wide mb-2 text-left">
                Schedule Vehicle Inspection
              </h3>
              <p className="font-inter text-muted text-xs tracking-wider uppercase mb-6 font-light text-left">
                WHATSAPP CHAT / CALL
              </p>
              <div className="bg-obsidian border border-gold/10 p-4 rounded-xs mb-8 flex items-center justify-between">
                <span className="font-mono text-cream text-sm select-all">
                  +2347041476698
                </span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                </span>
              </div>
            </div>

            <a
              id="contact-whatsapp-link"
              href="https://wa.me/+2347041476698"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 py-3 tracking-[0.2em] text-[10px] font-inter font-light uppercase transition-all duration-300 rounded-xs cursor-pointer"
            >
              Start WhatsApp
              <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Card 3: Our Showrooms */}
          <motion.div
            id="contact-card-showrooms"
            variants={itemVariants}
            className="group relative bg-[#0d0d0d] border border-gold/15 p-8 flex flex-col justify-between rounded-xs overflow-hidden transition-all duration-500 hover:border-gold hover:bg-[#121212] md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div>
              <div className="text-gold mb-6 inline-block p-3 bg-gold/5 rounded-xs transition-transform duration-500 group-hover:scale-105">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-cormorant text-cream text-2xl font-light tracking-wide mb-2 text-left">
                Our Lot
              </h3>
              <p className="font-inter text-muted text-xs tracking-wider uppercase mb-6 font-light text-left">
                PHYSICAL LOCATIONS
              </p>
              
              <div className="space-y-4 font-inter text-muted text-sm font-light leading-relaxed text-left">
                <div>
                  <h4 className="text-gold text-[10px] tracking-widest uppercase mb-1">Oyo State</h4>
                  <p className="text-cream text-sm">Opposite Polaris bank leaster building ring road,Ibadan, Nigeria</p>
                </div>
                {/* <div className="pt-2 border-t border-gold/5">
                  <h4 className="text-gold text-[10px] tracking-widest uppercase mb-1">Lagos Hub</h4>
                  <p className="text-cream text-sm">Lagos, Nigeria</p>
                </div> */}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/10 text-center select-none">
              <p className="font-cormorant italic text-gold text-xs leading-relaxed max-w-xs mx-auto">
                "Viewings organized securely and discreetly by appointment."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Global Bottom Trustline */}
        <div id="contact-trustline" className="mt-16 pt-8 border-t border-gold/10 text-center">
          <p className="font-inter text-gold/80 text-xs tracking-[0.2em] uppercase font-light">
            Trusted by supercar collectors and smart urban buyers in Ibadan and Lagos.
          </p>
        </div>
      </div>
    </section>
  );
}
