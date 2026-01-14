'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, Verified } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Marcus Chen",
      location: "Sydney, NSW",
      vehicle: "2015 Toyota Crown Athlete",
      grade: "4.5",
      rating: 5,
      review: "Absolutely blown away by the condition of my Crown Athlete. The auction grade was spot-on—interior is pristine, and the hybrid system drives like a dream. NFS guided me through every step of the import process. No hidden costs, just pure transparency. This is how JDM imports should be done.",
      date: "December 2024",
      verified: true
    },
    {
      id: 2,
      name: "David Thompson",
      location: "Melbourne, VIC",
      vehicle: "2013 Lexus GS350",
      grade: "4.0",
      rating: 5,
      review: "I was skeptical about importing, but the team at NFS made it seamless. My GS350 arrived exactly as described from the auction sheets—no surprises. The V6 purrs, and the build quality is exceptional. For under $20k, this is unbeatable value. Highly recommend to any JDM enthusiast.",
      date: "November 2024",
      verified: true
    },
    {
      id: 3,
      name: "Jake Sullivan",
      location: "Brisbane, QLD",
      vehicle: "2012 Toyota Mark X 350S",
      grade: "4.0",
      rating: 5,
      review: "Finally got my hands on a Mark X and it's everything I hoped for. RWD, naturally aspirated V6, and that signature Japanese build quality. NFS found me exactly what I was looking for at auction. Communication was excellent throughout, and the compliance process was smooth. Worth every cent.",
      date: "January 2025",
      verified: true
    }
  ];

  // Track active testimonial on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85 + 16; // 85vw + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  return (
    <section className="relative bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Verified className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] font-display font-black text-[#D4AF37] uppercase tracking-[0.25em]">
              VERIFIED REVIEWS
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 uppercase tracking-tight leading-[0.9]">
            WHAT OUR<br />CLIENTS SAY
          </h2>
          
          <p className="text-base text-gray-400 font-body tracking-wide">
            Real feedback from verified buyers. We value transparency above all else.
          </p>
        </div>

        {/* Testimonials Scroll Container with Fade Gradient */}
        <div className="relative">
          {/* Right Edge Fade Gradient (Mobile Only) */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10 md:hidden" />
          
          {/* Testimonials Grid */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 w-full scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:px-0"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-[85vw] md:w-auto flex-shrink-0 snap-center group relative backdrop-blur-md bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
              {/* Large Faded Watermark Quote */}
              <div className="absolute top-4 right-6 opacity-[0.08] pointer-events-none">
                <Quote className="w-32 h-32 text-white" strokeWidth={1} />
              </div>

              {/* Rating Stars - Refined Luxury */}
              <div className="flex items-center gap-1.5 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Review Text - Premium Readable */}
              <p className="text-gray-300 leading-[1.75] mb-8 text-[15px] font-body relative z-10">
                "{testimonial.review}"
              </p>

              {/* Vehicle Details Badge - Refined JDM Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-black/50 border border-[#D4AF37]/20 rounded mb-4 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-display font-semibold text-white uppercase tracking-wider">
                  {testimonial.vehicle}
                </span>
              </div>

              {/* Auction Grade - Elegant Technical Display */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10 relative z-10">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-display font-semibold">
                  GRADE
                </span>
                <span className="px-3 py-1.5 bg-black/70 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-mono font-bold rounded tracking-wide">
                  {testimonial.grade}
                </span>
              </div>

              {/* Customer Info - Premium Client Card */}
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display font-bold text-white text-[13px] uppercase tracking-wide">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <Verified className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 font-body tracking-wide">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wide">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const cardWidth = container.offsetWidth * 0.85 + 16;
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA - Sophisticated Luxury */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-5 px-10 py-8 backdrop-blur-md bg-black/70 border border-white/20 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-white font-display font-semibold text-lg uppercase tracking-wider">
              Join Our Satisfied Clients
            </p>
            <a 
              href="/inventory"
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black text-sm font-display font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 rounded-lg hover:scale-[1.02]"
            >
              Browse Premium Stock
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;