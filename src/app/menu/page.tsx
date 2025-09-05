import MenuPage from '@/components/menu/MenuPage';
import { supabase } from '@/lib/supabaseClient';

export const metadata = {
  title: 'Our Menu | Logic Restaurant',
  description: 'Explore our wide selection of delicious dishes and beverages.',
};

// Make the function async to await the data fetch
export default async function Page() {
  // Fetch menu data from Supabase
  const { data: menuData, error } = await supabase
    .from('menu_items')
    .select('*');

  if (error) {
    console.error('Error fetching menu data:', error);
    // You could return an error message component here
  }

  // Pass the fetched data as a prop to the client component
  return (
    <section className="pt-16">
      <MenuPage menuData={menuData || []} />
    </section>
  );
}