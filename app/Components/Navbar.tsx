'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, ArrowRight, Calendar } from 'lucide-react';
import { useEnquiryModal } from '../contexts/EnquiryModalContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showInventoryDropdown, setShowInventoryDropdown] = useState(false);
  const [showMobileInventoryDropdown, setShowMobileInventoryDropdown] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();
  const { openModal } = useEnquiryModal();
  const lastScrollY = useRef(0);

  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Robust scroll handling with threshold, buffer, and menu override
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      // Force visibility near top of page
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Lock visibility when menu is open
      if (isMobileMenuOpen) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Only react if scroll difference exceeds buffer (prevents flickering)
      if (scrollDifference < 5) {
        return;
      }

      // Only hide if scrolled down more than threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide header
          setIsHeaderVisible(false);
        } else {
          // Scrolling up - show header
          setIsHeaderVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Reusable Nav Link Component
  const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
    <Link 
      href={href} 
      className={`group relative h-full flex items-center px-5 text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap
        ${isActive(href) 
          ? 'text-[#0f172a] font-normal' 
          : 'text-slate-500 hover:text-[#0f172a] font-light'}
      `}
      style={{ fontFamily: 'Raleway, sans-serif' }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {hasDropdown && (
          <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#0f172a]" />
        )}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0f172a] group-hover:w-full transition-all duration-500 ease-out"></span>
    </Link>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm z-[100] border-b border-slate-100 h-24 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 md:px-6 lg:px-12 w-full">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center relative z-50 h-full">
            <Link 
              href="/" 
              className="flex items-center gap-3 group" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* THE FIX: 
                  1. 'rounded-full' makes the container a circle.
                  2. 'overflow-hidden' cuts off the white corners of your square image.
                  3. 'border' adds a clean ring to define it.
              */}
              <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden border border-slate-100 group-hover:border-slate-300 transition-colors">
                <Image 
                  src="/logo.png" 
                  alt="NFS Autos" 
                  fill
                  className="object-cover" // Ensures image fills the circle without distortion
                  priority
                />
              </div>
              
              {/* THE TEXT: Clean, minimal, horizontally aligned */}
              <div className="flex items-center h-full">
                <span className="text-[1.65rem] text-[#0f172a] leading-none tracking-normal font-bold uppercase whitespace-nowrap" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                  NFS AUTOS
                </span>
              </div>
            </Link>
          </div>
          {/* -------------------- */}

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center h-full gap-2 ml-16">
            <NavLink href="/" label="Home" />
            
            <div 
              className="relative h-full flex items-center"
              onMouseLeave={() => setShowInventoryDropdown(false)}
            >
              <div 
                className={`h-full flex items-center px-5 text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  pathname.includes('/inventory') || pathname.includes('/recently-sold') ? 'text-[#0f172a] font-normal' : 'text-slate-500 hover:text-[#0f172a] font-light'
                }`} 
                style={{ fontFamily: 'Raleway, sans-serif' }}
                onMouseEnter={() => setShowInventoryDropdown(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Inventory
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${showInventoryDropdown ? 'rotate-180' : ''}`} />
                </span>
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#0f172a] transition-all duration-500 ease-out ${
                  showInventoryDropdown || pathname.includes('/inventory') || pathname.includes('/recently-sold') ? 'w-full' : 'w-0'
                }`}></span>
              </div>
              
              {/* Dropdown Menu with hover bridge */}
              {showInventoryDropdown && (
                <div 
                  className="absolute top-[90%] left-0 pt-4 z-[100]"
                  onMouseEnter={() => setShowInventoryDropdown(true)}
                >
                  <div className="w-64 bg-white border border-slate-100 shadow-2xl rounded-sm">
                    <div className="py-2 flex flex-col">
                    <Link 
                      href="/inventory" 
                      className="px-6 py-4 text-xs font-light tracking-widest text-slate-600 hover:text-white hover:bg-[#0f172a] transition-all uppercase" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      All Stock
                    </Link>
                    <Link 
                      href="/inventory?type=jdm" 
                      className="px-6 py-4 text-xs font-light tracking-widest text-slate-600 hover:text-white hover:bg-[#0f172a] transition-all uppercase border-t border-slate-50" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      JDM Imports
                    </Link>
                    <Link 
                      href="/recently-sold" 
                      className="px-6 py-4 text-xs font-light tracking-widest text-slate-600 hover:text-white hover:bg-[#0f172a] transition-all uppercase border-t border-slate-50" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Recently Sold
                    </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/import-brokerage" label="Brokerage" />
            <NavLink href="/testimonials" label="Testimonials" />
            <NavLink href="/about" label="About Us" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => openModal()}
              className="relative px-9 py-3.5 bg-gradient-to-b from-[#334155] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.2em] rounded-full border-t border-slate-500/30 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-slate-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden antialiased group/btn whitespace-nowrap"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Book Now
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              {/* Glossy top highlight */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent rounded-full"></div>
              {/* Diagonal sheen animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-blue-400/0 group-hover/btn:from-blue-500/10 group-hover/btn:to-blue-400/5 transition-all duration-500 rounded-full"></div>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center gap-4 relative z-50">
            <button 
              onClick={toggleMenu} 
              className="p-2 hover:bg-slate-50 rounded-full transition-colors group flex flex-col items-center justify-center gap-1.5 w-10 h-10"
              aria-label="Toggle menu"
            >
              {/* Line 1 */}
              <span 
                className={`block h-[2px] bg-[#0f172a] transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'w-8 rotate-45 translate-y-[5px]' 
                    : 'w-8'
                }`}
              />
              {/* Line 2 */}
              <span 
                className={`block h-[2px] bg-[#0f172a] transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'w-6 -rotate-45 -translate-y-[5px]' 
                    : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[80] lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed top-0 right-0 h-full w-[85%] bg-white z-[90] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] shadow-2xl ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Menu Content - Added padding bottom to account for sticky CTA */}
          <div className="flex-1 pt-32 px-8 pb-40 flex flex-col gap-6 overflow-y-auto">
            <Link href="/" onClick={toggleMenu} className="text-2xl font-light text-[#0f172a] tracking-widest uppercase border-b border-slate-100 pb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Home</Link>
            
            {/* Inventory with Dropdown */}
            <div className="border-b border-slate-100">
              <button 
                onClick={() => setShowMobileInventoryDropdown(!showMobileInventoryDropdown)}
                className="w-full flex items-center justify-between text-2xl font-light text-[#0f172a] tracking-widest uppercase pb-4" 
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Inventory
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMobileInventoryDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showMobileInventoryDropdown && (
                <div className="pl-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Link href="/inventory" onClick={toggleMenu} className="block text-lg font-light text-slate-600 hover:text-[#0f172a] uppercase tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>All Stock</Link>
                  <Link href="/inventory?type=jdm" onClick={toggleMenu} className="block text-lg font-light text-slate-600 hover:text-[#0f172a] uppercase tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>JDM Imports</Link>
                  <Link href="/recently-sold" onClick={toggleMenu} className="block text-lg font-light text-slate-600 hover:text-[#0f172a] uppercase tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>Recently Sold</Link>
                </div>
              )}
            </div>
            
            <Link href="/import-brokerage" onClick={toggleMenu} className="text-2xl font-light text-[#0f172a] tracking-widest uppercase border-b border-slate-100 pb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Brokerage</Link>
            <Link href="/testimonials" onClick={toggleMenu} className="text-2xl font-light text-[#0f172a] tracking-widest uppercase border-b border-slate-100 pb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Testimonials</Link>
            <Link href="/about" onClick={toggleMenu} className="text-2xl font-light text-[#0f172a] tracking-widest uppercase border-b border-slate-100 pb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>About Us</Link>
            <Link href="/contact" onClick={toggleMenu} className="text-2xl font-light text-[#0f172a] tracking-widest uppercase border-b border-slate-100 pb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Contact</Link>
          </div>
          
          {/* Sticky Footer CTA */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white/95 backdrop-blur-md pb-8 pt-4 px-6">
            <button 
              onClick={() => { openModal(); toggleMenu(); }} 
              className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-[1.01] active:scale-95 active:shadow-md" 
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Appointment</span>
            </button>
            <p className="text-center text-[10px] text-gray-500 mt-3 leading-relaxed">
              No-obligation. Our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}