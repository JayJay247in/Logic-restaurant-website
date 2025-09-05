'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Image
        src="/images/hero-background.jpg"
        alt="Interior of a modern restaurant"
        fill
        className="z-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-dark opacity-60 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-extrabold mb-4"
        >
          Experience Authentic Cuisine
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
        >
          Crafting memorable dining experiences with the freshest ingredients and culinary passion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link 
            href="/menu" 
            className="bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            View Our Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;