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

    // Simulate luxury concierge response time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 sm:py-40 bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Block */}
        <div id="contact-header" className="text-center mb-16 max-w-2xl mx-auto">
          <span
            id="contact-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            DISCREET INQUIRY / CONTACT
          </span>
          <h2
            id="contact-headline"
            className="font-cormorant text-cream text-4xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight"
          >
            Begin Your Journey
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
          {/* Left panel: Info Details (Grid span 5) */}
          <div id="contact-info-panel" className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-4 max-w-md">
              <h3 className="font-cormorant text-cream text-3xl font-light tracking-wide italic">
                The Lexzy Autos Showroom
              </h3>
              <p className="font-inter text-muted text-sm font-light leading-relaxed">
                Our bespoke curatorial lounge and viewing collections operate strictly under formal appointment. Reach out to arrange a private consultation or virtual viewing with our portfolio specialists.
              </p>
            </div>

            <div className="space-y-8">
              {/* Point 1 */}
              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    Viewing Lounge
                  </h4>
                  <p className="font-cormorant text-cream text-base md:text-lg font-light leading-snug">
                    Mayfair Mews House, London, United Kingdom
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    Concierge Desk
                  </h4>
                  <p className="font-cormorant text-cream text-base md:text-lg font-light leading-snug">
                    +44 (0) 20 7946 0884
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start space-x-6">
                <div className="text-gold mt-1">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-inter text-gold text-[10px] tracking-widest uppercase font-light">
                    Digital Inquiries
                  </h4>
                  <p className="font-cormorant text-cream text-base md:text-lg font-light leading-snug hover:text-gold transition-colors duration-300">
                    curatorship@lexzyautos.com
                  </p>
                </div>
              </div>
            </div>

            <div className="w-16 h-[1px] bg-gold/15 pt-2" />
          </div>

          {/* Right panel: Active Form (Grid span 7) */}
          <div id="contact-form-panel" className="lg:col-span-7">
            <div className="bg-surface border border-gold/10 p-8 sm:p-12 relative rounded-sm">
              {isSubmitted ? (
                /* Success Notification State with gold elements */
                <div
                  id="contact-success-state"
                  className="flex flex-col items-center text-center py-12 space-y-6"
                >
                  <div className="text-gold animate-bounce">
                    <CheckCircle2 size={48} strokeWidth={1} />
                  </div>
                  <h3 className="font-cormorant text-cream text-3xl font-light tracking-wide">
                    Enquiry Received
                  </h3>
                  <p className="font-inter text-muted text-sm font-light leading-relaxed max-w-sm">
                    Thank you. Your request has been transmitted securely. An executive curator will establish contact with you discreetly within twenty-four hours.
                  </p>
                </div>
              ) : (
                <form id="inquiring-form" onSubmit={handleSubmit} className="space-y-10">
                  {/* Name field */}
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

                  {/* Email & Phone grid */}
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
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="peer bg-transparent border-b border-gold/30 focus:border-gold text-cream outline-none w-full py-4 transition-colors duration-300 font-inter font-light text-sm"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 text-whisper transition-all duration-300 pointer-events-none -top-4 text-[10px] text-gold/60 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-whisper peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] uppercase tracking-widest"
                      >
                        Contact Number
                      </label>
                    </div>
                  </div>

                  {/* Message Field */}
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
                      Commission Requirements / Remarks
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      id="inquiring-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto border border-gold text-gold hover:bg-gold hover:text-obsidian px-10 py-4 tracking-[0.25em] text-xs font-inter font-light uppercase transition-all duration-500 rounded-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'REQUEST PORTFOLIO CATALOG'}
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
