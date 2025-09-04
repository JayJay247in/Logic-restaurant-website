// 'Metadata' import has been removed
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

// The 'metadata' object is still exported, which is the correct Next.js pattern.
// We just don't need the 'Metadata' type import.
export const metadata = {
  title: "Logic Restaurant",
  description: "A full-stack restaurant website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}