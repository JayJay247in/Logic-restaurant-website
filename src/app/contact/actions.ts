'use server';

import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

// Define the validation schema for the contact form
const contactSchema = z.object({
  full_name: z.string().min(3, 'Full name must be at least 3 characters long.'),
  email: z.string().email('Please provide a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters long.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.').max(1000, 'Message cannot exceed 1000 characters.'),
});

// Define the shape of the state our action will return
export type ContactFormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

// The Server Action for the contact form
export async function createInquiry(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // 1. Validate the incoming form data
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));
  
  // 2. If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please review your entries.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // 3. If validation succeeds, attempt to insert into the database
  try {
    const { error } = await supabase
      .from('contact_inquiries')
      .insert([validatedFields.data]);

    if (error) {
      throw new Error(error.message);
    }
    
    revalidatePath('/contact');
    
    // 4. Return a success response
    return {
      message: 'Thank you for your message! We will get back to you shortly.',
      success: true,
    };
    
  } catch (e) {
    // 5. Handle any potential database errors
    return {
      message: 'Database error. Failed to send message, please try again.',
      success: false,
    };
  }
}