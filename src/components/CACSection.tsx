import img8 from '../../assets/car8.jpg';

export default function CACSection() {
  return (
    <section
      id="cac-registration"
      aria-labelledby="cac-heading"
      className="py-24 sm:py-32 bg-obsidian border-b border-gold/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 font-inter">
        {/* Section Header */}
        <div id="cac-header" className="text-center mb-16 max-w-2xl mx-auto">
          <span
            id="cac-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.4em] uppercase mb-4 block select-none"
          >
            VERIFIED & REGISTERED
          </span>
          <h2
            id="cac-heading"
            className="font-cormorant text-cream text-4xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight"
          >
            CAC Registration
          </h2>
          <p id="cac-subtext" className="font-inter text-muted text-sm font-light leading-relaxed max-w-xl mx-auto mt-4">
            Lexzy Autos is a fully registered business with the Corporate Affairs Commission of Nigeria. We operate with absolute integrity, transparency, and compliance under strict corporate regulations.
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Certificate Display */}
        <div className="flex justify-center items-center mt-12 w-full">
          <div className="relative group max-w-2xl w-full">
            {/* Subtle premium card highlight */}
            <div className="absolute -inset-1 bg-gold/5 rounded-sm blur-md group-hover:bg-gold/10 transition-all duration-700 pointer-events-none" />

            <img
              src={img8}
              alt="Corporate Affairs Commission of Nigeria Certificate of Registration - Lexzy Autos"
              className="relative w-full h-auto border border-gold/20 rounded-sm mx-auto shadow-2xl saturate-100 transition-all duration-500 hover:border-gold/40"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}