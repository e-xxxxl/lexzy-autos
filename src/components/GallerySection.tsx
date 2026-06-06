import { useState } from 'react';
import { GalleryItem } from '../types';
import { Car, Fuel, Eye, Compass, Shield, Zap } from 'lucide-react';
import img1 from '../../assets/car1.jpg';
import img2 from '../../assets/car2.jpg';
import img3 from '../../assets/car3.jpg';
import img4 from '../../assets/car4.jpg';
import img5 from '../../assets/car5.jpg';
import img6 from '../../assets/car6.jpg';
import img7 from '../../assets/car7.jpg';
import img8 from '../../assets/car8.jpg';
import img9 from '../../assets/car9.jpg';
import img10 from '../../assets/car10.jpg';
import img11 from '../../assets/car11.jpg';
import img12 from '../../assets/car12.jpg';

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    src: img1,
    alt: 'Lexzy Autos — Premium sports car representing luxury and curated journeys in Ibadan and Lagos, Nigeria',
    fallbackTitle: 'Premium Sports Car',
    fallbackIcon: 'SportsCar',
  },
  {
    id: 'gal-2',
    src: img2,
    alt: 'Lexzy Autos — High-end luxury car interior detailing in Ibadan and Lagos, Nigeria',
    fallbackTitle: 'Luxury Cabin Interior',
    fallbackIcon: 'Interior',
  },
  {
    id: 'gal-3',
    src: img3,
    alt: 'Lexzy Autos — Rare collection grand-touring motorcar steering wheel and luxury cabin style',
    fallbackTitle: 'Grand Touring Wheels',
    fallbackIcon: 'Steering',
  },
  {
    id: 'gal-4',
    src: img4,
    alt: 'Lexzy Autos — Pristine premium metallic black sports vehicle rear grille details in Ibadan with Lagos delivery standard',
    fallbackTitle: 'Rear Grille & Power',
    fallbackIcon: 'Grille',
  },
  {
    id: 'gal-5',
    src: img5,
    alt: 'Lexzy Autos — Classic vintage collector roadster with deep glossy finish in Oyo State and Nigeria',
    fallbackTitle: 'Vintage Roadster',
    fallbackIcon: 'Roadster',
  },
  {
    id: 'gal-6',
    src: img6,
    alt: 'Lexzy Autos — Modern luxury touring sedan showing headlights on sweeping road in Ibadan and Lagos, Nigeria',
    fallbackTitle: 'Modern Gran Turismo',
    fallbackIcon: 'Sedan',
  },
  {
    id: 'gal-7',
    src: img7,
    alt: 'Lexzy Autos — High performance elite machine aerodynamics and high speed details',
    fallbackTitle: 'Hypercar Aerodynamics',
    fallbackIcon: 'Grille',
  },
  {
    id: 'gal-8',
    src: img8,
    alt: 'Lexzy Autos — Classic executive touring sedan showing absolute interior luxury craftsmanship',
    fallbackTitle: 'Executive Sedan Class',
    fallbackIcon: 'Sedan',
  },
  {
    id: 'gal-9',
    src: img9,
    alt: 'Lexzy Autos — V12 handbuilt luxury powertrain and cylinder detail',
    fallbackTitle: 'V12 Performance Engine',
    fallbackIcon: 'SportsCar',
  },
  {
    id: 'gal-10',
    src: img10,
    alt: 'Lexzy Autos — Carbon composite high performance deceleration systems',
    fallbackTitle: 'Bespoke Stop Calipers',
    fallbackIcon: 'Steering',
  },
  {
    id: 'gal-11',
    src: img11,
    alt: 'Lexzy Autos — Premium active driving assistance and cockpit display',
    fallbackTitle: 'Active Cockpit Display',
    fallbackIcon: 'Interior',
  },
  {
    id: 'gal-12',
    src: img12,
    alt: 'Lexzy Autos — Premium GT circuit edition showing massive downforce wing structures',
    fallbackTitle: 'Circuit Cruiser',
    fallbackIcon: 'Roadster',
  },
];

const iconMap = {
  SportsCar: Car,
  Interior: Eye,
  Steering: Compass,
  Grille: Zap,
  Roadster: Shield,
  Sedan: Fuel,
};

const gradientMap = {
  SportsCar: 'from-[#0A0A0A] via-[#101010] to-[#2C2410]',
  Interior: 'from-[#0A0A0A] via-[#121212] to-[#221B10]',
  Steering: 'from-[#0A0A0A] via-[#0E0E0E] to-[#1F180A]',
  Grille: 'from-[#0A0A0A] via-[#111111] to-[#251E0E]',
  Roadster: 'from-[#0A0A0A] via-[#141414] to-[#332A15]',
  Sedan: 'from-[#0A0A0A] via-[#0F0F0F] to-[#1E190D]',
};

