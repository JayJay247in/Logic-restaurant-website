import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// The data payload we expect from our database trigger
interface WebhookPayload {
  type: 'INSERT';
  table: string;
  record: { [key: string]: any };
}

// Simple email sending function using the Resend API
async function sendEmail(subject: string, body: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const recipientEmail = Deno.env.get('RECIPIENT_EMAIL');
  
  if (!resendApiKey || !recipientEmail) {
    throw new Error("Missing RESEND_API_KEY or RECIPIENT_EMAIL environment variables.");
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: 'Logic Restaurant <onboarding@resend.dev>', // Keep this default for testing
      to: recipientEmail,
      subject: subject,
      html: body,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to send email:', data);
    throw new Error('Failed to send email.');
  }
  
  return data;
}

// Main server function that listens for requests (from the trigger)
serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json();
    
    // Prepare email subject and body based on which table triggered the event
    let subject = '';
    let body = '';
    const record = payload.record;
    
    if (payload.table === 'bookings') {
      subject = `New Table Reservation: ${record.full_name}`;
      body = `
        <h1>New Reservation Confirmed</h1>
        <p><strong>Name:</strong> ${record.full_name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Guests:</strong> ${record.guests}</p>
        <p><strong>Date:</strong> ${record.booking_date}</p>
        <p><strong>Time:</strong> ${record.booking_time}</p>
        <p><strong>Requests:</strong> ${record.special_requests || 'None'}</p>
      `;
    } else if (payload.table === 'contact_inquiries') {
      subject = `New Contact Inquiry: ${record.subject}`;
      body = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${record.full_name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Subject:</strong> ${record.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${record.message}</p>
      `;
    } else {
       throw new Error(`Unhandled table: ${payload.table}`);
    }
    
    // Send the prepared email
    await sendEmail(subject, body);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(String(error?.message ?? error), { status: 500 });
  }
});