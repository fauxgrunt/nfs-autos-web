'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
  specs: string[];
}

interface InventoryCarouselProps {
  cars: Car[];
}

export default function InventoryCarousel({ cars }: InventoryCarouselProps) {
  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('inventory-carousel');
    if (carousel) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-12 bg-[#0f172a]"></div>
            <span className="text-sm font-bold text-[#0f172a] uppercase tracking-widest" style={{ fontFamily: 'Raleway, sans-serif' }}>Premium Selection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
            Current Inventory
          </h2>
          <p className="text-slate-600 mt-2 text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Handpicked by us, according to your taste</p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {/* Carousel Navigation Arrows */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="w-12 h-12 bg-white border-2 border-[#0f172a] hover:bg-[#0f172a] hover:-translate-y-1 transition-all duration-300 rounded-full group flex items-center justify-center"
            aria-label="Previous cars"
          >
            <ChevronLeft className="w-5 h-5 text-[#0f172a] group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
          </button>
          <button 
            onClick={() => scrollCarousel('right')}
            className="w-12 h-12 bg-white border-2 border-[#0f172a] hover:bg-[#0f172a] hover:-translate-y-1 transition-all duration-300 rounded-full group flex items-center justify-center"
            aria-label="Next cars"
          >
            <ChevronRight className="w-5 h-5 text-[#0f172a] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>
          {/* View All Button with Sheen */}
          <Link 
            href="/inventory"
            className="relative px-8 py-3 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full border-t border-slate-600/30 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden antialiased group/btn flex items-center gap-2"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            <span className="relative z-10">View All Stock</span>
            <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            {/* Glossy top highlight */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent rounded-full"></div>
            {/* Diagonal sheen animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
          </Link>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div 
        id="inventory-carousel"
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cars.map((car) => (
          <Link 
            key={car.id} 
            href={`/inventory/${car.id}`}
            className="group flex-shrink-0 w-[340px] md:w-[380px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 snap-start"
          >
            
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Badge - Navy Pill */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-[#0f172a] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {car.badge}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-[#0f172a] transition-colors" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                {car.name}
              </h3>
              
              {/* Specs */}
              <div className="flex items-center gap-3 mb-4 text-sm text-slate-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {car.specs.map((spec, idx) => (
                  <span key={idx}>
                    {spec}
                    {idx < car.specs.length - 1 && <span className="ml-3">•</span>}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-2xl font-black text-slate-900" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>{car.price}</div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0f172a] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden mt-8">
        <Link 
          href="/inventory"
          className="relative w-full px-8 py-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden antialiased group/btn flex items-center justify-center gap-2"
          style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
        >
          <span className="relative z-10">View All Stock</span>
          <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
        </Link>
      </div>
    </section>
  );
}
