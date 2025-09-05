'use client';

// 1. Import the `Variants` type from Framer Motion
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
  
  // 2. Define the variants objects with the explicit `Variants` type
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

  // The custom function for staggering remains the same
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.05 + 0.2, 
        // 3. Define the 'ease' property within an array for proper typing
        ease: 'easeOut'
      },
    }),
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      <motion.div
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 p-8 flex flex-col"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-gray-500 mb-6">Navigation</h2>
          <nav>
            <ul className="space-y-4">
              {links.map((link, i) => (
                <motion.li key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                  <Link 
                    href={link.href}
                    onClick={onClose}
                    className="text-2xl font-semibold text-gray-800 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <Link
              href="/booking"
              onClick={onClose}
              className="block text-center bg-yellow-500 text-white font-bold w-full py-3 px-8 rounded-md text-lg hover:bg-yellow-600 transition-colors"
          >
            Online Booking
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;