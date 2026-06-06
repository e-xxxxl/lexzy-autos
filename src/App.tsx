import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="lexzy-app-container" className="selection:bg-gold selection:text-obsidian relative min-h-screen bg-obsidian text-cream font-inter antialiased">
      {/* Absolute top fixed header bar */}
      <Navbar />

      <main id="lexzy-main-content">
        {/* Full screen video introduction */}
        <HeroSection />

        {/* Brand story / heritage layout */}
        <AboutSection />

        {/* Bespoke interactive card services */}
        <ServicesSection />

        {/* Continual scrolling marquees */}
        <GallerySection />

        {/* Concierge reservation submission form */}
        <ContactSection />

        {/* Brand native FAQ block */}
        <FAQSection />
      </main>

      {/* Showroom copyright footer */}
      <Footer />

      {/* High-engagement floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
