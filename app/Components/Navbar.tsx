'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showInventoryDropdown, setShowInventoryDropdown] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
    <Link 
      href={href} 
      className={`group relative h-full flex items-center px-6 text-sm font-medium uppercase tracking-wide transition-all duration-300
        ${isActive(href) 
          ? 'text-red-600' 
          : 'text-black hover:text-red-600'}
      `}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {hasDropdown && (
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
        )}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );

  return (
    <>
      {/* DESKTOP & MOBILE HEADER - WHITE BACKGROUND */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-sm h-20 transition-all duration-300">
        
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6 lg:px-12">
          
          {/* LOGO */}
          <div className="flex items-center relative z-50 h-full">
            <Link 
              href="/" 
              className="flex items-center gap-3 group" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative h-14 w-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="NFS Autos" 
                  fill
                  className="object-contain" 
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-black leading-none transition-colors group-hover:text-red-600" style={{ fontFamily: 'Chakra Petch, system-ui, sans-serif' }}>
                  NFS AUTOS
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center h-full">
            
            <NavLink href="/" label="Home" />
            
            {/* Inventory with Dropdown */}
            <div 
              className="relative group flex items-center h-full"
              onMouseEnter={() => setShowInventoryDropdown(true)}
              onMouseLeave={() => setShowInventoryDropdown(false)}
            >
              <div className={`h-full flex items-center px-6 text-sm font-medium uppercase tracking-wide transition-all duration-300 cursor-pointer ${
                pathname.includes('/inventory') || pathname.includes('/sold')
                  ? 'text-red-600' 
                  : 'text-black hover:text-red-600'
              }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <span className="relative z-10 flex items-center gap-2">
                  Inventory
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showInventoryDropdown ? 'rotate-180' : ''}`} />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </div>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                showInventoryDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
                <div className="py-2">
                  <Link 
                    href="/inventory" 
                    className="block px-6 py-3 text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-red-600"
                    onClick={() => setShowInventoryDropdown(false)}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    All Stock
                  </Link>
                  <Link 
                    href="/inventory?type=jdm" 
                    className="block px-6 py-3 text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-red-600"
                    onClick={() => setShowInventoryDropdown(false)}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    JDM Imports
                  </Link>
                  <Link 
                    href="/sold" 
                    className="block px-6 py-3 text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-red-600"
                    onClick={() => setShowInventoryDropdown(false)}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Previously Sold
                  </Link>
                </div>
              </div>
            </div>

            <NavLink href="/import-brokerage" label="Import Brokerage" />
            <NavLink href="/testimonials" label="Testimonials" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* DESKTOP CTA + CONTACT */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:0499176176" 
              className="flex items-center gap-2 text-black hover:text-red-600 transition-colors group"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                <Phone className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium">Call Us</span>
            </a>
            
            <Link 
              href="/book" 
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE: Hamburger + Quick Call Button */}
          <div className="lg:hidden flex items-center gap-2 ml-auto relative z-50">
            <a 
              href="tel:0499176176"
              className="p-2 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5 text-red-600" />
            </a>
            
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - WHITE BACKGROUND */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          
          {/* Mobile Nav Content */}
          <div className="flex-1 pt-24 px-6 pb-6">
            
            {/* Primary Actions */}
            <div className="space-y-3 mb-8">
              <Link 
                href="/book" 
                onClick={toggleMenu}
                className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white font-semibold text-base uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg rounded-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Book Appointment
              </Link>
              
              <a 
                href="tel:0499176176"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-gray-200 text-black font-semibold text-base uppercase tracking-wide hover:border-red-600 hover:text-red-600 transition-colors rounded-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
              
              <Link 
                href="/" 
                onClick={toggleMenu} 
                className={`text-base font-medium uppercase tracking-wide py-4 px-4 rounded-sm transition-colors ${
                  isActive('/') ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Home
              </Link>
              
              {/* Inventory Section */}
              <div>
                <button
                  onClick={() => setShowInventoryDropdown(!showInventoryDropdown)}
                  className={`w-full text-left text-base font-medium uppercase tracking-wide py-4 px-4 rounded-sm transition-colors flex items-center justify-between ${
                    pathname.includes('/inventory') || pathname.includes('/sold') ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Inventory
                  <ChevronDown className={`w-5 h-5 transition-transform ${showInventoryDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${showInventoryDropdown ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="flex flex-col border-l-4 border-red-600 ml-4 pl-4 py-2 gap-1">
                    <Link 
                      href="/inventory" 
                      onClick={toggleMenu} 
                      className="text-sm font-normal text-gray-600 hover:text-black uppercase tracking-wide py-3"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      All Stock
                    </Link>
                    <Link 
                      href="/inventory?type=jdm" 
                      onClick={toggleMenu} 
                      className="text-sm font-normal text-gray-600 hover:text-black uppercase tracking-wide py-3"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      JDM Imports
                    </Link>
                    <Link 
                      href="/sold" 
                      onClick={toggleMenu} 
                      className="text-sm font-normal text-gray-600 hover:text-black uppercase tracking-wide py-3 border-t border-gray-100 mt-1 pt-3"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Previously Sold
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/import-brokerage" 
                onClick={toggleMenu} 
                className={`text-base font-medium uppercase tracking-wide py-4 px-4 rounded-sm transition-colors ${
                  isActive('/import-brokerage') ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Import Brokerage
              </Link>
              
              <Link 
                href="/testimonials" 
                onClick={toggleMenu} 
                className={`text-base font-medium uppercase tracking-wide py-4 px-4 rounded-sm transition-colors ${
                  isActive('/testimonials') ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Testimonials
              </Link>
              
              <Link 
                href="/contact" 
                onClick={toggleMenu} 
                className={`text-base font-medium uppercase tracking-wide py-4 px-4 rounded-sm transition-colors ${
                  isActive('/contact') ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="space-y-3 text-center">
              <a 
                href="tel:0499176176"
                className="flex items-center justify-center gap-3 text-gray-700 text-sm font-medium"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Phone className="w-4 h-4 text-red-600" /> 0499 176 176
              </a>
              <a 
                href="mailto:info@nfsautos.com.au"
                className="flex items-center justify-center gap-3 text-gray-700 text-sm font-medium"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Mail className="w-4 h-4 text-red-600" /> info@nfsautos.com.au
              </a>
              <p className="text-xs text-gray-500 pt-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Handpicked by us, according to your taste</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}