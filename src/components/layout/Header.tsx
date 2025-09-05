'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Define navigation links here to pass them to both menus
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/banquet', label: 'Banquet' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/catering', label: 'Catering' },
    { href: '/contact', label: 'Contact' },
  ];

  // Effect to handle scroll detection for a semi-transparent header
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect to lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-30 transition-all duration-300",
          hasScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className={clsx(
            "text-2xl font-bold transition-colors duration-300",
            hasScrolled ? "text-gray-900" : "text-white"
          )}>
            <Link href="/">LOGIC</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  "font-medium hover:text-yellow-500 transition-colors duration-300",
                  hasScrolled ? "text-gray-600" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/booking"
              className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md text-base hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Online Booking
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={clsx(
                "p-2 rounded-md transition-colors",
                 hasScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"
              )}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* AnimatePresence is used to handle the enter/exit animations of the menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu links={navLinks} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;