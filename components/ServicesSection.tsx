"use client";

import { motion } from 'framer-motion';
import { Car, Star, MessageCircle, CheckCircle } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Car' | 'Star' | 'MessageCircle' | 'CheckCircle';
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Brand New Cars',
    description: 'Fresh off the line. Official documentation, manufacturer warranty, and that new car feeling — right here in Ibadan and Lagos.',
    iconName: 'Car',
  },
  {
    id: 'service-2',
    title: 'Tokunbo & Fairly Used',
    description: 'Clean, verified, and honestly priced. Our fairly used cars are thoroughly inspected so you drive off with full confidence.',
    iconName: 'CheckCircle',
  },
  {
    id: 'service-3',
    title: 'Luxury & Exotic Cars',
    description: 'For when only the best will do. We source premium and exotic vehicles for clients who refuse to compromise on excellence.',
    iconName: 'Star',
  },
  {
    id: 'service-4',
    title: 'Expert Guidance',
    description: 'Not sure where to start? Our team will walk you through every option, answer every question, and help you make the smartest choice.',
    iconName: 'MessageCircle',
  },
];

const iconMap = {
  Car: Car,
  Star: Star,
  MessageCircle: MessageCircle,
  CheckCircle: CheckCircle,
};

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
      id="services"
      aria-labelledby="services-heading"
      className="py-24 sm:py-32 w-full bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div id="services-header" className="text-center mb-20 max-w-2xl mx-auto">
          <span
            id="services-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            OUR VALUES / NOS VALEURS
          </span>
          <h2
            id="services-heading"
            className="font-cormorant text-cream text-4xl sm:text-5xl font-light tracking-wide leading-tight"
          >
            What We Offer
          </h2>
          <p id="services-subheading" className="font-inter text-muted text-xs sm:text-sm tracking-widest uppercase mt-4">
            Everything you need, under one roof.
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <motion.div
          id="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10 overflow-hidden"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                variants={cardVariants}
                className="group relative bg-surface p-10 border-t-2 border-gold flex flex-col justify-between h-full transition-colors duration-500 hover:bg-elevated cursor-default"
              >
                <span className="absolute top-3 right-3 font-mono text-[10px] text-whisper/30 select-none">
                  0{idx + 1}
                </span>

                <div className="flex flex-col space-y-6">
                  <div className="text-gold">
                    <IconComponent
                      id={`service-icon-${service.id}`}
                      size={28}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  <h3
                    id={`service-title-${service.id}`}
                    className="font-cormorant text-cream text-2xl font-light tracking-wide"
                  >
                    {service.title}
                  </h3>

                  <p
                    id={`service-description-${service.id}`}
                    className="font-inter text-muted text-sm font-light leading-relaxed text-left"
                  >
                    {service.description}
                  </p>
                </div>

                <div className="w-4 h-[1px] bg-gold/10 group-hover:bg-gold/40 transition-colors duration-500 mt-8" />
              </motion.div>
            );
          })}
        </motion.div>

        <div id="services-epilogue" className="text-center mt-16 select-none">
          <p className="font-cormorant italic text-whisper text-sm">
            * Driven by honesty, backed by absolute professional mechanics in Ibadan and Lagos.
          </p>
        </div>
      </div>
    </section>
  );
}
