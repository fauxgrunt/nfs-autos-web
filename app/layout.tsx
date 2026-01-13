import type { Metadata } from "next";
import { Barlow, Manrope } from "next/font/google";
import Navbar from "@/app/Components/Navbar"; 
import Footer from "@/app/Components/Footer"; 
import "./globals.css";

// 1. Configure Fonts
const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// 2. Metadata (ONLY ONE EXPORT ALLOWED)
export const metadata: Metadata = {
  title: "NFS Autos | Premium Import Specialist",
  description: "Curated JDM legends and luxury imports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${manrope.variable} bg-white text-slate-900 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}