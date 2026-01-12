import React from 'react';
import { Award, Globe, Shield, Zap, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      
      <div className="relative container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-red-600" />
              <span className="text-xs font-bold text-red-600 uppercase tracking-[0.3em]">
                Established 2025
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Premium JDM<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Imports
                </span>
                <br />Perfected
              </h2>
            </div>

            {/* Body Copy - Premium Feel */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl text-white/90 font-light">
                Since our importing journey began, we've assembled the <span className="text-white font-semibold">best possible team across Japan and Australia</span>, covering exclusive online auctions and private buying avenues unavailable to the general public.
              </p>
              
              <p>
                Based in <span className="text-white font-semibold">Australia</span> with trusted partners in Japan, we source and export premium Japanese auction vehicles—Crown, Mark X, Lexus—to enthusiasts who demand quality at accessible prices. Our streamlined import process delivers exceptional value without compromise.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">Quality Assured</div>
                  <div className="text-xs text-gray-400">Auction grade vehicles</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">Direct Access</div>
                  <div className="text-xs text-gray-400">Japan auction network</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">JDM Specialists</div>
                  <div className="text-xs text-gray-400">Crown, Mark X, Lexus</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">Affordable Luxury</div>
                  <div className="text-xs text-gray-400">Premium under $20k</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="text-sm font-bold text-white uppercase tracking-widest">
                    Read Our Story
                  </span>
                  <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Visual Experience - JDM AUCTION STYLE */}
          <div className="relative">
            
            {/* Main Image Card */}
            <div className="relative group">
              {/* Floating Stats Card - Top Right */}
              <div className="absolute -top-8 -right-8 z-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">100%</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Compliance Ready</div>
                </div>
              </div>

              {/* Main Image - TOYOTA CROWN / MARK X STYLE */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" 
                  alt="JDM Auction Vehicle"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Auction Grade Badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-2 bg-red-600 rounded-lg shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Auction Grade 4.5
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-3xl font-black text-white mb-1">50+</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">Premium Stock</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white mb-1">Under</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">$20k AUD</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white mb-1">24/7</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red Glow Accent */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
            </div>

            {/* Secondary Image - JDM SEDAN DETAIL */}
            <div className="absolute -bottom-12 -left-12 w-64 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-black z-10 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1552519507-04da22cb3711?w=400&q=80" 
                alt="JDM Interior Detail"
                className="w-full h-full object-cover"
              />
              {/* Auction Sheet Style Overlay */}
              <div className="absolute top-3 left-3">
                <div className="px-3 py-1 bg-black/80 rounded">
                  <span className="text-xs font-bold text-red-500 uppercase">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-600/30">
                <CheckCircle className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-2xl font-black text-white mb-2">Authentic</div>
              <div className="text-sm text-gray-400">Direct from Japan auctions</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-600/30">
                <TrendingUp className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-2xl font-black text-white mb-2">Transparent</div>
              <div className="text-sm text-gray-400">Full auction sheets provided</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-600/30">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-2xl font-black text-white mb-2">Student Friendly</div>
              <div className="text-sm text-gray-400">Affordable premium imports</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-600/30">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-2xl font-black text-white mb-2">Efficient</div>
              <div className="text-sm text-gray-400">Streamlined delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;