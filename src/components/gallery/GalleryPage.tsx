'use client';

import Image from 'next/image';
import { galleryImages } from '@/data/galleryData';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 25 },
  },
};

const GalleryPage = () => {
  return (
    <div className="bg-light pt-16">
      <section className="bg-dark h-96 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-white tracking-wider">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A Glimpse Into the Logic Restaurant Experience
          </p>
        </motion.div>
      </section>

      <section className="py-24 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={imageVariants}
                className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div 
                  className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4"
                >
                  <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;