'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Chakra_Petch } from 'next/font/google'

const chakra = Chakra_Petch({ 
  weight: '700', 
  style: 'italic', 
  subsets: ['latin'] 
})

// === CONFIGURE YOUR 5 SLIDES HERE ===
const slides = [
  {
    id: 1,
    // Toyota Crown vibe (Black, large grille, aggressive)
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1920&auto=format&fit=crop",
    title: "THE EMPEROR: TOYOTA CROWN",
    subtitle: "ATHLETE G • 3.5L V6 • SUNROOF"
  },
  {
    id: 2,
    // Mark X vibe (Sharp, silver/white, sporty sedan)
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop", 
    title: "STREET SHARK: MARK X",
    subtitle: "350S • G'S PACKAGE • RWD"
  },
  {
    id: 3,
    // Luxury Interior (VIP Style)
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1920&auto=format&fit=crop",
    title: "EXECUTIVE COMFORT",
    subtitle: "PREMIUM LEATHER • RECLINING SEATS • AMBIENT LIGHTING"
  },
  {
    id: 4,
    // Lexus/Toyota VIP Stance (Clean white sedan)
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=1920&auto=format&fit=crop",
    title: "AVAILABLE: LEXUS IS/GS",
    subtitle: "F-SPORT • HYBRID • AERO KIT"
  },
  {
    id: 5,
    // Aggressive Rear/Exhaust shot (Works for any VIP car)
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1920&auto=format&fit=crop",
    title: "DIRECT IMPORT",
    subtitle: "WE HANDLE AUCTION TO DRIVEWAY • 100% TRANSPARENCY"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-slate-900 group">
      
      {/* SLIDES CONTAINER */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
            
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-60"
                priority={index === 0} // Only load the first image instantly
                />
            </div>
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/30" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="text-center px-4 w-full max-w-5xl">
                  {/* Title: Responsive Size (Small on Mobile, Huge on Desktop) */}
                  <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 drop-shadow-2xl uppercase ${chakra.className}`}>
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-blue-300 font-mono text-sm md:text-xl font-bold tracking-widest uppercase bg-black/60 inline-block px-4 py-2 rounded backdrop-blur-sm border border-white/10">
                    {slide.subtitle}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-8">
                    <Link 
                        href="/inventory"
                        className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded transition-all hover:scale-105 shadow-lg shadow-red-600/30"
                    >
                        View Vehicle
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-red-600" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ARROW BUTTONS (Hidden on mobile, appear on hover for desktop) */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  )
}