export default function GallerySection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const seamlessImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24 sm:py-32 w-full bg-obsidian overflow-hidden"
    >
      {/* Decorative subtitle / label row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between mb-16">
        <div className="flex-1 h-[1px] bg-gold/15" />
        <span
          id="gallery-label"
          className="mx-6 font-inter text-gold text-xs font-light tracking-[0.45em] uppercase whitespace-nowrap select-none"
        >
          OUR COLLECTION
        </span>
        <div className="flex-1 h-[1px] bg-gold/15" />
      </div>

      {/* Main headings */}
      <div className="text-center mb-16 px-6">
        <h2 id="gallery-heading" className="sr-only">Our Curatorial Selection</h2>
        <p className="font-cormorant italic text-cream text-3xl sm:text-4xl font-light">
          From clean tokunbo to exotic — something for every taste.
        </p>
        <p className="font-inter text-muted text-[11px] tracking-wider uppercase mt-4 max-w-md mx-auto leading-relaxed">
          Place your own photos in <code className="text-gold font-mono">/public/images/gallery/</code> to customize your collection.
        </p>
      </div>

      <div id="gallery-marquee-container" className="flex flex-col space-y-6 md:space-y-8 w-full select-none">
        {/* Row 1: Leftward moving scroll */}
        <div className="relative w-full overflow-hidden py-2" role="region" aria-label="First gallery row">
          <div
            id="gallery-marquee-track-1"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => {
              const hasError = imageErrors[img.id] || !img.src;
              const IconComponent = iconMap[img.fallbackIcon] || Car;
              const gradientClass = gradientMap[img.fallbackIcon] || 'from-[#0A0A0A] to-[#252525]';

              return (
                <div
                  key={`row1-${img.id}-${index}`}
                  className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
                >
                  {/* Decorative highlights */}
                  <div className="absolute inset-0 bg-gold/5 mix-blend-color z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent z-10 pointer-events-none" />

                  {hasError ? (
                    /* High-fidelity custom premium fallback card */
                    <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col justify-between p-6 sm:p-8 text-left`}>
                      <div className="flex justify-between items-start">
                        <div className="text-gold/60 p-2.5 bg-gold/5 border border-gold/10 rounded-sm">
                          <IconComponent size={24} strokeWidth={1.2} />
                        </div>
                        <span className="font-mono text-[9px] tracking-widest text-gold/40">
                          {img.id.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-cormorant text-cream text-lg sm:text-2xl font-light tracking-wide mb-1 leading-tight">
                          {img.fallbackTitle}
                        </p>
                        <p className="font-inter text-gold/50 text-[9px] sm:text-[10px] tracking-wider uppercase">
                          Lexzy Curated Class
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={480}
                      height={320}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(img.id)}
                      className="w-full h-full object-cover saturate-[0.85] contrast-[1.05] filter transition-transform duration-1000 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Rightward moving scroll (reversed marquee) */}
        <div className="relative w-full overflow-hidden py-2" role="region" aria-label="Second gallery row">
          <div
            id="gallery-marquee-track-2"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee-slow [animation-direction:reverse] hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => {
              const hasError = imageErrors[img.id] || !img.src;
              const IconComponent = iconMap[img.fallbackIcon] || Car;
              const gradientClass = gradientMap[img.fallbackIcon] || 'from-[#0A0A0A] to-[#252525]';

              return (
                <div
                  key={`row2-${img.id}-${index}`}
                  className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
                >
                  {/* Decorative highlights */}
                  <div className="absolute inset-0 bg-gold/5 mix-blend-color z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent z-10 pointer-events-none" />

                  {hasError ? (
                    /* High-fidelity custom premium fallback card */
                    <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col justify-between p-6 sm:p-8 text-left`}>
                      <div className="flex justify-between items-start">
                        <div className="text-gold/60 p-2.5 bg-gold/5 border border-gold/10 rounded-sm">
                          <IconComponent size={24} strokeWidth={1.2} />
                        </div>
                        <span className="font-mono text-[9px] tracking-widest text-gold/40">
                          {img.id.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-cormorant text-cream text-lg sm:text-2xl font-light tracking-wide mb-1 leading-tight">
                          {img.fallbackTitle}
                        </p>
                        <p className="font-inter text-gold/50 text-[9px] sm:text-[10px] tracking-wider uppercase">
                          Lexzy Curated Class
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={480}
                      height={320}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(img.id)}
                      className="w-full h-full object-cover saturate-[0.85] contrast-[1.05] filter transition-transform duration-1000 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

