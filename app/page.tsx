import HeroSlider from "./Components/HeroSlider"; 
import AboutHome from "./Components/AboutHome";
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
      image: 'https://ui-avatars.com/api/?name=Alex+Martinez&background=dc2626&color=fff&size=80'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Melbourne, VIC',
      text: 'Got my Lexus IS250 through NFS Autos. They took care of compliance, shipping, and delivery. Professional team that knows Japanese imports inside out!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=dc2626&color=fff&size=80'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Brisbane, QLD',
      text: 'Bought a Mark X 250G - couldn\'t be happier! NFS Autos found exactly what I wanted and delivered it in pristine condition. Great value for money.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=James+Wilson&background=dc2626&color=fff&size=80'
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
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* 2. PREMIUM SECTIONS - FULL WIDTH */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FEATURED INVENTORY SECTION */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Premium Selection</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Current Inventory
                </h2>
                <p className="text-slate-600 mt-2 text-lg">Handpicked by us, according to your taste</p>
              </div>
              <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors group">
                View All Stock
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Car Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car) => (
                <div key={car.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      {car.badge}
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {car.name}
                    </h3>
                    
                    {/* Specs */}
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      {car.specs.map((spec, idx) => (
                        <span key={idx}>
                          {spec}
                          {idx < car.specs.length - 1 && <span className="ml-3">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="text-2xl font-black text-slate-900">{car.price}</div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="md:hidden mt-8">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-bold text-sm uppercase tracking-wider">
                View All Stock
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* TWO COLUMN SECTION - TESTIMONIALS & SOLD CARS */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* TESTIMONIALS */}
            <section>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Client Stories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
                  What Our Clients Say
                </h2>
              </div>

              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-base">
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

              <button className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-800 font-bold text-sm uppercase tracking-wider hover:border-slate-300 hover:bg-slate-50 transition-colors group">
                Read All Reviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </section>

            {/* PREVIOUSLY SOLD */}
            <section>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Success Stories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
                  Recently Delivered
                </h2>
                <p className="text-slate-600">Dreams fulfilled across Australia</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {soldCars.map((car, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
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
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">50+</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider mt-1">Cars Sold</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">100%</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider mt-1">Satisfied</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">5★</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider mt-1">Rated</div>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors group">
                View All Sold Cars
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </section>
          </div>

        </div>
      </div>

      {/* 3. ABOUT SECTION */}
      <AboutHome />

    </main>
  );
}