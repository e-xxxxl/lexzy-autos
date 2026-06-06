import { motion } from 'motion/react';
import { Car, Star, MessageCircle, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Bespoke Acquisitions',
    description: 'We conduct global searches to locate rare, limited-edition, or historic classic and hypercars tailored to your precise commission.',
    iconName: 'Car',
  },
  {
    id: 'service-2',
    title: 'Tailored Curatorship',
    description: 'Bespoke portfolio and collection management services, ensuring your investment is maintained to concours d’elegance standards.',
    iconName: 'Star',
  },
  {
    id: 'service-3',
    title: 'Private Brokerage',
    description: 'Discreet, confidentiality-first transaction frameworks matching elite sellers with approved collectors on a global scale.',
    iconName: 'MessageCircle',
  },
  {
    id: 'service-4',
    title: 'Assurance & Provenance',
    description: 'Rigorous historic records validation, serial number authentication, and engineering reports by certified brand masters.',
    iconName: 'CheckCircle',
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0, 0.2, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 w-full bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div id="services-header" className="text-center mb-20 max-w-2xl mx-auto">
          <span
            id="services-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            THE EXPERTISE / L’EXPERTISE
          </span>
          <h2
            id="services-headline"
            className="font-cormorant text-cream text-4xl sm:text-5xl font-light tracking-wide leading-tight"
          >
            The Lexzy Experience
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        {/* 4-Card Architectural Grid */}
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
                className="group relative bg-surface p-8 sm:p-10 border-t-2 border-gold flex flex-col justify-between h-full transition-colors duration-500 hover:bg-elevated cursor-default"
              >
                {/* Subtle Decorative Corner Accent */}
                <span className="absolute top-2 right-2 font-mono text-[10px] text-whisper/40 select-none">
                  0{idx + 1}
                </span>

                <div className="flex flex-col space-y-6">
                  {/* Icon Panel */}
                  <div className="text-gold">
                    <IconComponent
                      id={`service-icon-${service.id}`}
                      size={28}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="font-cormorant text-cream text-2xl lg:text-3.5xl font-light tracking-wide"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    id={`service-description-${service.id}`}
                    className="font-inter text-muted text-[13.5px] leading-relaxed font-light"
                  >
                    {service.description}
                  </p>
                </div>

                {/* Bottom line detailing */}
                <div className="w-4 h-[1px] bg-gold/10 group-hover:bg-gold/40 transition-colors duration-500 mt-8" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Epilogue */}
        <div id="services-epilogue" className="text-center mt-16">
          <p className="font-cormorant italic text-whisper text-sm sm:text-base">
            * All cataloged commissions are structured through our bespoke advisory desk under complete confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
