import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; // New "Sleek" Fonts
import Navbar from "@/app/Components/Navbar"; // Preserving your path
import Footer from "@/app/Components/Footer"; // Preserving your path
import "./globals.css";

// 1. Configure "Body" font (Tech/Modern/Clean)
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

// 2. Configure "Header" font (Luxury/Thin/Wide)
// This is the font that gives the "JDMHQ" look in Light weights
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ['200', '300', '400', '500', '700'], // Importing light weights is crucial
  display: 'swap',
});

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
      {/* KEY CHANGES FOR "SLEEK" LOOK:
         1. Font Variables: Added outfit/jakarta variables
         2. Background: Changed from #0B0F19 (Dark) to white (Clean JDMHQ style)
         3. Text: Changed from white to slate-900 (Dark text on light background)
      */}
      <body className={`${jakarta.variable} ${outfit.variable} bg-white text-slate-900 antialiased flex flex-col min-h-screen font-sans`}>
        
        {/* GLOBAL HEADER */}
        <Navbar />
        
        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />
        
      </body>
    </html>
  );
}