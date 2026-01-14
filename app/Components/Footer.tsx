import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      
      {/* White Divider Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 max-w-7xl">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
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
              Handpicked by us, according to your taste. Premium JDM imports from Japan auctions. Crown, Mark X, Lexus specialists.
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

          {/* Links Container - 2 columns on mobile, flows into main grid on desktop */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Inventory</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Current Stock
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Toyota Crown
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Toyota Mark X
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Lexus Models
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Recently Sold
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Import Process
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Import Brokerage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Call Us</div>
                  <a href="tel:0499176176" className="text-sm text-white hover:text-slate-300 transition-colors font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    0499 176 176
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Email</div>
                  <a href="mailto:info@nfsautos.com.au" className="text-sm text-white hover:text-slate-300 transition-colors font-medium break-all" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    info@nfsautos.com.au
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Location</div>
                  <p className="text-sm text-white font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Australia
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-xs text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
              © 2025 NFS Autos. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Motor Dealer License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;