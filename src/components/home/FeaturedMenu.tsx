import Image from 'next/image';

// 1. Define the type for a single menu item to ensure type safety.
//    This should match the structure of your Supabase table.
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

// 2. The component's props are now typed. It expects an array of MenuItems.
const FeaturedMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  // 3. The hardcoded 'menuItems' const array has been completely removed.

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* This mapping function now operates on the 'menuItems' prop */}
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden featured-card"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={800}
                height={600}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-xl font-bold text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;