import React from 'react';
import Link from 'next/link';
import { Award, Shield, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 py-10 lg:py-24 xl:py-32 max-w-7xl">
        
        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-slate-300" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Quality Standards
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                We don't just import cars.{' '}
                <span className="text-slate-900 font-black">
                  We import standards.
                </span>
              </h2>
            </div>

            {/* Body Copy */}
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <p className="text-xl text-slate-800 font-normal">
                Every vehicle we source undergoes rigorous interior inspection. We personally check the <span className="text-slate-900 font-semibold">driver's seat condition</span>, ensure there are <span className="text-slate-900 font-semibold">no smoke smells</span>, and verify dashboards are free from sticky residue or sun damage.
              </p>
              
              <p className="text-base">
                Your comfort matters. We refuse to settle for anything less than pristine interiors that look and feel like new. Our standards guarantee you receive a vehicle you'll be proud to own.
              </p>
            </div>

            {/* Key Quality Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Grade 4.5+ Only</div>
                  <div className="text-sm text-slate-600" style={{ fontFamily: 'Raleway, sans-serif' }}>We exclusively source auction grade 4.5 or higher vehicles with verified condition reports</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Interior Guarantee</div>
                  <div className="text-sm text-slate-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Every interior passes our strict inspection: clean seats, fresh smell, and pristine dashboard</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link href="/about" className="group relative px-8 py-4 bg-slate-900 hover:bg-slate-800 transition-all duration-300 rounded-full overflow-hidden shadow-lg inline-flex">
                <div className="relative flex items-center gap-3">
                  <span className="text-sm font-bold text-white uppercase tracking-widest" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                    Our Quality Process
                  </span>
                  <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Quality Image */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-interior.jpg" 
                  alt="Premium Interior Quality"
                  className="w-full h-[300px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge - Bottom Left on desktop, static on mobile */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                  <div className="px-4 py-2 md:px-6 md:py-3 bg-white border border-slate-200 rounded-xl shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                      <span className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wider" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                        100% Verified Interior
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;