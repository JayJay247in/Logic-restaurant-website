'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 260, damping: 30 } },
    exit: { x: '100%', transition: { duration: 0.2 } },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.05 + 0.2, 
        ease: 'easeOut'
      },
    }),
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-dark/50 z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-light z-50 p-8 flex flex-col"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex-1">
          <h2 className="font-serif text-sm font-semibold text-secondary mb-8">Navigation</h2>
          <nav>
            <ul className="space-y-6">
              {links.map((link, i) => (
                <motion.li key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                  <Link 
                    href={link.href}
                    onClick={onClose}
                    className="text-3xl font-serif font-bold text-dark hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
              href="/booking"
              onClick={onClose}
              className="block text-center bg-primary text-dark font-bold w-full py-4 px-8 rounded-lg text-lg hover:bg-primary-dark transition-colors"
          >
            Online Booking
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu