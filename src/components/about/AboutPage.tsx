'use client';
import Image from 'next/image';
import { Sparkles, Leaf, UtensilsCrossed } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from '@/components/common/AnimatedSection';

const AboutPage = () => {
  const iconVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, type: 'spring', stiffness: 300, damping: 20 },
    }),
  };

  return (
    <div className="bg-light pt-16">
      <section className="relative h-[450px]">
        <Image
          src="/images/about-banner.jpeg"
          alt="Warm ambiance of the Logic Restaurant"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl font-serif font-extrabold text-white tracking-wider"
          >
            About LOGIC
          </motion.h1>
        </div>
      </section>

      <AnimatedSection className="py-24 sm:py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-secondary"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-6">Our Story</h2>
            <p className="mb-4 text-lg">
              Founded in 2024, Logic Restaurant began as a humble dream: to create a dining experience that transcends the plate. Our founders, inspired by generations of family recipes, set out to build a space where tradition meets innovation.
            </p>
            <p>
              Logic Restaurant is more than a restaurant; it&apos;s a community. A place to gather, celebrate, and savor the simple joys of good food and great company.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-story.jpg"
              alt="Chefs meticulously preparing food in the kitchen"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-4">Our Philosophy</h2>
          <p className="max-w-3xl mx-auto text-secondary text-lg mb-16">
            Our mission is simple: to provide an exceptional dining experience by combining authentic flavors with a commitment to quality and service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div custom={0} variants={iconVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <Leaf className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">Fresh Ingredients</h3>
              <p className="text-secondary">
                We partner with local farmers to ensure every dish is made with the freshest, highest-quality ingredients.
              </p>
            </motion.div>
            <motion.div custom={1} variants={iconVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <UtensilsCrossed className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">Culinary Excellence</h3>
              <p className="text-secondary">
                Our chefs are masters of their craft, constantly innovating while respecting the traditions of our cuisine.
              </p>
            </motion.div>
            <motion.div custom={2} variants={iconVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <Sparkles className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">Memorable Experiences</h3>
              <p className="text-secondary">
                We strive to create a warm and inviting atmosphere where every guest feels like part of our family.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;