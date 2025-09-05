'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface MenuItem {
  id: number; name: string; description: string; price: string; imageUrl: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const FeaturedMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-dark mb-12">
          Our Featured Dishes
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id} 
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-60">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif font-bold text-dark">{item.name}</h3>
                  <p className="text-xl font-bold text-primary">{item.price}</p>
                </div>
                <p className="text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;