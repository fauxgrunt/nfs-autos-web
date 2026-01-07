'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Chakra_Petch } from 'next/font/google'

// Configure the font
const chakra = Chakra_Petch({ 
  weight: ['700'], 
  style: ['italic'], 
  subsets: ['latin'] 
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50 h-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* === LEFT SIDE: LOGO & BRAND === */}
          <div className="flex items-center gap-4 flex-shrink-0 cursor-pointer">
            <Link href="/" className="relative w-16 h-16 flex-shrink-0">
               {/* IMPORTANT: This image must be a TRANSPARENT PNG (no white corners).
                  If it has white corners, it will look like a box.
               */}
               <Image 
                  src="/logo.png" 
                  alt="NFS Autos" 
                  fill
                  className="object-contain"
                  priority 
               />
            </Link>
            
            <Link href="/">
              <span className={`text-2xl md:text-3xl text-blue-950 block ${chakra.className} leading-none`}>
                NFS AUTOS
              </span>
            </Link>
          </div>

          {/* === RIGHT SIDE: DESKTOP MENU === */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-slate-600 hover:text-blue-900 font-bold text-xs uppercase tracking-widest transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            
          </div>

          {/* === MOBILE MENU BUTTON === */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-800 hover:text-blue-900 focus:outline-none p-2"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE MENU DRAWER === */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-blue-900 hover:bg-slate-50"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-4 text-white bg-blue-900 font-bold uppercase tracking-widest rounded shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}