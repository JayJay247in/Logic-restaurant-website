import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full">
            {/*Background Image*/}
            <Image
                src="/images/hero-background.jpeg"
                alt="Interior of a modern restaurant"
                fill
                className="z-0 object-cover"
                priority
            />

            {/*Overlay*/}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/*Content*/}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
                    Experience Authentic Cuisine
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
                    Crafting memorable dining experiences with the freshest ingredients and culinary passion.
                </p>
                <Link href="/menu" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-transform transform hover:scale-105">
                    View Our Menu
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;