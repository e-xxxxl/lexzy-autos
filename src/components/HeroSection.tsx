import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn('Video autoplay failed or was prevented:', error);
            // Non-fatal, fallback to gradient overlay
          });
        }
      } catch (error) {
        console.warn('Video play method failed:', error);
        setVideoError(true);
      }
    }
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Staggered transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0, 0.2, 1],
        duration: 0.75,
      },
    },
  };

  return (
    <div
      id="hero-section"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-obsidian"
    >
      {/* Video / Gradient Layer */}
      {!videoError ? (
        <video
          id="hero-bg-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => console.log("Video source loaded")}
          onError={handleVideoError}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-50 filter saturate-[0.7] contrast-[1.05]"
          src="https://player.vimeo.com/external/384761655.sd.mp4?s=3828786a5e54d67de055d974229ca232145bc02e&profile_id=165&oauth2_token_id=57447761"
        />
      ) : (
        <div id="hero-fallback-gradient" className="absolute inset-0 bg-gradient-to-br from-obsidian via-surface to-obsidian animate-pulse duration-[8000ms]" />
      )}

      {/* Dark Luxury Vignette Overlay */}
      <div id="hero-vignette" className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/80 select-none pointer-events-none" />
      <div id="hero-radial-shade" className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0A0A0A_95%)] opacity-85 select-none pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        id="hero-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
      >
        <motion.h1
          id="hero-title"
          variants={itemVariants}
          className="font-cormorant text-cream font-light text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.12em] leading-none mb-6"
        >
          LEXZY AUTOS
        </motion.h1>

        {/* Thin gold divider line using transform only */}
        <motion.div
          id="hero-divider"
          variants={itemVariants}
          className="h-[1px] w-16 bg-gold mb-8 origin-center"
        />

        <motion.p
          id="hero-tagline"
          variants={itemVariants}
          className="font-inter text-muted text-xs sm:text-sm md:text-base tracking-[0.45em] uppercase font-light max-w-xl leading-relaxed"
        >
          Where Luxury Meets the Road
        </motion.p>
      </motion.div>

      {/* Bouncing Chevron down Indicator */}
      <div
        id="hero-scroll-trigger"
        className="absolute bottom-8 left-12 right-12 z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <a
          id="hero-arrow-anchor"
          href="#about"
          className="pointer-events-auto p-4 group transition-colors duration-300"
          aria-label="Scroll down to brand story"
        >
          <ChevronDown
            id="hero-chevron-icon"
            className="text-gold group-hover:text-gold-light transition-colors duration-300 animate-scroll-down"
            size={22}
            strokeWidth={1.5}
          />
        </a>
      </div>
    </div>
  );
}
