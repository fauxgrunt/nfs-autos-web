import React from 'react';
import { Star, Quote, Verified } from 'lucide-react';

const TestimonialsSection = () => {
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
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Verified Reviews
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: 'Chakra Petch, system-ui, sans-serif' }}>
            What Our Clients Say
          </h2>
          
          <p className="text-lg text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Real feedback from verified buyers. We value transparency above all else.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group relative backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Large Faded Watermark Quote */}
              <div className="absolute top-4 right-6 opacity-[0.08] pointer-events-none">
                <Quote className="w-32 h-32 text-white" strokeWidth={1} />
              </div>

              {/* Rating Stars - Gold */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Review Text - Serif Italic */}
              <p className="text-gray-300 leading-relaxed mb-8 text-base font-serif italic relative z-10" style={{ fontFamily: 'Georgia, serif' }}>
                "{testimonial.review}"
              </p>

              {/* Vehicle Details Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg mb-4 relative z-10">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {testimonial.vehicle}
                </span>
              </div>

              {/* Auction Grade - Technical Spec Tag */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10 relative z-10">
                <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Auction Grade
                </span>
                <span className="px-3 py-1 bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold rounded tracking-wider">
                  {testimonial.grade}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <Verified className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - VIP Dark Style */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 backdrop-blur-md bg-black/60 border border-white/20 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Join our satisfied clients
            </p>
            <a 
              href="/inventory"
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C5A028] text-black text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 rounded-lg"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
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