'use client';

import { useActionState, useEffect } from 'react';

import { useFormStatus } from 'react-dom';

import { createInquiry, ContactFormState } from '@/app/contact/actions';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400 transition-colors">
      {pending ? 'Sending...' : 'Submit'}
    </button>
  );
}

const ContactPage = () => {
  const initialState: ContactFormState = { message: '', success: false };
  // 2. HOOK RENAME: useFormState is now useActionState
  const [state, formAction] = useActionState(createInquiry, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="bg-white">
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question, a comment, or a booking inquiry, here’s how to reach us.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form action={formAction}>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full_name" className="sr-only">Full name</label>
                  <input type="text" name="full_name" id="full_name"
                         className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                         placeholder="Full name" />
                  {state.errors?.full_name && <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email"
                         className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                         placeholder="Email" />
                  {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" name="subject" id="subject"
                         className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                         placeholder="Subject" />
                  {state.errors?.subject && <p className="mt-1 text-sm text-red-600">{state.errors.subject[0]}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4}
                            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                            placeholder="Message"></textarea>
                  {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
                </div>
                
                <SubmitButton />
                
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg text-gray-800">Address</p>
                <p className="text-gray-600">123 Restaurant St, Food City, FS 45678</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg text-gray-800">Phone</p>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg text-gray-800">Email</p>
                <p className="text-gray-600">info@logicrestaurant.com</p>
              </div>
            </div>

            <hr className="my-8"/>

            <h2 className="text-2xl font-bold text-gray-900">Visiting Hours</h2>
            <div className="space-y-2 text-gray-600">
               <div className="flex justify-between"><span className="font-medium">Monday - Friday:</span><span>11:00am - 10:00pm</span></div>
               <div className="flex justify-between"><span className="font-medium">Saturday - Sunday:</span><span>12:00pm - 11:00pm</span></div>
            </div>
          </div>

        </div>
      </section>

      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.282998393529!2d-73.98776078459427!3d40.75544897932717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c65f2427%3A0x7a8c3d98d8fcf526!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1628087798725!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;