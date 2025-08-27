'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

// Define the shape of our form data using a Zod schema
const bookingSchema = z.object({
  full_name: z.string().min(3, 'Full name must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  guests: z.coerce.number().min(1, 'You must book for at least 1 guest.').max(8, 'For parties larger than 8, please contact us directly.'),
  booking_date: z.string().min(1, 'Please select a date.'),
  booking_time: z.string().min(1, 'Please select a time.'),
  special_requests: z.string().max(500, 'Requests cannot exceed 500 characters.').optional(),
});

// Define the shape of the state that our action will return
export type FormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

// This is the Server Action
export async function createBooking(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Validate the form data against the Zod schema
  const validatedFields = bookingSchema.safeParse(Object.fromEntries(formData.entries()));
  
  // 2. If validation fails, return the error messages
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // 3. If validation succeeds, attempt to insert the data into the database
  try {
    const { error } = await supabase
      .from('bookings')
      .insert([validatedFields.data]);

    if (error) {
      throw new Error(error.message);
    }
    
    // Invalidate the cache for a path if needed in the future
    revalidatePath('/booking');
    
    // 4. Return a success message
    return {
      message: 'Thank you! Your booking has been received.',
      success: true,
    };

  } catch (e) {
    // 5. If there's a database error, return a generic error message
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }
}