import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"; // Imports the Header
import Footer from "./Components/Footer"; // Imports the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFS Autos | Premium JDM Imports",
  description: "Specializing in Toyota Crown, Mark X, and VIP Imports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            {/* 1. Header stays at the top */}
            <Navbar />
            
            {/* 2. Main content grows to fill space */}
            <main className="flex-grow">
                {children}
            </main>
            
            {/* 3. Footer stays at the bottom */}
            <Footer />
        </div>
      </body>
    </html>
  );
}