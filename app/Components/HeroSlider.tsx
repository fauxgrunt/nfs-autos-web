'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80',
      title: 'TOYOTA CROWN ATHLETE',
      subtitle: 'Handpicked by us, according to your taste',
      tagline: 'RESERVE NOW',
      offer: 'Premium Japanese Sedans from $18,999',
      badge: 'NEW ARRIVAL'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80',
      title: 'LEXUS LUXURY',
      subtitle: 'Handpicked by us, according to your taste',
      tagline: 'EXPLORE NOW',
      offer: 'IS250 • GS350 • Premium Imports',
      badge: 'FEATURED'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=80',
      title: 'TOYOTA MARK X',
      subtitle: 'Handpicked by us, according to your taste',
      tagline: 'BOOK INSPECTION',
      offer: 'RWD Performance Sedans from $15,500',
      badge: 'IN STOCK'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen max-h-[800px] overflow-hidden bg-black">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content Container - NEW STRUCTURE */}
          <div className="relative h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              
              {/* Main Content Card */}
              <div className="max-w-3xl space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 animate-pulse">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-[0.65rem] md:text-xs font-bold text-white tracking-widest uppercase">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-none" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {slide.subtitle}
                </p>

                {/* Offer Box */}
                <div className="inline-block px-4 py-2 md:px-6 md:py-3 mx-2 md:mx-0 backdrop-blur-lg bg-white/20 border border-white/10 rounded-lg shadow-2xl">
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {slide.offer}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 pb-6 md:pb-0">
                  <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-b from-[#334155] to-[#0f172a] rounded-full border-t border-slate-500/30 shadow-2xl shadow-slate-900/40 hover:shadow-slate-900/60 hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 md:gap-3">
                    <span className="relative z-10 text-[0.65rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                      {slide.tagline}
                    </span>
                    <ArrowRight className="relative z-10 w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    {/* Glossy top highlight */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent rounded-full"></div>
                    {/* Diagonal sheen animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                  </button>

                  <button className="group px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-white/10 border-2 border-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center justify-center gap-2 md:gap-3">
                    <span className="text-[0.65rem] md:text-sm font-medium text-white uppercase tracking-[0.2em] md:tracking-[0.25em]" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                      View Inventory
                    </span>
                    <Play className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* STATS BAR - REPOSITIONED AS SEPARATE OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-black/40 border-t border-white/10">
              <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-6">
                <div className="flex items-center justify-start gap-12">
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
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 p-4 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-full group z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 p-4 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-full group z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-12 bg-white'
                  : 'w-2 bg-white/40 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-xs text-white/60 uppercase tracking-widest rotate-90 origin-center mb-8">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </div>
  );
};

export default HeroSection;