'use client'

import Link from 'next/link'
import { Chakra_Petch } from 'next/font/google'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

const chakra = Chakra_Petch({ 
  weight: ['700'], 
  style: ['italic'], 
  subsets: ['latin'] 
})

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <h2 className={`text-3xl uppercase ${chakra.className}`}>
              NFS AUTOS
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Handpicked by us, according to your taste.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition">
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-700 p-2 rounded-full hover:bg-pink-600 transition">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-black border border-slate-700 p-2 rounded-full hover:border-white transition">
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: INVENTORY */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-blue-500">Inventory</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/inventory" className="hover:text-white transition">Current Stock</Link></li>
              <li><Link href="/brokerage" className="hover:text-white transition">Import Brokerage</Link></li>
              <li><Link href="/incoming" className="hover:text-white transition">Incoming Vehicles</Link></li>
              <li><Link href="/sold" className="hover:text-white transition">Sold Gallery</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-blue-500">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/financing" className="hover:text-white transition">Financing</Link></li>
              <li><Link href="/trade-in" className="hover:text-white transition">Value Your Trade</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition">Compliance & Regs</Link></li>
              <li><Link href="/detailing" className="hover:text-white transition">VIP Detailing</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-blue-500">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>1234 JDM Street, Suite 100<br/>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+880123456789" className="hover:text-white transition">+880 1234 567 89</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:sales@nfsautos.com" className="hover:text-white transition">sales@nfsautos.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} NFS AUTOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}