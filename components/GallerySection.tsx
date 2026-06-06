"use client";

import Image from 'next/image';

interface GalleryItem {
  id: string;
  unsplashId: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    unsplashId: '1503376780353-7e6692767b70',
    alt: 'Lexzy Autos — Premium sports car representing luxury and curated journeys in Ibadan and Lagos, Nigeria',
  },
  {
    id: 'gal-2',
    unsplashId: '1544636331-9b7441e2b9d4',
    alt: 'Lexzy Autos — High-end luxury car interior detailing in Ibadan and Lagos, Nigeria',
  },
  {
    id: 'gal-3',
    unsplashId: '1555215695-3004980ad54e',
    alt: 'Lexzy Autos — Rare collection grand-touring motorcar steering wheel and luxury cabin style',
  },
  {
    id: 'gal-4',
    unsplashId: '1580273916550-91bbfe57c0e6',
    alt: 'Lexzy Autos — Pristine premium metallic black sports vehicle rear grille details in Ibadan with Lagos delivery standard',
  },
  {
    id: 'gal-5',
    unsplashId: '1492144534655-ae79c964c9d7',
    alt: 'Lexzy Autos — Classic vintage collector roadster with deep glossy finish in Oyo State and Nigeria',
  },
  {
    id: 'gal-6',
    unsplashId: '1526726538690-5cbf90d63118',
    alt: 'Lexzy Autos — Modern luxury touring sedan showing headlights on sweeping road in Ibadan and Lagos, Nigeria',
  },
];

export default function GallerySection() {
  const seamlessImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24 sm:py-32 w-full bg-obsidian overflow-hidden"
    >
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

      <div className="text-center mb-16 px-6">
        <h2 id="gallery-heading" className="sr-only">Our Curatorial Selection</h2>
        <p className="font-cormorant italic text-cream text-3xl sm:text-4xl font-light">
          From clean tokunbo to exotic — something for every taste.
        </p>
      </div>

      <div id="gallery-marquee-container" className="flex flex-col space-y-6 md:space-y-8 w-full select-none">
        <div className="relative w-full overflow-hidden py-2" role="region" aria-label="First gallery row">
          <div
            id="gallery-marquee-track-1"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => (
              <div
                key={`row1-${img.id}-${index}`}
                className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
              >
                <div className="absolute inset-0 bg-gold/5 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-transparent z-10 pointer-events-none" />

                <Image
                  src={`https://images.unsplash.com/photo-${img.unsplashId}?auto=format&fit=crop&w=650&q=85`}
                  alt={img.alt}
                  width={480}
                  height={320}
                  className="w-full h-full object-cover saturate-[0.85] contrast-[1.05] filter transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-2" role="region" aria-label="Second gallery row">
          <div
            id="gallery-marquee-track-2"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee-slow [animation-direction:reverse] hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => (
              <div
                key={`row2-${img.id}-${index}`}
                className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
              >
                <div className="absolute inset-0 bg-gold/5 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-transparent z-10 pointer-events-none" />

                <Image
                  src={`https://images.unsplash.com/photo-${img.unsplashId}?auto=format&fit=crop&w=650&q=85`}
                  alt={img.alt}
                  width={480}
                  height={320}
                  className="w-full h-full object-cover saturate-[0.85] contrast-[1.05] filter transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
