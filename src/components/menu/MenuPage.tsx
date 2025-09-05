'use client'; 

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import clsx from 'clsx';

interface MenuItem {
  id: number; name: string; description: string; price: string; imageUrl: string; category: string;
}

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
};

const MenuPage = ({ menuData }: { menuData: MenuItem[] }) => {
  const categories = ['All', ...Array.from(new Set(menuData.map((item) => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuData;
    return menuData.filter((item) => item.category === activeCategory);
  }, [activeCategory, menuData]);

  return (
    <div className="bg-light pt-16">
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif font-extrabold text-dark">Our Menu</h1>
              <p className="mt-4 text-lg text-secondary">
                Discover a variety of dishes crafted with passion.
              </p>
              <div className="mt-8">
                <Link 
                  href="/logic-restaurant-menu-kit.pdf" 
                  target="_blank" 
                  className="inline-block bg-primary text-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-dark transition-colors"
                >
                  Download Menu Kit (PDF)
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={clsx(
                    "px-5 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 transform",
                    activeCategory === category
                      ? 'bg-primary text-dark shadow-lg scale-105'
                      : 'bg-white text-secondary hover:bg-gray-200 hover:text-dark'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="relative w-full h-56">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-dark pr-2">{item.name}</h3>
                        <p className="text-xl font-bold text-primary flex-shrink-0">{item.price}</p>
                      </div>
                      <p className="text-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
        </div>
    </div>
  );
};

export default MenuPage;