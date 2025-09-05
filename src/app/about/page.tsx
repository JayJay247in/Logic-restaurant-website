import AboutPage from '@/components/about/AboutPage';

export const metadata = {
    title: 'About Us | Logic Restaurant',
    decription: 'Learn about the story, passion, and people behind Logic restaurant.',
};

export default function Page() {
    return (
    <section className="pt-16">
      <AboutPage />
    </section>
  );
}