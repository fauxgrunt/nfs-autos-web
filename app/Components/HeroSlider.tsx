'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function HeroSlider() {
  // 1. Setup Embla with Autoplay
  // delay: 4000 = Slides every 4 seconds
  // stopOnInteraction: true = Stops auto-sliding once the user touches it (so they can read)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  ])

  // 2. State for the "Dots"
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // 3. Update the dots when the slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // 4. Initialize the dots
  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect() // Run once on load
  }, [emblaApi, onSelect])

  // 5. Allow clicking a dot to jump to that slide
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <div className="relative w-full h-[60vh] bg-slate-900 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {/* SLIDE 1 */}
        <div className="relative flex-[0_0_100%] min-w-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center text-white">
                <div className="text-center px-4 w-full"> {/* Added w-full */}
                  {/* CHANGED: text-3xl for mobile, text-5xl for small, text-6xl for PC */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-2 break-words">
                    INCOMING: SILVIA S15
                  </h1>
                  <p className="text-blue-400 font-mono text-sm md:text-base">
                    GRADE 4 • TURBO • MANUAL
                  </p>
                </div>
            </div>
        </div>

        {/* SLIDE 2 */}
        <div className="relative flex-[0_0_100%] min-w-0">
             <div className="absolute inset-0 bg-blue-900 flex items-center justify-center text-white">
                <div className="text-center px-4 w-full">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-2 break-words">DIRECT FROM JAPAN</h1>
                  <p className="text-white/70 font-mono text-sm md:text-base">NO MIDDLEMAN • WHOLESALE RATES</p>
                </div>
            </div>
        </div>

        {/* SLIDE 3 */}
         <div className="relative flex-[0_0_100%] min-w-0">
             <div className="absolute inset-0 bg-red-900 flex items-center justify-center text-white">
                <div className="text-center px-4 w-full">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-2 break-words">RESERVE NOW</h1>
                  <p className="text-white/80 font-mono text-sm md:text-base">SAVE $1,000 BEFORE IT LANDS</p>
                </div>
            </div>
        </div>
      </div>

      {/* THE DOTS (o o o) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-white scale-110'   // Active Dot (White & Big)
                : 'bg-white/30 hover:bg-white/50' // Inactive Dot (Transparent)
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Persistent Text Overlay (Bottom Left) */}
      <div className="absolute bottom-10 left-6 z-10 pointer-events-none hidden md:block">
        <p className="text-white/80 text-xs font-mono mb-1">NFS AUTOS • EST 2026</p>
        <h2 className="text-white text-2xl font-bold italic">DRIVE THE LEGEND.</h2>
      </div>
    </div>
  )
}