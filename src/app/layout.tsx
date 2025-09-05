import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';
import { ReactNode } from "react"; // It's better to import ReactNode directly

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logic Restaurant",
  description: "A full-stack restaurant website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  // Corrected type from React.Node to React.ReactNode
  children: ReactNode;
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
        <main className="pt-16">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}