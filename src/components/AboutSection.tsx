import { motion } from 'motion/react';

export default function AboutSection() {
  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: [0.4, 0, 0.2, 1], duration: 0.7 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: [0.4, 0, 0.2, 1], duration: 0.7 },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-obsidian border-b border-gold/5 flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] items-stretch min-h-screen w-full">
        {/* Left Side: Brand story / typography */}
        <motion.div
          id="about-brand-column"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col justify-center py-20 px-8 sm:px-16 md:px-24 lg:py-32 lg:px-20 bg-obsidian text-left"
        >
          {/* Section Indicator */}
          <span
            id="about-section-label"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-8 block select-none"
          >
            THE HERITAGE / L’HERITAGE
          </span>

          {/* Pull Quote */}
          <blockquote id="about-pullquote" className="mb-10">
            <p className="font-cormorant italic text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide">
              “We don’t just sell cars.
              <br />
              We curate journeys.”
            </p>
          </blockquote>

          {/* Brand copy */}
          <div id="about-narrative" className="space-y-6 max-w-2xl">
            <p className="font-inter text-muted text-[15px] sm:text-[17px] font-light leading-relaxed">
              At Lexzy Autos, we believe a motor car is more than a vehicle of transport; it is an extension of the soul, a physical manifestation of dreams, and a sanctuary of mechanical masterpiece.
            </p>
            <p className="font-inter text-muted text-[15px] sm:text-[17px] font-light leading-relaxed">
              For over a decade, we have traveled the globe to hand-select only the most exquisite vehicles ever built — focusing strictly on low-mileage masterpieces of absolute heritage, outstanding prestige, and flawless provenance. Each automotive request in our care is commissioned under strict discretion, prepared beyond concours-level standards, and presented as a work of fine art.
            </p>
            <div className="pt-6">
              <p className="font-cormorant italic text-gold text-lg lg:text-xl">
                The Lexzy Autos Curatorial House
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Sunset Porsche Image with golden tint */}
        <motion.div
          id="about-image-column"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden flex items-stretch"
        >
          {/* Gold tint overlay */}
          <div
            id="about-image-overlay"
            className="absolute inset-0 bg-gold/5 mix-blend-color-dodge z-10 pointer-events-none"
          />
          <div
            id="about-image-gradient"
            className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent z-10 pointer-events-none lg:block hidden"
          />
          <div
            id="about-image-gradient-mobile"
            className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 pointer-events-none block lg:hidden"
          />

          {/* Render image with explicit dimensions matching parent wrapper to avoid CLS */}
          <img
            id="about-sunset-porsche"
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000"
            alt="Porsche 911 at sunset representing absolute luxury and driving curation"
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
