import type { Metadata } from "next";
// 1. Import Raleway (for the thin luxury look) and Lato (for clean body text)
import { Raleway, Lato, Chakra_Petch } from "next/font/google"; 
import Navbar from "@/app/Components/Navbar"; 
import Footer from "@/app/Components/Footer"; 
import EnquiryModal from "@/app/Components/EnquiryModal";
import { EnquiryModalProvider } from "@/app/contexts/EnquiryModalContext";
import "./globals.css";

// 2. Configure Raleway (Headers)
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'], // We need these light weights!
  variable: '--font-oswald', // Keep variable name to trick Tailwind (Headers)
});

// 3. Configure Lato (Body)
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inter', // Keep variable name to trick Tailwind (Body)
});

// 4. Configure Chakra Petch (Logo)
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra-petch',
});

export const metadata: Metadata = {
  title: "NFS Autos | Premium Import Specialist",
  description: "Curated JDM legends and luxury imports.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* 4. Apply the new variables and the Platinum background */}
      <body className={`${raleway.variable} ${lato.variable} ${chakraPetch.variable} antialiased bg-white text-slate-900 overflow-x-hidden w-full max-w-[100vw]`}>
        <EnquiryModalProvider>
          <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
            <Navbar />
            <main className="flex-grow w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}