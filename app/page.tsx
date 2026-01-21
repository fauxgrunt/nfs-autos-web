'use client';
import HeroSlider from "./Components/HeroSlider"; 
import AboutHome from "./Components/AboutHome";
import InventoryCarousel from "./Components/InventoryCarousel";
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Calendar, ChevronRight, TrendingUp, Award, Shield, ChevronLeft } from 'lucide-react';

export default function Home() {

  // Sourcing examples data - COMPLIANT WITH SOURCING AGENT MODEL
  const sourcingExamples = [
    {
      id: 1,
      make: "Lexus",
      model: "LS460 Version S",
      year: "2006",
      mileage: "87,160 km",
      transmission: "Automatic (8-Speed)",
      fuel: "Petrol",
      color: "Pearl White",
      grade: "4.0",
      estLandedCost: "$16,490",
      status: "Auction Opportunity",
      image: "/inventory/2026/January/headers/lexus-ls460.png"
    },
    {
      id: 2,
      make: "Toyota",
      model: "Mark X 250G S-Package",
      year: "2008",
      mileage: "50,541 km",
      transmission: "Automatic (6-Speed)",
      fuel: "Petrol",
      color: "Pearl White",
      grade: "3.5",
      estLandedCost: "$12,490",
      status: "Available Now",
      badges: ["P-Plate Legal", "252HP V6", "Factory LSD"],
      features: [
        "TEMS Suspension Control",
        "Radar Cruise Control",
        "Rear Auto Shade",
        "Factory Navigation & Reverse Camera",
        "AFS Xenon Lights",
        "Auto Reverse Park",
        "Includes Compliance & Blue Slip"
      ],
      gallery: [
        "/inventory/2026/January/headers/markx-2008.png",
        "/inventory/2026/January/mark-x-2008-01.jpg",
        "/inventory/2026/January/mark-x-2008-02.jpg",
        "/inventory/2026/January/mark-x-2008-03.jpg",
        "/inventory/2026/January/mark-x-2008-04.jpg",
        "/inventory/2026/January/mark-x-2008-05.jpg",
        "/inventory/2026/January/mark-x-2008-06.jpg",
        "/inventory/2026/January/mark-x-2008-07.jpg"
      ],
      image: "/inventory/2026/January/headers/markx-2008.png"
    },
    {
      id: 3,
      make: "Toyota",
      model: "Mark X",
      year: "2004",
      mileage: "33,581 km",
      transmission: "Automatic (6-Speed)",
      fuel: "Petrol",
      color: "Silver",
      grade: "4.0",
      estLandedCost: "$13,290",
      status: "Auction Opportunity",
      image: "/inventory/2026/January/headers/markx-2004.png"
    },
    {
      id: 4,
      make: "Toyota",
      model: "Mark X",
      year: "2005",
      mileage: "130,952 km",
      transmission: "Automatic (6-Speed)",
      fuel: "Petrol",
      color: "Silver",
      grade: "3.5",
      estLandedCost: "Enquire for Quote",
      status: "Budget Sourcing",
      image: "/inventory/2026/January/headers/markx-2005.png"
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
    { name: 'Toyota Crown Athlete', location: 'Sydney, NSW', date: 'Grade 4.5 Import', image: '/delivered/crown-owner.jpg' },
    { name: 'Lexus GS350', location: 'Melbourne, VIC', date: 'Black Line Edition', image: '/delivered/gs350-city.jpg' },
    { name: 'Toyota Mark X 350S', location: 'Perth, WA', date: 'Custom Widebody Source', image: '/delivered/markx-street.jpg' },
    { name: 'Lexus IS250', location: 'Brisbane, QLD', date: 'Showroom Condition', image: '/delivered/is250-rear.jpg' }
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
          
          {/* SOURCING OPPORTUNITIES SECTION */}
          <InventoryCarousel cars={sourcingExamples} />

          {/* TWO COLUMN SECTION - TESTIMONIALS & RECENTLY DELIVERED */}
          <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-8">
            
            {/* TESTIMONIALS */}
            <div className="flex-1">
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

            {/* RECENTLY DELIVERED - HIGH FIDELITY PREMIUM GALLERY */}
            <div className="flex-1 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-[#0f172a]"></div>
                  <span className="text-sm font-bold text-slate-600 uppercase tracking-widest" style={{ fontFamily: 'Raleway, sans-serif' }}>Success Stories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-2" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                  Recently Delivered
                </h2>
                <p className="text-slate-600 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Dreams fulfilled across Australia</p>
              </div>

              {/* Premium Grid Layout - 2x2 Grid - Fills to match testimonials */}
              <div className="grid grid-cols-2 gap-4 h-full flex-grow">
                {soldCars.map((car, idx) => (
                  <Link 
                    key={idx} 
                    href="/recently-sold" 
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative flex-1 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      
                      {/* Boutique DELIVERED Badge - Top Right */}
                      <div className="absolute top-2 right-2 px-2.5 py-1.5 bg-black/60 backdrop-blur-sm rounded border border-white/20">
                        <span className="text-white text-[10px] font-semibold uppercase tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>Delivered</span>
                      </div>
                    </div>

                    {/* Premium Details Section */}
                    <div className="p-3 border-t border-slate-100">
                      {/* Car Model Name */}
                      <h3 className="font-bold text-xs text-[#0f172a] mb-2.5 line-clamp-2 leading-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                        {car.name}
                      </h3>
                      
                      {/* Metadata - Grade & Location */}
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Award className="w-3 h-3 text-[#0f172a] flex-shrink-0" />
                          <span className="font-medium text-slate-900">{car.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <MapPin className="w-3 h-3 text-[#0f172a] flex-shrink-0" />
                          <span className="font-medium text-slate-900">{car.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* BUTTON ROW - BELOW COLUMNS */}
          <div className="flex flex-col lg:flex-row gap-12">
            <Link 
              href="/testimonials"
              className="w-full relative px-8 py-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden antialiased group/btn flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              <span className="relative z-10">Read All Reviews</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
            </Link>

            <Link 
              href="/recently-sold"
              className="w-full relative px-8 py-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white text-xs font-medium uppercase tracking-[0.25em] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden antialiased group/btn flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              <span className="relative z-10">View All Sold Cars</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. ABOUT SECTION */}
      <AboutHome />

    </main>
  );
}