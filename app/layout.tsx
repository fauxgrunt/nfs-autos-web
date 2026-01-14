import type { Metadata } from "next";
// 1. Import Raleway (for the thin luxury look) and Lato (for clean body text)
import { Raleway, Lato, Chakra_Petch } from "next/font/google"; 
import Navbar from "@/app/Components/Navbar"; 
import Footer from "@/app/Components/Footer"; 
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. Apply the new variables and the Platinum background */}
      <body className={`${raleway.variable} ${lato.variable} ${chakraPetch.variable} antialiased bg-slate-50 text-slate-900`}>
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