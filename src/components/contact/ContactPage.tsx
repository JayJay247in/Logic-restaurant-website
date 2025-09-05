'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { createInquiry, ContactFormState } from '@/app/contact/actions';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}
            className="w-full bg-primary text-dark font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary-dark transition-colors disabled:bg-gray-400">
      {pending ? 'Sending...' : 'Submit Message'}
    </button>
  );
}

const ContactPage = () => {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(createInquiry, initialState);

  useEffect(() => {
    if (state.success) toast.success(state.message);
    else if (state.message && !state.errors) toast.error(state.message);
  }, [state]);

  return (
    <div className="bg-light pt-16">
      <AnimatedSection className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-extrabold text-dark">Get in Touch</h1>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question or a booking inquiry, here’s how to reach us.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-dark mb-6">Send Us a Message</h2>
            <form action={formAction} className="space-y-6">
              <div>
                <input type="text" name="full_name" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                {state.errors?.full_name && <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>}
              </div>
              <div>
                <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
              </div>
              <div>
                <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary" />
                {state.errors?.subject && <p className="mt-1 text-sm text-red-600">{state.errors.subject[0]}</p>}
              </div>
              <div>
                <textarea name="message" rows={5} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"></textarea>
                {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-serif font-bold text-dark mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-dark">Address</p>
                      <p className="text-secondary">123 Restaurant St, Food City, FS 45678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-dark">Phone</p>
                      <p className="text-secondary">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg text-dark">Email</p>
                      <p className="text-secondary">info@logicrestaurant.com</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-serif font-bold text-dark mb-6">Visiting Hours</h3>
                <div className="space-y-3 text-secondary text-lg">
                   <div className="flex justify-between"><span className="font-semibold text-dark">Mon - Fri:</span><span>11am - 10pm</span></div>
                   <div className="flex justify-between"><span className="font-semibold text-dark">Sat - Sun:</span><span>12pm - 11pm</span></div>
                </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.282998393529!2d-73.98776078459427!3d40.75544897932717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c65f2427%3A0x7a8c3d98d8fcf526!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1628087798725!5m2!1sen!2sus"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};
export default ContactPage;