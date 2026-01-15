import HeroSlider from "./Components/HeroSlider"; 
import AboutHome from "./Components/AboutHome";
import InventoryCarousel from "./Components/InventoryCarousel";
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Calendar, ChevronRight, TrendingUp, Award, Shield } from 'lucide-react';

export default function Home() {

  // Featured cars data - REALISTIC INVENTORY
  const featuredCars = [
    {
      id: 1,
      name: '2015 Toyota Crown Athlete',
      price: '$18,999',
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
      badge: 'Just Arrived',
      specs: ['Auto', 'V6 3.5L', '65K km']
    },
    {
      id: 2,
      name: '2013 Toyota Mark X 250G',
      price: '$15,500',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      badge: 'Available Now',
      specs: ['RWD', '2.5L', '72K km']
    },
    {
      id: 3,
      name: '2016 Lexus IS250 F-Sport',
      price: '$22,900',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      badge: 'Premium',
      specs: ['Auto', '2.5L V6', '58K km']
    }
  ];

  // Testimonials data - REALISTIC FOR YOUR BUSINESS
  const testimonials = [
    {
      id: 1,
      name: 'Alex Martinez',
      role: 'Sydney, NSW',
      text: 'NFS Autos helped me import a beautiful Toyota Crown Athlete from Japan. The entire process was smooth and transparent. Highly recommend their service!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Alex+Martinez&background=0f172a&color=fff&size=80'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Melbourne, VIC',
      text: 'Got my Lexus IS250 through NFS Autos. They took care of compliance, shipping, and delivery. Professional team that knows Japanese imports inside out!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=0f172a&color=fff&size=80'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Brisbane, QLD',
      text: 'Bought a Mark X 250G - couldn\'t be happier! NFS Autos found exactly what I wanted and delivered it in pristine condition. Great value for money.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=James+Wilson&background=0f172a&color=fff&size=80'
    }
  ];

  // Sold cars data - REALISTIC VEHICLES YOU ACTUALLY SELL
  const soldCars = [
    { name: 'Toyota Crown Athlete', location: 'Sydney', date: 'Jan 2025', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80' },
    { name: 'Lexus GS350', location: 'Melbourne', date: 'Jan 2025', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80' },
    { name: 'Toyota Mark X 350S', location: 'Perth', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80' },
    { name: 'Lexus IS250', location: 'Brisbane', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&q=80' }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans w-full overflow-x-hidden pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* 2. PREMIUM SECTIONS - FULL WIDTH */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* FEATURED INVENTORY SECTION */}
          <InventoryCarousel cars={featuredCars} />

          {/* TWO COLUMN SECTION - TESTIMONIALS & SOLD CARS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* TESTIMONIALS */}
            <section className="flex flex-col justify-between h-full">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-12 bg-[#0f172a]"></div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-widest" style={{ fontFamily: 'Raleway, sans-serif' }}>Client Stories</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                    What Our Clients Say
                  </h2>
                </div>

                <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0f172a]">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              <Link 
                href="/testimonials"
                className="mt-8 relative w-full px-8 py-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden antialiased group/btn flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                <span className="relative z-10">Read All Reviews</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
              </Link>
            </section>

            {/* PREVIOUSLY SOLD */}
            <section className="flex flex-col justify-between h-full">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-12 bg-[#0f172a]"></div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-widest" style={{ fontFamily: 'Raleway, sans-serif' }}>Success Stories</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                    Recently Delivered
                  </h2>
                  <p className="text-slate-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Dreams fulfilled across Australia</p>
                </div>

                {/* Horizontal Carousel on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 mb-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
                {soldCars.map((car, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex-shrink-0 w-[90vw] md:w-auto snap-center">
                    <div className="aspect-square relative">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="font-bold text-sm mb-1">{car.name}</div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {car.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {car.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center divide-x divide-slate-200">
                  <div>
                    <div className="flex items-center justify-center mb-1 md:mb-2">
                      <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#0f172a]" />
                    </div>
                    <div className="text-xl md:text-2xl font-black text-slate-900" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>50+</div>
                    <div className="text-[10px] md:text-xs text-slate-600 uppercase tracking-wider mt-0.5 md:mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Cars Sold</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1 md:mb-2">
                      <Award className="w-4 h-4 md:w-6 md:h-6 text-[#0f172a]" />
                    </div>
                    <div className="text-xl md:text-2xl font-black text-slate-900" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>100%</div>
                    <div className="text-[10px] md:text-xs text-slate-600 uppercase tracking-wider mt-0.5 md:mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Satisfied</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1 md:mb-2">
                      <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#0f172a]" />
                    </div>
                    <div className="text-xl md:text-2xl font-black text-slate-900" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>5★</div>
                    <div className="text-[10px] md:text-xs text-slate-600 uppercase tracking-wider mt-0.5 md:mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Rated</div>
                  </div>
                </div>
              </div>
            </div>

              <Link 
                href="/recently-sold"
                className="mt-8 relative w-full px-8 py-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden antialiased group/btn flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                <span className="relative z-10">View All Sold Cars</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
              </Link>
            </section>
          </div>

        </div>
      </div>

      {/* 3. ABOUT SECTION */}
      <AboutHome />

    </main>
  );
}