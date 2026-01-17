import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden w-full">
      
      {/* White Divider Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 lg:gap-12">
          
          {/* Brand Section */}
          <div className="col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="NFS Autos" 
                className="h-12 w-12 object-cover rounded-full"
              />
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Handpicked by us, according to your taste. Premium JDM imports from Japan auctions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links - Inventory */}
          <div className="col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Inventory</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/inventory" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Current Stock
                  </Link>
                </li>
                <li>
                  <Link href="/inventory?make=Toyota&model=Crown" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Toyota Crown
                  </Link>
                </li>
                <li>
                  <Link href="/inventory?make=Toyota&model=Mark%20X" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Toyota Mark X
                  </Link>
                </li>
                <li>
                  <Link href="/inventory?make=Lexus" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Lexus Models
                  </Link>
                </li>
                <li>
                  <Link href="/recently-sold" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Recently Sold
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/import-brokerage" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Import Brokerage
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          {/* Contact Info - Compact 2x2 Grid */}
          <div className="col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Contact</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {/* Top Left: Call Us */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Call Us</div>
                  <a href="tel:0499176176" className="text-xs text-white hover:text-slate-300 transition-colors font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    0499 176 176
                  </a>
                </div>
              </div>
              
              {/* Top Right: Email */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Email</div>
                  <a href="mailto:info@nfsautos.com.au" className="text-xs text-white hover:text-slate-300 transition-colors font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    info@nfsautos.com.au
                  </a>
                </div>
              </div>
              
              {/* Bottom Left: Location */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Location</div>
                  <p className="text-xs text-white font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Australia
                  </p>
                </div>
              </div>
              
              {/* Bottom Right: Motor Dealer License */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <a href="#" className="text-xs text-white hover:text-slate-300 transition-colors font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Motor Dealer License
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4 max-w-7xl">
          <div className="flex flex-col items-center gap-3 text-center">
            
            {/* Copyright - Dynamic Year */}
            <div className="text-xs text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
              © {new Date().getFullYear()} NFS Autos
            </div>

            {/* Legal Links - Centered */}
            <div className="flex items-center gap-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;