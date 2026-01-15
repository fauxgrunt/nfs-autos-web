'use client';
import React, { useRef } from 'react';
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

  const slides = [
    // Slide 1: Service / Brokerage Focus
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80',
      subtitle: 'IS250 • GS350 • Premium Imports',
      title: 'PREMIUM JDM SEDANS',
      primaryCtaText: 'EXPLORE NOW',
      primaryCtaLink: '/import-brokerage',
      secondaryCtaText: 'VIEW INVENTORY',
      secondaryCtaLink: '/inventory'
    },
    // Slide 2: High-End Inventory Focus (The Crown)
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80',
      subtitle: 'Premium Japanese Sedans from $18,999',
      title: '2015 TOYOTA CROWN',
      primaryCtaText: 'RESERVE NOW',
      primaryCtaLink: '/inventory/toyota-crown-athlete-2015',
      secondaryCtaText: 'VIEW INVENTORY',
      secondaryCtaLink: '/inventory'
    },
    // Slide 3: Performance/Value Focus (The Mark X)
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80',
      subtitle: 'RWD Performance Sedans from $15,500',
      title: 'TOYOTA MARK X',
      primaryCtaText: 'BOOK INSPECTION',
      primaryCtaLink: '/inventory/toyota-mark-x-250g-2013',
      secondaryCtaText: 'VIEW INVENTORY',
      secondaryCtaLink: '/inventory'
    }
  ];

  return (
    <div className="relative w-full h-screen max-h-[800px] overflow-hidden bg-black">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
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
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-center pointer-events-none w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl w-full">
                  
                  {/* Main Content Card */}
                  <div className="max-w-3xl space-y-6 pointer-events-auto w-full">
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-none break-words" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide break-words" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {slide.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 md:gap-4 pt-4 pb-6 md:pb-0 relative z-30">
                      <Link 
                        href={slide.primaryCtaLink}
                        className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-b from-[#334155] to-[#0f172a] rounded-full border-t border-slate-500/30 shadow-2xl shadow-slate-900/40 hover:shadow-2xl hover:shadow-slate-900/70 hover:scale-[1.08] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
                      >
                        <span className="relative z-10 text-[0.65rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                          {slide.primaryCtaText}
                        </span>
                        <ArrowRight className="relative z-10 w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-blue-400/0 group-hover:from-blue-500/20 group-hover:to-blue-400/10 transition-all duration-500 rounded-full"></div>
                      </Link>

                      <Link 
                        href={slide.secondaryCtaLink}
                        className="group px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-white/10 border-2 border-white/10 hover:bg-white/20 hover:border-white/20 rounded-full transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
                      >
                        <span className="text-[0.65rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                          {slide.secondaryCtaText}
                        </span>
                        <Play className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* STATS BAR */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-black/40 border-t border-white/10 pointer-events-auto w-full">
                  <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl py-6 w-full">
                    <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-12 overflow-x-auto">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>50+</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          Premium<br/>Cars
                        </div>
                      </div>
                      
                      <div className="w-px h-12 bg-white/10" />
                      
                      <div className="flex items-center gap-3">
                        <div className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>100%</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          Verified<br/>Imports
                        </div>
                      </div>
                      
                      <div className="w-px h-12 bg-white/10" />
                      
                      <div className="flex items-center gap-3">
                        <div className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>5★</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          Customer<br/>Rated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="hero-button-prev hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 p-4 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-full group z-20 pointer-events-auto cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        className="hero-button-next hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 p-4 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-full group z-20 pointer-events-auto cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Custom Pagination Dots */}
      <div className="hero-pagination absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 pointer-events-auto"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 animate-bounce z-20">
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