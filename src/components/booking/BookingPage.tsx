'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createBooking, FormState } from '@/app/booking/actions';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

// This is a new component to handle the submit button's pending state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}
            className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-yellow-600 transition-colors disabled:bg-gray-400">
      {pending ? 'Confirming...' : 'Confirm Reservation'}
    </button>
  );
}

const BookingPage = () => {
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useFormState(createBooking, initialState);

  // Use useEffect to show toast notifications based on the form state
  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message && state.errors) {
      // Don't show an error toast for validation, as errors are shown inline
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="bg-gray-50">
      <section className="bg-gray-800 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Book Your Table</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience. For parties larger than 8, please contact us directly.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reservation Details</h2>
            <form action={formAction} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="full_name" name="full_name"
                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                  {state.errors?.full_name && <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email"
                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                  {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
                  <input type="number" id="guests" name="guests" min="1" max="8"
                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                  {state.errors?.guests && <p className="mt-1 text-sm text-red-600">{state.errors.guests[0]}</p>}
                </div>

                <div>
                  <label htmlFor="booking_date" className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" id="booking_date" name="booking_date"
                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                  {state.errors?.booking_date && <p className="mt-1 text-sm text-red-600">{state.errors.booking_date[0]}</p>}
                </div>

                <div>
                  <label htmlFor="booking_time" className="block text-sm font-medium text-gray-700">Time</label>
                  <input type="time" id="booking_time" name="booking_time"
                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                  {state.errors?.booking_time && <p className="mt-1 text-sm text-red-600">{state.errors.booking_time[0]}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="special_requests" className="block text-sm font-medium text-gray-700">Special Requests (Optional)</label>
                <textarea id="special_requests" name="special_requests" rows={4}
                          placeholder="e.g. Birthday celebration, window seat preference"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"></textarea>
                  {state.errors?.special_requests && <p className="mt-1 text-sm text-red-600">{state.errors.special_requests[0]}</p>}
              </div>
              
              <SubmitButton />

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;