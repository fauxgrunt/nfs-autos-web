import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/10 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-serif font-bold text-white mb-4">
            NFS <span className="text-amber-500">AUTOS</span>
          </div>
          <p className="text-xs leading-relaxed tracking-wide opacity-80">
            Curating the finest JDM legends and luxury imports for the discerning driver. Est 2026.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Inventory</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="/inventory" className="hover:text-amber-500 transition-colors">Latest Arrivals</Link></li>
            <li><Link href="/inventory?type=jdm" className="hover:text-amber-500 transition-colors">JDM Legends</Link></li>
            <li><Link href="/inventory?type=euro" className="hover:text-amber-500 transition-colors">Euro Luxury</Link></li>
            <li><Link href="/sell" className="hover:text-amber-500 transition-colors">Consignment</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Concierge</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="/services" className="hover:text-amber-500 transition-colors">Import Process</Link></li>
            <li><Link href="/finance" className="hover:text-amber-500 transition-colors">Financing</Link></li>
            <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Legal */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Connect</h4>
          <div className="flex gap-4 mb-6">
            <Instagram className="w-5 h-5 hover:text-amber-500 cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-amber-500 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-amber-500 cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] opacity-50 uppercase tracking-widest">
            © 2026 NFS Autos.<br />All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}