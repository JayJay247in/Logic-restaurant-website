import HeroSection from '@/components/home/HeroSection';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import { supabase } from '@/lib/supabaseClient';

// 2. The entire page function is now 'async'
export default async function HomePage() {
  
  // 3. Fetch data directly from the 'menu_items' table
  //    .limit(3) gets us only three items for the feature section
  const { data: menuItems, error } = await supabase
    .from('menu_items')
    .select('*')
    .limit(3);

  // Simple error handling in case the database call fails
  if (error) {
    console.error('Error fetching featured menu items:', error);
    // We could render an error state, but for now we'll let it render with no items
  }

  return (
    <main>
      <HeroSection />
      {/* 4. Pass the fetched menuItems as a prop to the FeaturedMenu component */}
      <FeaturedMenu menuItems={menuItems || []} />
    </main>
  );
}