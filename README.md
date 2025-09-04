# Logic Restaurant - A Full-Stack Next.js Application

![Logic Restaurant Homepage](https://imgur.com/a/nk0Pwp8) <!-- It is highly recommended to take a screenshot of your finished homepage, upload it to a site like imgur.com, and paste the URL here. -->

A modern, production-ready, and fully-featured full-stack website for a fictional restaurant named "Logic". This project is built from the ground up using the latest web technologies, demonstrating a complete development lifecycle from initial setup to final deployment.

**Live Demo:** [**https://logic-restaurant-website.vercel.app/**](https://logic-restaurant-website.vercel.app/) <!-- Replace this with your actual Vercel deployment URL! -->

---

## Features

-   **Multi-Page Architecture:** A complete, navigable website with 7 distinct pages:
    -   Home: A beautiful landing page with a hero section and featured dishes.
    -   Menu: A fully dynamic menu with category filters, powered by a PostgreSQL database.
    -   About Us: Telling the story and philosophy behind the restaurant.
    -   Banquet & Catering: Informational pages with clear calls-to-action.
    -   Gallery: An interactive, responsive image gallery with hover effects.
    -   Contact Us: A comprehensive contact page with a form and an embedded map.
-   **Full-Stack Functionality:**
    -   **Dynamic Content:** Menu items are fetched directly from a Supabase PostgreSQL database.
    -   **Online Booking:** Users can submit table reservations, which are stored in the database.
    -   **Contact Form:** A functional contact form that saves inquiries to the database.
-   **Professional UX/UI:**
    -   **Interactive Forms:** Forms provide clear, inline validation and user feedback.
    -   **Toast Notifications:** Users receive professional toast notifications for successful or failed form submissions.
    -   **Responsive Design:** Fully responsive layouts that look great on desktops, tablets, and mobile phones.
-   **Robust Backend & Security:**
    -   **Server-Side Validation:** All form submissions are securely validated on the server using Zod to prevent invalid data.
    -   **Email Notifications:** Automatic emails are sent to the restaurant admin via Resend upon new bookings or inquiries, triggered by Supabase Edge Functions.
    -   **Database Security:** PostgreSQL Row Level Security (RLS) is enabled to protect user data, allowing public read access for the menu while restricting write access to authenticated actions.

---

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL, Edge Functions)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) (using React 19's `useActionState`)
-   **Validation:** [Zod](https://zod.dev/)
-   **Email API:** [Resend](https://resend.com/)
-   **UI Components:** [Lucide React](https://lucide.dev/) (Icons), [React Hot Toast](https://react-hot-toast.com/) (Notifications)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or newer)
-   npm or yarn
-   [Supabase CLI](https://supabase.com/docs/guides/cli) installed globally: `npm install -g supabase`

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/logic-restaurant-website.git
    cd logic-restaurant-website
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your Supabase project:**
    -   Create a new project on [Supabase](https://supabase.com).
    -   Log in to the Supabase CLI in your terminal: `supabase login`
    -   Link your local project to your Supabase project: `supabase link --project-ref YOUR_PROJECT_ID` (You can find your Project ID in the Supabase project URL).

4.  **Set up Environment Variables:**
    -   Create a new file named `.env.local` in the root of the project.
    -   Copy the contents of `.env.example` (if you created one) or use the template below.
    -   Get your Project URL and Anon Key from your Supabase project settings (Settings > API).
    ```env
    # For the Next.js App
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_PUBLIC_KEY"
    ```

5.  **Run the application:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Supabase Database & Functions Setup

For the application to be fully functional, you need to set up the database tables and Edge Functions. The easiest way is to run the following SQL queries in the Supabase SQL Editor.

### 1. Database Tables

Run these queries in the **Supabase SQL Editor** to create the necessary tables.

```sql
-- Create menu_items table
CREATE TABLE public.menu_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT,
  description TEXT,
  price VARCHAR,
  imageUrl TEXT,
  category TEXT
);

-- Create bookings table
CREATE TABLE public.bookings (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT,
  email TEXT,
  guests INT4,
  booking_date DATE,
  booking_time TIME,
  special_requests TEXT
);

-- Create contact_inquiries table
CREATE TABLE public.contact_inquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT
);

### 2. Enable Row Level Security (RLS) & Policies

Enable RLS on all tables and add the following policies:

-   **`menu_items`:** Allow public `SELECT` (read) access for everyone.
-   **`bookings`:** Allow public `INSERT` (write) access for everyone.
-   **`contact_inquiries`:** Allow public `INSERT` (write) access for everyone.

### 3. Edge Function & Trigger

1.  **Set Supabase Secrets:** In your terminal (in the project root), run these commands to securely store your API keys.
    ```sh
    supabase secrets set RESEND_API_KEY="YOUR_RESEND_API_KEY"
    supabase secrets set RECIPIENT_EMAIL="your-email@example.com"
    ```

2.  **Deploy the Edge Function:**
    ```sh
    supabase functions deploy email-notification
    ```

3.  **Create the SQL Trigger Function:** In the Supabase SQL Editor, run this query. **Remember to replace the placeholder with your actual Edge Function URL.**
    ```sql
    CREATE OR REPLACE FUNCTION public.trigger_email_notification_on_insert()
    RETURNS TRIGGER
    LANGUAGE plpgsql
    AS $$
    DECLARE
      webhook_url TEXT := 'YOUR_EDGE_FUNCTION_URL';
      payload JSONB;
    BEGIN
      payload := jsonb_build_object(
        'type', TG_OP,
        'table', TG_TABLE_NAME,
        'record', to_jsonb(NEW)
      );
      PERFORM http_post(
        webhook_url,
        payload,
        '{}'::jsonb,
        '{"Content-Type": "application/json"}'::jsonb
      );
      RETURN NEW;
    END;
    $$;
    ```
4.  **Create the Database Triggers:** In the Supabase UI (Database > Triggers), create a new trigger for the `bookings` table and another for the `contact_inquiries` table that both fire on `INSERT` and call the `trigger_email_notification_on_insert` function.

---

## Deployment

This application is configured for easy deployment on [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables in the Vercel project settings.
4.  Deploy! Vercel will handle the rest.

---