import ContactPage from '@/components/contact/ContactPage';

export const metadata = {
  title: 'Contact Us | Logic Restaurant',
  description: 'Get in touch with Logic Restaurant. Find our address, phone number, email, or send us a message through our contact form.',
};

export default function Page() {
  return (
    <section className="pt-16">
      <ContactPage />
    </section>
  );
}