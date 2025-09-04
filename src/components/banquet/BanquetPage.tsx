import Image from 'next/image';
import Link from  'next/link';
import { Users, Wifi, Wind, Speaker, ParkingSquare } from 'lucide-react';

const BanquetPage = () => {
    return (
        <div className="bg-white">
            
            <section className="relative h-80 sm:h-96">
                <Image
                    src="/images/banquet-banner.jpg"
                    alt="Elegant banquet hall at Logic Restaurant"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider">
                        Private Events & Banquets
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        Host your most memorable moments in our exquisite and versatile private space.
                    </p>
                </div>
            </section>

            {/* 2. Details Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/banquet-details.jpg"
                            alt="A detailed view of the banquet hall setup for an event"
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-gray-700">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">An Unforgettable Setting</h2>
                        <p className="mb-4">
                            Our banquet facility offers a sophisticated and adaptable environment perfect for a variety of occasions, including corporate events, wedding receptions, birthday celebrations, and private dinners. With its elegant decor and modern amenities, the space can be tailored to match your unique vision.
                        </p>
                        <p>
                            Our dedicated events team will work with you every step of the way to ensure a flawless experience. From custom menu planning with our executive chef to audio-visual setups, we handle all the details so you can focus on your guests.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Amenities Section */}
            <section className="bg-gray-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Features & Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8  max-w-6xl mx-auto">
                        <div className="text-center">
                            <Users className="h-10 w-10 mx-auto text-yellow-500 mb-3" />
                            <p className="font-semibold text-gray-800">Up to 150 Guests</p>
                        </div>
                        <div className="text-center">
                            <Wind className='h-10 w-10 mx-auto text-yellow-500 mb-3' />
                            <p className="font-semibold text-gray-800">Air Conditioned</p>
                        </div>
                        <div className="text-center">
                            <Speaker className="h-10 w-10 mx-auto text-yellow-500 mb-3" />
                            <p className="font-semibold text-gray-800">A/V System</p>
                        </div>
                        <div className="text-center">
                            <Wifi className="h-10 w-10 mx-auto text-yellow-500 mb-3" />
                            <p className="font-semibold text-gray-800">High-Speed Wi-Fi</p>
                        </div>
                        <div className="text-center">
                            <ParkingSquare className="h-10 w-10 mx-auto text-yellow-500 mb-3" />
                            <p className="font-semibold text-gray-800">Valet Parking</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Call to Action Section */}
            <section className="bg-yellow-500">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Event?</h2>
                    <p className="text-white max-w-2xl mx-auto mb-8">
                        Contact our events coordinator today to schedule a tour and receive a personalized quote for your special occasion.
                    </p>
                    <Link href="/contact" className="bg-white text-yellow-600 font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-100 transition-colors">
                        Inquire Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BanquetPage;