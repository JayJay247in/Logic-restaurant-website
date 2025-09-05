'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, UtensilsCrossed, PartyPopper } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from '@/components/common/AnimatedSection';

const CateringPage = () => {
  const processVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-light pt-16">
      <section className="relative h-[450px]">
        <Image
          src="/images/catering-banner.jpeg"
          alt="A beautifully arranged catering buffet table"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl font-serif font-extrabold tracking-wider"
          >
            Exceptional Catering
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg max-w-2xl text-gray-200"
          >
            Bring the signature taste of LOGIC Restaurant to your next event.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-4">Simple & Elegant</h2>
          <p className="max-w-3xl mx-auto text-secondary text-lg mb-16">
            Our catering process is designed to be seamless, ensuring your event is a stunning success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div custom={0} variants={processVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <Calendar className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">1. Consult & Plan</h3>
              <p className="text-secondary">
                We start with a conversation to understand your event, guest count, and preferences.
              </p>
            </motion.div>
            <motion.div custom={1} variants={processVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <UtensilsCrossed className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">2. Customize Your Menu</h3>
              <p className="text-secondary">
                Work with our chef to create a bespoke menu or choose from curated packages for your occasion.
              </p>
            </motion.div>
            <motion.div custom={2} variants={processVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6">
              <PartyPopper className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">3. Relax & Celebrate</h3>
              <p className="text-secondary">
                Our professional team handles delivery, setup, and service, letting you enjoy your moment.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 sm:py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-6">For Any Occasion</h2>
            <p className="mb-6 text-lg text-secondary">
              Our commitment to quality and service remains the same. We cater to a wide range of functions, bringing passion and flavor to every table.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> Corporate Lunches</li>
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> Wedding Receptions</li>
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> Holiday Parties</li>
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> Private Dinners</li>
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> Birthday Parties</li>
              <li className="flex items-center text-dark"><span className="text-primary mr-3">✔</span> And much more...</li>
            </ul>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/images/catering-events.jpg"
              alt="Platters of delicious food ready for a catering event"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <section className="bg-dark text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Let&apos;s Create Your Perfect Event Menu</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
            Our catering specialists are ready to help you plan an unforgettable culinary experience.
          </p>
          <Link 
            href="/contact" 
            className="bg-primary text-dark font-bold py-4 px-10 rounded-lg text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CateringPage;