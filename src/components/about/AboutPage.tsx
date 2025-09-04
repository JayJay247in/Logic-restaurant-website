import Image from 'next/image';
import { Sparkles, Leaf, UtensilsCrossed } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <section className="relative h-80 sm:h-96">
                      <Image
                          src="/images/about-banner.jpeg"
                          alt="Angular view of Logic Restaurant"
                          fill
                          priority
                          sizes="100vw"
                          className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
                          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider">
                              About Logic Restaurant
                          </h1>
                      </div>
                  </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2024, Logic Restaurant began as a humble dream: to create a dining experience that transcends the plate. Our founders, inspired by generations of family recipes and a passion for culinary exploration, set out to build a space where tradition meets innovation.
            </p>
            <p className="mb-4">
              Every dish on our menu is a testament to our journey. We believe in the power of fresh, locally-sourced ingredients to tell a story of their own. From the bustling kitchens to your table, our team is dedicated to crafting not just meals, but memories.
            </p>
            <p>
              Logic Restaurant is more than a restaurant; it&apos;s a community. A place to gather, celebrate, and savor the simple joys of good food and great company.
            </p>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-story.jpeg"
              alt="Chefs meticulously preparing food in the kitchen"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our mission is simple: to provide an exceptional dining experience by combining authentic flavors with a commitment to quality and service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="p-6">
              <Leaf className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We partner with local farmers and suppliers to ensure every dish is made with the freshest, highest-quality ingredients.
              </p>
            </div>

            <div className="p-6">
              <UtensilsCrossed className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Culinary Excellence</h3>
              <p className="text-gray-600">
                Our chefs are masters of their craft, constantly innovating while respecting the traditions of our cuisine.
              </p>
            </div>
            
            <div className="p-6">
              <Sparkles className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Memorable Experiences</h3>
              <p className="text-gray-600">
                We strive to create a warm and inviting atmosphere where every guest feels like part of our family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;