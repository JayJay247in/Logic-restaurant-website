import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://logic-restaurant-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Logic Restaurant | Authentic Cuisine & Fine Dining',
    template: '%s | Logic Restaurant',
  },
  description: 'Experience authentic cuisine at Logic Restaurant. We offer fine dining, private events, and exceptional catering services. Book your table today!',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Logic Restaurant | Authentic Cuisine & Fine Dining',
    description: 'Book your table for an unforgettable fine dining experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The elegant interior of Logic Restaurant',
      },
    ],
    siteName: 'Logic Restaurant',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// ** THE CORRECTED OBJECT **
// All keys are now correctly formatted strings followed by a colon.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Logic Restaurant',
  url: siteUrl,
  logo: `${siteUrl}/images/og-image.jpg`,
  image: `${siteUrl}/images/og-image.jpg`,
  description: 'Experience authentic cuisine and fine dining.',
  servesCuisine: 'Modern European',
  address: {
    '@type': 'PostalAddress',
    'streetAddress': '123 Restaurant St',
    'addressLocality': 'Food City',
    'postalCode': '45678',
    'addressCountry': 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.755448,
    longitude: -73.987760
  },
  telephone: '+11234567890',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '11:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '12:00',
      closes: '23:00'
    }
  ],
  menu: `${siteUrl}/menu`,
  acceptsReservations: 'True'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}