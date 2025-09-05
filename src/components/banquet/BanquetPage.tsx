'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Wifi, Wind, Speaker, ParkingSquare } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from '@/components/common/AnimatedSection';

const BanquetPage = () => {
  const amenityVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 200, damping: 20 },
    }),
  };

  const amenities = [
    { icon: Users, text: "Up to 150 Guests" },
    { icon: Wind, text: "Air Conditioned" },
    { icon: Speaker, text: "A/V System" },
    { icon: Wifi, text: "High-Speed Wi-Fi" },
    { icon: ParkingSquare, text: "Valet Parking" },
  ];

  return (
    <div className="bg-light pt-16">
      <section className="relative h-[450px]">
        <Image
          src="/images/banquet-banner.jpg"
          alt="Elegant banquet hall at Logic Restaurant"
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
            Private Events & Banquets
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg max-w-2xl text-gray-200"
          >
            Host your most memorable moments in our exquisite and versatile private space.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24 sm:py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/banquet-details.jpg"
              alt="A detailed view of the banquet hall setup for an event"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="text-secondary">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-6">An Unforgettable Setting</h2>
            <p className="mb-4 text-lg">
              Our banquet facility offers a sophisticated environment perfect for corporate events, wedding receptions, and private dinners. With elegant decor and modern amenities, the space can be tailored to your vision.
            </p>
            <p className="text-lg">
              Our dedicated events team will work with you to ensure a flawless experience, from custom menu planning to A/V setups. We handle all the details so you can focus on your guests.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark mb-16">Features & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {amenities.map((amenity, i) => (
              <motion.div
                key={amenity.text}
                custom={i}
                variants={amenityVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <amenity.icon className="h-14 w-14 mx-auto text-primary mb-4" />
                <p className="font-semibold text-dark text-lg">{amenity.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-primary">
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-serif font-bold text-dark mb-4">Ready to Plan Your Event?</h2>
          <p className="text-dark max-w-2xl mx-auto mb-8 text-lg">
            Contact our events coordinator today to schedule a tour and receive a personalized quote.
          </p>
          <Link 
            href="/contact" 
            className="bg-dark text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BanquetPage;