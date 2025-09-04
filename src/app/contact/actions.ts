'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  full_name: z.string().min(3, 'Full name must be at least 3 characters long.'),
  email: z.string().email('Please provide a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters long.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.').max(1000, 'Message cannot exceed 1000 characters.'),
});

export type ContactFormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

export async function createInquiry(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));
  
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please review your entries.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { error } = await supabase
      .from('contact_inquiries')
      .insert([validatedFields.data]);

    if (error) {
      throw new Error(error.message);
    }
    
    revalidatePath('/contact');
    
    return {
      message: 'Thank you for your message! We will get back to you shortly.',
      success: true,
    };
    
  } catch (e) {
    // Corrected, type-safe error handling
    let errorMessage = 'Database error. Failed to send message, please try again.';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return {
      message: errorMessage,
      success: false,
    };
  }
}