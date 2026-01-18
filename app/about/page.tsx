'use client';

import { ShieldCheck, Globe, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Fixed Header Blending */}
      <section className="bg-slate-50 pt-56 pb-28 lg:pt-64 lg:pb-40 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-5xl text-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-tight mb-8 uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            HANDPICKED BY US,
            <br />
            ACCORDING TO YOUR TASTE.
          </h1>
          <p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            We are not just another dealership. We are curators of premium Japanese imports.
          </p>
        </div>
      </section>

      {/* Mission Section - Split Layout with Strict Typography */}
      <section className="bg-slate-50 pt-12 pb-20 lg:py-28 rounded-t-[40px] -mt-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 
                className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-6"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                OUR MISSION
              </h2>
              <div 
                className="space-y-5 text-lg text-slate-600 leading-relaxed"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                <p className="leading-relaxed">
                  We don't just sell what's on the lot. We act as your eyes on the ground in Japan, 
                  navigating auctions to find the exact make, model, and grade you require. Every import 
                  is a mission to find a vehicle worthy of our name.
                </p>
                <p className="leading-relaxed">
                  NFS Autos exists to bridge the gap between global auctions and your driveway. 
                  While we have a passion for premium Japanese sedans, our true expertise lies in <strong className="text-slate-900 font-semibold">Custom Import Brokerage</strong>. We specialize in sourcing any vehicle that meets the unique tastes and high standards of our discerning clients.
                </p>
                <p className="text-slate-900 font-bold text-xl leading-relaxed mt-8">
                  Your Vision. Our Sourcing. Total Transparency.
                </p>
              </div>
            </div>

            {/* Right Side - Image with Proper Styling */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 w-full">
              <img
                src="/cta-handover.jpg"
                alt="Keys to your premium JDM import"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars - Technical Showroom Style */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-4"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              WHY NFS AUTOS
            </h2>
            <p 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Three pillars that define how we do business
            </p>
          </div>

          {/* Values Cards - Technical Border Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Transparency */}
            <div 
              ref={(el) => { cardRefs.current[0] = el; }}
              className={`bg-white rounded-xl p-10 border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all duration-500 group ${
                visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-slate-900 uppercase mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                TRANSPARENCY
              </h3>
              <p 
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Every vehicle comes with full auction sheets, inspection reports, and service history. 
                We hide nothing — what you see is exactly what you get.
              </p>
            </div>

            {/* Card 2: Direct Import */}
            <div 
              ref={(el) => { cardRefs.current[1] = el; }}
              className={`bg-white rounded-xl p-10 border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all duration-500 group ${
                visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-slate-900 uppercase mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                DIRECT IMPORT
              </h3>
              <p 
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                We source directly from Japanese auctions and private sellers, cutting out middlemen. 
                This means better pricing and full control over vehicle selection.
              </p>
            </div>

            {/* Card 3: Quality Assurance */}
            <div 
              ref={(el) => { cardRefs.current[2] = el; }}
              className={`bg-white rounded-xl p-10 border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all duration-500 group ${
                visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-slate-900 uppercase mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                QUALITY ASSURANCE
              </h3>
              <p 
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Every car undergoes rigorous mechanical and cosmetic inspection before it reaches you. 
                We only offer vehicles we&apos;d drive ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Dark Technical Specs Bar */}
      <section className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-wrap justify-center items-center gap-16">
            
            <div className="text-center">
              <div 
                className="text-5xl lg:text-6xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                50+
              </div>
              <p 
                className="text-sm text-slate-400 uppercase tracking-wider"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Premium Cars
              </p>
            </div>

            <div className="text-center">
              <div 
                className="text-5xl lg:text-6xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                100%
              </div>
              <p 
                className="text-sm text-slate-400 uppercase tracking-wider"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Verified
              </p>
            </div>

            <div className="text-center">
              <div 
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                EST. 2025
              </div>
              <p 
                className="text-sm text-slate-400 uppercase tracking-wider"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Established
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}