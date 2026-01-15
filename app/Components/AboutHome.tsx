import React from 'react';
import Link from 'next/link';
import { Award, Globe, Shield, Zap, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">
        
        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: All Text Content - Order 2 Mobile, Order 1 Desktop */}
          <div className="order-2 md:order-1 space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/40" />
              <span className="text-xs font-bold text-white/70 uppercase tracking-[0.3em]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Established 2025
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                Premium JDM<br />
                <span className="text-white font-black">
                  Imports
                </span>
                <br />Perfected
              </h2>
            </div>

            {/* Body Copy - Premium Feel */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <p className="text-xl text-white/90 font-light">
                Since our importing journey began, we've assembled the <span className="text-white font-semibold">best possible team across Japan and Australia</span>, covering exclusive online auctions and private buying avenues unavailable to the general public.
              </p>
              
              <p>
                Based in <span className="text-white font-semibold">Australia</span> with trusted partners in Japan, we source and export premium Japanese auction vehicles—Crown, Mark X, Lexus—to enthusiasts who demand quality at accessible prices. Our streamlined import process delivers exceptional value without compromise.
              </p>
            </div>

            {/* Key Differentiators Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6">
              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-white mb-0.5 md:mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Quality Assured</div>
                  <div className="text-[10px] md:text-xs text-slate-300" style={{ fontFamily: 'Raleway, sans-serif' }}>Auction grade vehicles</div>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-white mb-0.5 md:mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Direct Access</div>
                  <div className="text-[10px] md:text-xs text-slate-300" style={{ fontFamily: 'Raleway, sans-serif' }}>Japan auction network</div>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-white mb-0.5 md:mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>JDM Specialists</div>
                  <div className="text-[10px] md:text-xs text-slate-300" style={{ fontFamily: 'Raleway, sans-serif' }}>Crown, Mark X, Lexus</div>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-white mb-0.5 md:mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Affordable Luxury</div>
                  <div className="text-[10px] md:text-xs text-slate-300" style={{ fontFamily: 'Raleway, sans-serif' }}>Premium under $20k</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 pb-20 md:pb-6">
              <Link href="/about" className="group relative px-8 py-4 bg-white hover:bg-slate-100 transition-all duration-300 rounded-full overflow-hidden shadow-lg inline-flex">
                <div className="relative flex items-center gap-3">
                  <span className="text-sm font-bold text-[#0f172a] uppercase tracking-widest" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                    Read Our Story
                  </span>
                  <svg className="w-5 h-5 text-[#0f172a] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Car Image - Order 1 Mobile, Order 2 Desktop */}
          <div className="order-1 md:order-2">
            <div className="relative group">
              {/* Floating Stats Card - Top Right - Desktop Only */}
              <div className="absolute -top-8 -right-8 z-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hidden md:block">
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">100%</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Compliance Ready</div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" 
                  alt="JDM Auction Vehicle"
                  className="w-full h-64 md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Auction Grade Badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-2 bg-[#0f172a] border border-white/20 rounded-lg shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                      Auction Grade 4.5
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Stats - Desktop Only */}
                <div className="absolute bottom-0 left-0 right-0 p-8 hidden md:block">
                  <div className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>50+</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Premium Stock</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Under</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>$20k AUD</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>24/7</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle White Accent - Desktop Only */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-3xl hidden md:block" />
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-base md:text-2xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Authentic</div>
              <div className="text-xs md:text-sm text-gray-400 px-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Direct from Japan auctions</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-base md:text-2xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Transparent</div>
              <div className="text-xs md:text-sm text-gray-400 px-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Full auction sheets provided</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-base md:text-2xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Student Friendly</div>
              <div className="text-xs md:text-sm text-gray-400 px-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Affordable premium imports</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-base md:text-2xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>Efficient</div>
              <div className="text-xs md:text-sm text-gray-400 px-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Streamlined delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;