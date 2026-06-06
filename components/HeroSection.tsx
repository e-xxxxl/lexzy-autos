"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn('Video playback prevented:', error);
          });
        }
      } catch (error) {
        console.warn('Playback failed:', error);
        setVideoError(true);
      }
    }
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
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
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Welcome Introduction"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-obsidian"
    >
      {!videoError ? (
        <video
          id="hero-bg-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
          onError={handleVideoError}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-40 filter saturate-[0.7] contrast-[1.05]"
          src="https://player.vimeo.com/external/384761655.sd.mp4?s=3828786a5e54d67de055d974229ca232145bc02e&profile_id=165&oauth2_token_id=57447761"
        />
      ) : (
        <div id="hero-fallback-gradient" className="absolute inset-0 bg-gradient-to-br from-obsidian via-surface to-obsidian animate-pulse duration-[8000ms]" />
      )}

      <div id="hero-vignette" className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/85 select-none pointer-events-none" />
      <div id="hero-vignette-sides" className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0A0A0A_95%)] opacity-90 select-none pointer-events-none" />

      <motion.div
        id="hero-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
      >
        <motion.span
          variants={itemVariants}
          className="font-inter text-gold text-[11px] sm:text-xs tracking-[0.4em] uppercase mb-4 block"
        >
          WELCOME TO LEXZY AUTOS NIGERIA
        </motion.span>

        <motion.h1
          id="hero-main-headline"
          variants={itemVariants}
          className="font-cormorant text-cream font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight mb-6"
        >
          Your Dream Car, Delivered.
        </motion.h1>

        <motion.div
          id="hero-accent-divider"
          variants={itemVariants}
          className="h-[1px] w-20 bg-gold mb-8"
        />

        <motion.p
          id="hero-subhead"
          variants={itemVariants}
          className="font-inter text-muted text-sm sm:text-base md:text-[17px] tracking-[0.05em] font-light max-w-2xl leading-relaxed mb-10"
        >
          Ibadan and Lagos's most trusted destination for brand new, tokunbo, and luxury exotic cars.
        </motion.p>

        <motion.div
          id="hero-actions-container"
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <a
            id="hero-cta-collection"
            href="#gallery"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 border border-gold text-obsidian bg-gold hover:bg-transparent hover:text-gold px-8 py-4 tracking-[0.2em] text-xs font-inter font-light uppercase transition-all duration-500 rounded-sm hover:-translate-y-0.5"
          >
            Explore Our Collection
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            id="hero-cta-whatsapp"
            href="https://wa.me/2347065000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 px-8 py-4 tracking-[0.2em] text-xs font-inter font-light uppercase transition-all duration-500 rounded-sm hover:-translate-y-0.5"
          >
            <MessageCircle size={14} />
            Talk to Us on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      <div
        id="hero-indicator"
        className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <a
          id="hero-indicator-link"
          href="#about"
          className="pointer-events-auto p-3 group"
          aria-label="Scroll down to explore company ethos"
        >
          <ChevronDown
            id="hero-indicator-chevron"
            className="text-gold group-hover:text-gold-light animate-scroll-down transition-colors"
            size={22}
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  );
}
