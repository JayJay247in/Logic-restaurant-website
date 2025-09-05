import HeroSection from '@/components/home/HeroSection';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import { supabase } from '@/lib/supabaseClient';
import AnimatedSection from '@/components/common/AnimatedSection';

export default async function HomePage() {
  const { data: menuItems, error } = await supabase
    .from('menu_items')
    .select('*')
    .limit(3);

  if (error) {
    console.error('Error fetching featured menu items:', error);
  }

  return (
    <main>
      {/* The Hero Section is already visually impactful, no animation needed here */}
      <HeroSection />

      {/* Wrap the FeaturedMenu in our new AnimatedSection component */}
      <AnimatedSection>
        <FeaturedMenu menuItems={menuItems || []} />
      </AnimatedSection>
    </main>
  );
}