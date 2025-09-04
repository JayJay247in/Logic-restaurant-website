'use server';

import { z } from 'zod';
import { createServerClient } from '@/lib/supabaseServer'; // 1. IMPORT our new server client
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
  
  // 2. CREATE an instance of the server client INSIDE the action
  const supabase = createServerClient();

  try {
    // 3. PERFORM the insert operation
    const { error } = await supabase
      .from('bookings')
      .insert([validatedFields.data]);

    if (error) {
      // This will now provide a more specific database error if one occurs
      throw new Error(error.message);
    }
    
    revalidatePath('/booking');
    
    return {
      message: 'Thank you! Your booking has been received.',
      success: true,
    };

  } catch (e: any) {
    return {
      message: `Database error: ${e.message}`, // Provide a more detailed error
      success: false,
    };
  }
}