import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]">
      
      {/* Red Divider Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">NFS</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>NFS AUTOS</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Est. 2025</div>
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Handpicked by us, according to your taste. Premium JDM imports from Japan auctions. Crown, Mark X, Lexus specialists.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">Inventory</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Current Stock
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Toyota Crown
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Toyota Mark X
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Lexus Models
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Recently Sold
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Import Process
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Import Brokerage
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call Us</div>
                  <a href="tel:0499176176" className="text-sm text-white hover:text-red-500 transition-colors font-medium">
                    0499 176 176
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:info@nfsautos.com.au" className="text-sm text-white hover:text-red-500 transition-colors font-medium break-all">
                    info@nfsautos.com.au
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</div>
                  <p className="text-sm text-white font-medium">
                    Australia
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-xs text-gray-500" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              © 2025 NFS Autos. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <a href="#" className="text-xs text-gray-500 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-red-500 transition-colors">
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