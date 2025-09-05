'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/banquet', label: 'Banquet' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/catering', label: 'Catering' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out",
          hasScrolled ? "bg-white shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className={clsx(
            "text-3xl font-serif font-bold transition-colors duration-300",
            hasScrolled ? "text-dark" : "text-white"
          )}>
            <Link href="/">LOGIC</Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  "font-medium tracking-wide hover:text-primary transition-colors duration-300",
                  hasScrolled ? "text-secondary" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/booking"
              className="bg-primary text-dark font-bold py-2 px-6 rounded-md text-base hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              Online Booking
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={clsx(
                "p-2 rounded-md transition-colors",
                 hasScrolled ? "text-dark hover:bg-gray-100" : "text-white hover:bg-white/20"
              )}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu links={navLinks} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;