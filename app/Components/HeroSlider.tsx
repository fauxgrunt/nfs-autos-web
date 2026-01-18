'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    // Slide 1: Toyota Crown - Center Aligned
    {
      id: 1,
      image: '/crown-royal.jpg',
      subtitle: 'Premium Japanese Sedans from $18,999',
      title: 'ROYAL AUTHORITY',
      primaryCtaText: 'VIEW DETAILS',
      primaryCtaLink: '/inventory/toyota-crown-athlete-2015',
      secondaryCtaText: 'VIEW INVENTORY',
      secondaryCtaLink: '/inventory',
      alignment: 'center'
    },
    // Slide 2: Lexus - Left Aligned
    {
      id: 2,
      image: '/lexus-rx.jpg',
      subtitle: 'IS250 • GS350 • Premium Imports',
      title: 'UNCOMPROMISED LUXURY',
      primaryCtaText: 'VIEW INVENTORY',
      primaryCtaLink: '/inventory',
      secondaryCtaText: 'LEARN MORE',
      secondaryCtaLink: '/import-brokerage',
      alignment: 'left'
    },
    // Slide 3: Mark X - Right Aligned
    {
      id: 3,
      image: '/mark-x.jpg',
      subtitle: 'RWD Performance Sedans from $15,500',
      title: 'STREET LEGEND',
      primaryCtaText: 'VIEW DETAILS',
      primaryCtaLink: '/inventory/toyota-mark-x-250g-2013',
      secondaryCtaText: 'VIEW INVENTORY',
      secondaryCtaLink: '/inventory',
      alignment: 'right'
    }
  ];

  // Handle user interaction - pause autoplay and set timer to resume
  const handleUserInteraction = () => {
    if (swiperRef.current?.autoplay && swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.stop();
      setIsUserInteracting(true);

      // Clear existing timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      // Resume autoplay after 3 seconds of inactivity
      inactivityTimerRef.current = setTimeout(() => {
        if (swiperRef.current?.autoplay) {
          swiperRef.current.autoplay.start();
          setIsUserInteracting(false);
        }
      }, 3000);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden bg-black">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onTouchStart={() => {
          handleUserInteraction();
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative w-full h-full flex flex-col">
              {/* Background Image with Enhanced Gradient Overlay - Absolute Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient scrim for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
              </div>

              {/* Hero Text Content - Flexible Middle Section */}
              <div className="relative flex-1 flex flex-col justify-center z-10 px-4 md:px-6 lg:px-12 py-8">
                <div className={`container mx-auto max-w-7xl w-full ${
                  slide.alignment === 'center' ? 'flex justify-center' : 
                  slide.alignment === 'right' ? 'flex justify-end' : ''
                }`}>
                  
                  {/* Main Content Card */}
                  <div className={`max-w-4xl space-y-4 md:space-y-6 w-full ${
                    slide.alignment === 'center' ? 'text-center' : 
                    slide.alignment === 'right' ? 'text-right' : 'text-left'
                  }`}>
                    
                    {/* Title with Responsive Clamp */}
                    <h1 className="font-black text-white tracking-tighter leading-[0.95] break-words" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif', fontSize: 'clamp(2rem, 8vw, 6rem)' }}>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {slide.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 ${
                      slide.alignment === 'center' ? 'justify-center' : 
                      slide.alignment === 'right' ? 'justify-end' : 'justify-start'
                    }`}>
                      <Link 
                        href={slide.primaryCtaLink}
                        className="group relative px-5 py-2.5 md:px-8 md:py-4 bg-gradient-to-b from-[#334155] to-[#0f172a] rounded-full border-t border-slate-500/30 shadow-2xl shadow-slate-900/40 hover:shadow-2xl hover:shadow-slate-900/70 hover:scale-[1.08] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 md:gap-3 cursor-pointer touch-manipulation"
                      >
                        <span className="relative z-10 text-[0.6rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                          {slide.primaryCtaText}
                        </span>
                        <ArrowRight className="relative z-10 w-3 h-3 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-blue-400/0 group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all duration-500 rounded-full"></div>
                      </Link>

                      <Link 
                        href={slide.secondaryCtaLink}
                        className="group px-5 py-2.5 md:px-8 md:py-4 backdrop-blur-md bg-white/10 border-2 border-white/10 hover:bg-white/20 hover:border-white/20 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 cursor-pointer touch-manipulation"
                      >
                        <span className="text-[0.6rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                          {slide.secondaryCtaText}
                        </span>
                        <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* STATS BAR - Fixed at Bottom */}
              <div className="relative z-20 w-full backdrop-blur-xl bg-black/40 border-t border-white/10 flex-shrink-0">
                <div className="px-4 md:px-6 lg:px-12 py-3 md:py-6 mx-auto max-w-7xl">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Stat 1: Curated Units */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-2xl md:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>4</div>
                      <div className="text-[8px] md:text-xs text-white/70 uppercase tracking-wide leading-tight whitespace-nowrap" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        CURATED<br/>UNITS
                      </div>
                    </div>
                    
                    {/* Stat 2: Satisfaction */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-2xl md:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>100%</div>
                      <div className="text-[8px] md:text-xs text-white/70 uppercase tracking-wide leading-tight whitespace-nowrap" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        SATISFACTION
                      </div>
                    </div>
                    
                    {/* Stat 3: Grade Handpicked */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-xl md:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>4.0+</div>
                      <div className="text-[8px] md:text-xs text-white/70 uppercase tracking-wide leading-tight whitespace-nowrap" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        GRADE<br/>HANDPICKED
                      </div>
                    </div>
                    
                    {/* Stat 4: Rust-Free & Pristine */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-2xl md:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>✓</div>
                      <div className="text-[8px] md:text-xs text-white/70 uppercase tracking-wide leading-tight whitespace-nowrap" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        RUST-FREE &<br/>PRISTINE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows - Premium Glassmorphism */}
      <button
        onClick={handleUserInteraction}
        className="hero-button-prev hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 p-5 lg:p-6 backdrop-blur-md bg-black/30 border border-white/20 hover:bg-black/50 hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-300 rounded-full group z-20 pointer-events-auto cursor-pointer shadow-2xl shadow-black/50"
        aria-label="Previous slide"
        style={{ appearance: 'none', outline: 'none' }}
      >
        <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
      </button>

      <button
        onClick={handleUserInteraction}
        className="hero-button-next hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 p-5 lg:p-6 backdrop-blur-md bg-black/30 border border-white/20 hover:bg-black/50 hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-300 rounded-full group z-20 pointer-events-auto cursor-pointer shadow-2xl shadow-black/50"
        aria-label="Next slide"
        style={{ appearance: 'none', outline: 'none' }}
      >
        <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
      </button>

      {/* Custom Pagination Dots */}
      <div className="hero-pagination absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 md:bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 animate-bounce z-30">
        <span className="text-xs text-white/60 uppercase tracking-widest rotate-90 origin-center mb-8">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30" />
      </div>

      <style jsx global>{`
        .hero-pagination {
          display: flex;
          gap: 12px;
        }
        .hero-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.5s;
          cursor: pointer;
          padding: 12px 8px;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 48px;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;