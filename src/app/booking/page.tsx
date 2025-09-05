import BookingPage from '@/components/booking/BookingPage';

export const metadata = {
  title: 'Online Booking | Logic Restaurant',
  description: 'Reserve your table at Logic Restaurant. Fast and easy online booking.',
};

export default function Page() {
  return (
    <section className="pt-16">
      <BookingPage />
    </section>
  );
}