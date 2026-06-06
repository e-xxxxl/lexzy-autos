import { GalleryItem } from '../types';

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    unsplashId: '1503376780353-7e6692767b70',
    alt: 'Masterfully engineered sportscar silhouette at sunset',
  },
  {
    id: 'gal-2',
    unsplashId: '1544636331-9b7441e2b9d4',
    alt: 'Luxury automotive cockpit details and full-grain leather steering wheel',
  },
  {
    id: 'gal-3',
    unsplashId: '1555215695-3004980ad54e',
    alt: 'Bespoke hand-stitched detailing on luxury steering console',
  },
  {
    id: 'gal-4',
    unsplashId: '1580273916550-91bbfe57c0e6',
    alt: 'Ultra-prestigious handcrafted front steel mesh grille',
  },
  {
    id: 'gal-5',
    unsplashId: '1492144534655-ae79c964c9d7',
    alt: 'Vintage retro grand tourer reflecting deep metallic coachwork',
  },
  {
    id: 'gal-6',
    unsplashId: '1526726538690-5cbf90d63118',
    alt: 'Curving alpine asphalt roadway designed for absolute Grand Tourers',
  },
];

export default function GallerySection() {
  // Helper to double the array for a seamless loop
  const seamlessImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 w-full bg-obsidian overflow-hidden"
    >
      {/* Decoupled Label Header with decorative lines */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between mb-16">
        <div className="flex-1 h-[1px] bg-gold/10" />
        <span
          id="gallery-label"
          className="mx-6 font-inter text-gold text-[10px] sm:text-xs font-light tracking-[0.45em] uppercase whitespace-nowrap select-none"
        >
          THE CURATORIAL ARCHIVES
        </span>
        <div className="flex-1 h-[1px] bg-gold/10" />
      </div>

      <div id="gallery-marquee-container" className="flex flex-col space-y-6 md:space-y-8 w-full">
        {/* Row 1: Leftward moving scroll */}
        <div className="relative w-full overflow-hidden py-1">
          <div
            id="gallery-marquee-track-1"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => (
              <div
                key={`row1-${img.id}-${index}`}
                className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
              >
                {/* Gold tone blend */}
                <div className="absolute inset-0 bg-gold/5 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent z-10 pointer-events-none" />

                <img
                  src={`https://images.unsplash.com/photo-${img.unsplashId}?auto=format&fit=crop&w=600&q=80`}
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

        {/* Row 2: Rightward moving scroll (reversed marquee) */}
        <div className="relative w-full overflow-hidden py-1">
          <div
            id="gallery-marquee-track-2"
            className="flex items-center space-x-6 md:space-x-8 w-fit animate-marquee-slow [animation-direction:reverse] hover:[animation-play-state:paused] cursor-pointer"
          >
            {seamlessImages.map((img, index) => (
              <div
                key={`row2-${img.id}-${index}`}
                className="w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 relative overflow-hidden bg-surface border border-gold/10 group rounded-sm"
              >
                {/* Gold tone blend */}
                <div className="absolute inset-0 bg-gold/5 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent z-10 pointer-events-none" />

                <img
                  src={`https://images.unsplash.com/photo-${img.unsplashId}?auto=format&fit=crop&w=600&q=80`}
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

      {/* Decorative subtitle */}
      <div id="gallery-epilogue" className="text-center mt-12 px-6">
        <p className="font-cormorant italic text-muted text-base">
          A physical manifestation of mechanical artwork, meticulously prepped and prepared.
        </p>
      </div>
    </section>
  );
}
