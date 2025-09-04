import Image from 'next/image';
import Link from 'next/link';
import { Calendar, UtensilsCrossed, PartyPopper } from 'lucide-react';

const CateringPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-80 sm:h-96">
        <Image
            src="/images/catering-banner.jpeg"
            alt="A beautifully arranged catering buffet table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider">
            Exceptional Catering
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Bring the signature taste of Logic Restaurant to your next event.
          </p>
        </div>
      </section>

      {/* 2. "Our Process" Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple & Elegant</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our catering process is designed to be seamless and stress-free, ensuring your event is a stunning success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="p-6">
              <Calendar className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Consult & Plan</h3>
              <p className="text-gray-600">
                We start with a conversation to understand your event, guest count, and preferences.
              </p>
            </div>
            <div className="p-6">
              <UtensilsCrossed className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Customize Your Menu</h3>
              <p className="text-gray-600">
                Choose from our curated packages or work with our chef to create a bespoke menu for your occasion.
              </p>
            </div>
            <div className="p-6">
              <PartyPopper className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Relax & Celebrate</h3>
              <p className="text-gray-600">
                Our professional team handles the delivery, setup, and service, letting you enjoy the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Events We Cater" Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-700 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">For Any Occasion</h2>
            <p className="mb-6">
              No matter the event, our commitment to quality and service remains the same. We cater to a wide range of functions, bringing passion and flavor to every table.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Corporate Lunches</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Wedding Receptions</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Holiday Parties</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Private Dinners</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Birthday Parties</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> And much more...</li>
            </ul>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/images/catering-events.jpeg"
              alt="Platters of delicious food ready for a catering event"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* 4. Call to Action Section */}
      <section className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Create Your Perfect Event Menu</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our catering specialists are ready to help you plan an unforgettable culinary experience.
          </p>
          <Link 
            href="/contact" 
            className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-600 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CateringPage;