'use client'; 

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the type for a menu item, matching our database structure
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

// The component now accepts `menuData` as a prop
const MenuPage = ({ menuData }: { menuData: MenuItem[] }) => {
  // The rest of this component's logic is the SAME as before
  const categories = ['All', ...Array.from(new Set(menuData.map((item) => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return menuData;
    }
    return menuData.filter((item) => item.category === activeCategory);
  }, [activeCategory, menuData]);

  // ... The entire return (...) part of the JSX is IDENTICAL to before ...
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Our Menu</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover a variety of dishes crafted with passion.
          </p>
          <div className="mt-8">
            <Link 
              href="/logic-restaurant-menu-kit.pdf" 
              target="_blank" 
              className="inline-block bg-yellow-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-600 transition-colors"
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
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 pr-2">{item.name}</h3>
                  <p className="text-xl font-bold text-yellow-500 flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;