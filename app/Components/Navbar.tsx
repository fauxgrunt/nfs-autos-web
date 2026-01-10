'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // 1. UPDATED FONT SIZES: Changed text-sm -> text-xs, increased tracking
  const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
    <Link 
      href={href} 
      className={`group relative h-full flex items-center px-5 text-xs font-chakra font-black italic uppercase tracking-[0.15em] transition-all duration-300
        ${isActive(href) ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}
      `}
    >
      <span className="relative z-10 flex items-center gap-1">
        {label}
        {hasDropdown && <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180" />}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );

  return (
    <>
      <nav className="sticky top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm h-16 transition-all duration-300">
        
        <div className="max-w-[1920px] mx-auto flex justify-between items-stretch h-full px-6 md:px-12">
          
          {/* BRAND IDENTITY */}
          <div className="flex items-center relative z-50 h-full">
            <Link href="/" className="flex items-center gap-3 group pr-10 md:pr-12" onClick={() => setIsMobileMenuOpen(false)}>
                {/* 2. LOGO SIZE: Adjusted to fit h-16 header */}
                <div className="relative h-9 w-9 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                  <Image 
                    src="/logo.png" 
                    alt="NFS Autos" 
                    fill
                    className="object-contain rounded-full" 
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  {/* 3. BRAND TEXT: Sized down to text-lg (was text-2xl) */}
                  <span className="font-chakra font-black italic text-lg tracking-tighter text-slate-900 leading-none group-hover:text-red-600 transition-colors">
                    NFS AUTOS
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.3em] text-slate-400 uppercase ml-0.5">
                    Est. 2026
                  </span>
                </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-stretch">
            {/* Group 1: The Cars */}
            <div className="flex items-stretch border-l border-gray-100 pl-4">
              <div className="relative group flex items-center h-full">
                 <NavLink href="/inventory" label="Inventory" hasDropdown />
                 
                 {/* Dropdown */}
                 <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-4 border-red-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-col py-3">
                      <Link href="/inventory?type=jdm" className="px-6 py-3 text-[10px] font-chakra font-bold text-slate-500 hover:text-red-600 hover:bg-slate-50 uppercase tracking-widest transition-colors flex justify-between group/item">
                        JDM Legends <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </Link>
                      <Link href="/inventory?type=euro" className="px-6 py-3 text-[10px] font-chakra font-bold text-slate-500 hover:text-red-600 hover:bg-slate-50 uppercase tracking-widest transition-colors flex justify-between group/item">
                        Euro Spec <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </Link>
                    </div>
                 </div>
              </div>
              <NavLink href="/sold" label="Previously Sold" />
            </div>

            {/* Group 2: The Service */}
            <div className="flex items-stretch border-l border-gray-100 ml-4 pl-4">
              <NavLink href="/services" label="Import Brokerage" />
            </div>

            {/* Group 3: The Trust */}
            <div className="flex items-stretch border-l border-gray-100 ml-4 pl-4">
              <NavLink href="/about" label="About" />
              <NavLink href="/testimonials" label="Testimonials" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center pl-8 border-l border-gray-100 h-full">
            <Link 
              href="/book" 
              className="group relative px-6 py-2 overflow-hidden border border-red-600 bg-transparent transition-all duration-300 hover:bg-red-600"
            >
              {/* 4. BUTTON TEXT: Sized down to text-[10px] for that 'Sharp' look */}
              <span className="relative z-10 flex items-center gap-2 text-[10px] font-chakra font-black italic tracking-[0.2em] uppercase text-red-600 group-hover:text-white transition-colors">
                Book Appointment
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="xl:hidden flex items-center ml-auto relative z-50">
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-slate-50 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-white z-40 xl:hidden transition-transform duration-300 ease-in-out pt-20 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pb-8 overflow-y-auto">
          <div className="flex flex-col gap-5 mt-4">
            
            {/* 5. MOBILE FONTS: Sized down from text-xl to text-lg for cleaner look */}
            <Link href="/" onClick={toggleMenu} className="text-lg font-chakra font-black italic text-slate-900 uppercase tracking-wide hover:text-red-600">Home</Link>
            
            <div className="flex flex-col gap-3 border-l-2 border-red-600 pl-5 py-2">
              <span className="text-[9px] font-extrabold text-red-600 uppercase tracking-widest opacity-80">Inventory</span>
              <Link href="/inventory" onClick={toggleMenu} className="text-xs font-chakra font-bold text-slate-700 hover:text-red-600 uppercase tracking-widest flex items-center justify-between">
                View All Stock <span>→</span>
              </Link>
              <Link href="/sold" onClick={toggleMenu} className="text-xs font-chakra font-bold text-slate-400 hover:text-red-600 uppercase tracking-widest">
                Previously Sold
              </Link>
            </div>

            <Link href="/services" onClick={toggleMenu} className="text-lg font-chakra font-black italic text-slate-900 uppercase tracking-wide hover:text-red-600">Import Brokerage</Link>
            <Link href="/about" onClick={toggleMenu} className="text-lg font-chakra font-black italic text-slate-900 uppercase tracking-wide hover:text-red-600">About Us</Link>
            <Link href="/testimonials" onClick={toggleMenu} className="text-lg font-chakra font-black italic text-slate-900 uppercase tracking-wide hover:text-red-600">Testimonials</Link>
            <Link href="/contact" onClick={toggleMenu} className="text-lg font-chakra font-black italic text-slate-900 uppercase tracking-wide hover:text-red-600">Contact</Link>
          </div>

          <div className="mt-auto pt-8 border-t border-slate-100">
            <Link 
              href="/book" 
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white font-chakra font-black italic text-xs uppercase tracking-widest mb-4 hover:bg-red-700 transition-colors"
            >
              Book Appointment <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center justify-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
              <Phone className="w-3 h-3" />  Support
            </div>
          </div>
        </div>
      </div>
    </>
  );
}