"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: [0.4, 0, 0.2, 1] as any, duration: 0.7 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: [0.4, 0, 0.2, 1] as any, duration: 0.7 },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full min-h-screen bg-obsidian border-b border-gold/5 flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] items-stretch min-h-screen w-full">
        {/* Left Side: Brand story / copy */}
        <motion.div
          id="about-brand-column"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col justify-center py-20 px-8 sm:px-16 md:px-24 lg:py-32 lg:px-20 bg-obsidian text-left"
        >
          <span
            id="about-section-label"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-8 block select-none"
          >
            OUR PROFILE / LE PROFIL
          </span>

          <h2
            id="about-heading"
            className="font-cormorant text-cream text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-8"
          >
            We Know What Drives You
          </h2>

          <blockquote id="about-pullquote" className="mb-10 border-l border-gold/20 pl-6">
            <p className="font-cormorant italic text-gold text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-wide">
              “We don't just sell cars — we help you arrive in style.”
            </p>
          </blockquote>

          <div id="about-narrative" className="space-y-6 max-w-2xl font-inter text-muted text-[15px] sm:text-[16px] font-light leading-relaxed">
            <p>
              At Lexzy Autos, we've built our reputation on one thing: <strong>trust</strong>. Based in Ibadan with a strong presence in Lagos, we've helped hundreds of young Nigerians find cars that match their lifestyle, budget, and ambitions — without the stress.
            </p>
            <p>
              Whether you're stepping into your first car, upgrading to a clean tokunbo, or treating yourself to something exotic, our team takes the time to understand what you actually need — not just what looks good on paper.
            </p>
            <p>
              We are proudly Nigerian, deeply rooted in Ibadan, and connected across Lagos. Every car in our collection is inspected, verified, and backed by our personal guarantee of quality.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Imagery */}
        <motion.div
          id="about-image-column"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden flex items-stretch"
        >
          <div
            id="about-image-overlay"
            className="absolute inset-0 bg-gold/5 mix-blend-color z-10 pointer-events-none"
          />
          <div
            id="about-image-gradient"
            className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent z-10 pointer-events-none lg:block hidden"
          />
          <div
            id="about-image-gradient-mobile"
            className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 pointer-events-none block lg:hidden"
          />

          <Image
            id="about-sports-car"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=85"
            alt="Lexzy Autos — Premium sports car representing luxury and curated journeys in Ibadan and Lagos, Nigeria"
            className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.05] transition-transform duration-[2000ms] hover:scale-105"
            width={800}
            height={1200}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
