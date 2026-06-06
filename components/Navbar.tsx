"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Cars', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        id="app-navbar"
        role="banner"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-gold/10 py-4'
            : 'bg-transparent border-b border-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Brand/Wordmark */}
          <a
            id="nav-logo"
            href="#root"
            className="font-cormorant text-gold text-xl md:text-2xl tracking-[0.25em] font-medium transition-opacity duration-300 hover:opacity-80"
          >
            LEXZY AUTOS
          </a>

          {/* Desktop Navigation */}
          <nav id="nav-desktop" aria-label="Main navigation" className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item, idx) => (
              <a
                id={`nav-item-desktop-${idx}`}
                key={item.href}
                href={item.href}
                className="group relative font-inter text-xs font-light tracking-[0.2em] text-cream/90 hover:text-gold transition-colors duration-300 py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 ease-[0.4,0,0.2,1] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold hover:text-gold-light transition-colors p-2"
            aria-label="Toggle main menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-obsidian/95 z-40 md:hidden flex flex-col justify-center"
          >
            <motion.nav
              id="nav-mobile-drawer"
              aria-label="Mobile navigation"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
              className="px-12 flex flex-col items-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_ITEMS.map((item, idx) => (
                <a
                  id={`nav-item-mobile-${idx}`}
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="font-inter text-base font-light tracking-[0.2em] text-cream hover:text-gold transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-12 h-[1px] bg-gold/30 my-4" />
              <div className="font-cormorant italic text-gold/60 text-lg">Your Dream Car, Delivered.</div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
