import Image from 'next/image';
import { galleryImages } from '@/data/galleryData';

const GalleryPage = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="bg-black h-64 sm:h-80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A Glimpse Into the Logic Restaurant Experience
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              // Each grid item now has a simple, custom class name: "gallery-item"
              <div key={image.id} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  // The image also gets a custom class
                  className="gallery-image"
                />
                
                {/* The overlay gets a custom class */}
                <div className="gallery-overlay" />
                
                {/* The text container gets a custom class */}
                <div className="gallery-text">
                  <h3>{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;