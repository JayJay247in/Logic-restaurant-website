'use client';
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { createBooking, FormState } from '@/app/booking/actions';
import toast from 'react-hot-toast';
import AnimatedSection from '@/components/common/AnimatedSection';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}
            className="w-full bg-primary text-dark font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary-dark transition-colors disabled:bg-gray-400">
      {pending ? 'Confirming...' : 'Confirm Reservation'}
    </button>
  );
}

const BookingPage = () => {
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useActionState(createBooking, initialState);

  useEffect(() => {
    if (state.success) toast.success(state.message);
    else if (state.message && state.errors) {}
    else if (state.message) toast.error(state.message);
  }, [state]);

  return (
    <div className="bg-light pt-16">
      <AnimatedSection className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-extrabold text-dark">Book Your Table</h1>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience. For parties larger than 8, please contact us directly.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8 text-center">Reservation Details</h2>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-secondary mb-1">Full Name</label>
                  <input type="text" id="full_name" name="full_name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                  {state.errors?.full_name && <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                  {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-secondary mb-1">Guests</label>
                  <input type="number" id="guests" name="guests" min="1" max="8" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                  {state.errors?.guests && <p className="mt-1 text-sm text-red-600">{state.errors.guests[0]}</p>}
                </div>
                <div>
                  <label htmlFor="booking_date" className="block text-sm font-medium text-secondary mb-1">Date</label>
                  <input type="date" id="booking_date" name="booking_date" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                  {state.errors?.booking_date && <p className="mt-1 text-sm text-red-600">{state.errors.booking_date[0]}</p>}
                </div>
                <div>
                  <label htmlFor="booking_time" className="block text-sm font-medium text-secondary mb-1">Time</label>
                  <input type="time" id="booking_time" name="booking_time" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                  {state.errors?.booking_time && <p className="mt-1 text-sm text-red-600">{state.errors.booking_time[0]}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="special_requests" className="block text-sm font-medium text-secondary mb-1">Special Requests (Optional)</label>
                <textarea id="special_requests" name="special_requests" rows={4} placeholder="e.g. Birthday celebration" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"></textarea>
                {state.errors?.special_requests && <p className="mt-1 text-sm text-red-600">{state.errors.special_requests[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BookingPage;