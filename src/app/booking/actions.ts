'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

const bookingSchema = z.object({
  full_name: z.string().min(3, 'Full name must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  guests: z.coerce.number().min(1, 'You must book for at least 1 guest.').max(8, 'For parties larger than 8, please contact us directly.'),
  booking_date: z.string().min(1, 'Please select a date.'),
  booking_time: z.string().min(1, 'Please select a time.'),
  special_requests: z.string().max(500, 'Requests cannot exceed 500 characters.').optional(),
});

export type FormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

export async function createBooking(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = bookingSchema.safeParse(Object.fromEntries(formData.entries()));
  
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { error } = await supabase
      .from('bookings')
      .insert([validatedFields.data]);

    if (error) {
      throw new Error(error.message);
    }
    
    revalidatePath('/booking');
    
    return {
      message: 'Thank you! Your booking has been received.',
      success: true,
    };

  } catch (e) {
    // Corrected, type-safe error handling
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return {
      message: errorMessage,
      success: false,
    };
  }
}