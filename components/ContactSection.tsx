"use client";

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 sm:py-40 bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div id="contact-header" className="text-center mb-16 max-w-2xl mx-auto">
          <span
            id="contact-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            DISCREET INQUIRY / CONTACT
          </span>
          <h2
            id="contact-heading"
            className="font-cormorant text-cream text-4xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight"
          >
            Let's Find Your Perfect Car
          </h2>
          <p id="contact-subtext" className="font-inter text-muted text-sm font-light leading-relaxed max-w-xl mx-auto mt-4">
            Tell us what you're looking for and our team will get back to you within 24 hours. No pressure, no jargon — just straight talk.
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
          <div id="contact-info-panel" className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-4 max-w-md">
              <h3 className="font-cormorant text-cream text-3xl font-light tracking-wide italic">
                Lexzy Autos Showrooms
              </h3>
              <p className="font-inter text-muted text-sm font-light leading-relaxed">
                Connect with our advisors in Oyo State or Lagos. We organize secure viewings, prompt deliveries, and absolute paperwork handling so you never have to worry.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    Locations
                  </h4>
                  <p className="font-cormorant text-cream text-base md:text-lg font-light leading-snug">
                    Ibadan, Oyo State & Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    WhatsApp Desk
                  </h4>
                  <a
                    href="https://wa.me/2347065000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cormorant text-cream text-base md:text-lg font-light leading-snug hover:text-gold transition-colors duration-300"
                  >
                    +234 706 500 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    Digital Inquiries
                  </h4>
                  <a
                    href="mailto:hello@lexzyautos.com"
                    className="font-cormorant text-cream text-base md:text-lg font-light leading-snug hover:text-gold transition-colors duration-300"
                  >
                    hello@lexzyautos.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10">
              <p className="font-inter text-gold text-xs tracking-wider uppercase font-medium">
                Trusted by 500+ Nigerians across Ibadan and Lagos.
              </p>
            </div>
          </div>

          <div id="contact-form-panel" className="lg:col-span-7 w-full">
            <div className="bg-surface border border-gold/10 p-8 sm:p-12 relative rounded-sm">
              {isSubmitted ? (
                <div
                  id="contact-success-state"
                  className="flex flex-col items-center text-center py-12 space-y-6"
                >
                  <div className="text-gold animate-bounce">
                    <CheckCircle2 id="contact-success-icon" size={48} strokeWidth={1} />
                  </div>
                  <h3 className="font-cormorant text-cream text-3xl font-light tracking-wide">
                    Enquiry Transmitted
                  </h3>
                  <p className="font-inter text-muted text-sm font-light leading-relaxed max-w-sm">
                    Thank you. Your request is secure. One of our lead portfolio handlers will connect with you via WhatsApp or phone call to walk you through options privately.
                  </p>
                </div>
              ) : (
                <form id="inquiring-form" onSubmit={handleSubmit} className="space-y-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="peer bg-transparent border-b border-gold/30 focus:border-gold text-cream outline-none w-full py-4 transition-colors duration-300 font-inter font-light text-sm"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 text-whisper transition-all duration-300 pointer-events-none -top-4 text-[10px] text-gold/60 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-whisper peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] uppercase tracking-widest"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="peer bg-transparent border-b border-gold/30 focus:border-gold text-cream outline-none w-full py-4 transition-colors duration-300 font-inter font-light text-sm"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 text-whisper transition-all duration-300 pointer-events-none -top-4 text-[10px] text-gold/60 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-whisper peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] uppercase tracking-widest"
                      >
                        Email Address
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="peer bg-transparent border-b border-gold/30 focus:border-gold text-cream outline-none w-full py-4 transition-colors duration-300 font-inter font-light text-sm"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 text-whisper transition-all duration-300 pointer-events-none -top-4 text-[10px] text-gold/60 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-whisper peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] uppercase tracking-widest"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="peer bg-transparent border-b border-gold/30 focus:border-gold text-cream outline-none w-full py-4 resize-none transition-colors duration-300 font-inter font-light text-sm"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 text-whisper transition-all duration-300 pointer-events-none -top-4 text-[10px] text-gold/60 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-whisper peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] uppercase tracking-widest"
                    >
                      Message / What car are you looking for?
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      id="inquiring-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto border border-gold text-gold hover:bg-gold hover:text-obsidian px-10 py-4 tracking-[0.25em] text-xs font-inter font-light uppercase transition-all duration-500 rounded-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'Send Enquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
