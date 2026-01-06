import HeroSlider from "./Components/HeroSlider";
import CarCard from "./Components/CarCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* REMOVED NAVBAR FROM HERE (It's in layout.tsx now) */}

      {/* 1. HERO SECTION (Slider) */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        
        {/* === SECTION A: LATEST ARRIVALS (The 3 Cars) === */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-bold text-3xl md:text-4xl flex items-center gap-3">
              <span className="w-3 h-8 bg-red-600 block skew-x-[-12deg]"></span>
              LATEST ARRIVALS
            </h2>
            <Link 
              href="/inventory" 
              className="hidden md:block text-blue-900 font-bold uppercase tracking-widest text-sm hover:underline"
            >
              View All Stock →
            </Link>
          </div>

          {/* CAR GRID: Stacks on mobile, 3-across on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
             {/* CAR 1 */}
             <CarCard 
              title="Nissan Silvia S15 Spec-R"
              price="$35,000 USD"
              mileage="84,000 km"
              transmission="6-Speed Manual"
              image="https://images.unsplash.com/photo-1629897284722-c31a613f36a5?q=80&w=800&auto=format&fit=crop"
            />

            {/* CAR 2 */}
            <CarCard 
              title="Mazda RX-7 FD3S"
              price="$42,000 USD"
              mileage="62,000 km"
              transmission="5-Speed Manual"
              image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
            />

            {/* CAR 3 */}
            <CarCard 
              title="Toyota Chaser JZX100"
              price="$28,500 USD"
              mileage="105,000 km"
              transmission="Auto (Built)"
              image="https://images.unsplash.com/photo-1622190860738-5f9e7b2f0a8c?q=80&w=800&auto=format&fit=crop"
            />

          </div>

          {/* Mobile "View All" Button (Only shows on phone) */}
          <div className="mt-8 md:hidden text-center">
             <Link 
              href="/inventory"
              className="inline-block py-3 px-8 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors"
            >
                View Full Inventory
             </Link>
          </div>
        </div>


        {/* === SECTION B: TESTIMONIALS & SOLD === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
          
          {/* Testimonials */}
          <div>
            <h3 className="font-bold text-2xl mb-6 text-blue-950">Client Stories</h3>
            <div className="bg-gray-50 p-6 rounded-xl relative">
              <span className="text-4xl text-blue-200 absolute top-4 left-4">"</span>
              <p className="text-gray-600 italic mb-4 relative z-10 pt-4">
                "The team at NFS Autos made importing my S15 so easy. They handled the paperwork, shipping, and compliance. The car arrived exactly as described."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
                    {/* Placeholder Avatar */}
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Alex M." />
                 </div>
                 <div>
                    <p className="font-bold text-sm">Alex Mitchell</p>
                    <p className="text-xs text-gray-500">Sydney, Australia</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Previously Sold List */}
          <div>
             <h3 className="font-bold text-2xl mb-6 text-blue-950">Recently Sold</h3>
             <div className="space-y-4">
                
                {/* Sold Item 1 */}
                <div className="flex gap-4 items-center group cursor-pointer">
                   <div className="w-24 h-16 bg-gray-200 rounded overflow-hidden relative">
                      <img className="object-cover w-full h-full group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1610883626027-4630730335e2?q=80&w=300" alt="R34" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold border border-white px-1">SOLD</span>
                      </div>
                   </div>
                   <div>
                      <p className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">Nissan Skyline R34 GTT</p>
                      <p className="text-xs text-gray-500">Exported to USA</p>
                   </div>
                </div>

                 {/* Sold Item 2 */}
                 <div className="flex gap-4 items-center group cursor-pointer">
                   <div className="w-24 h-16 bg-gray-200 rounded overflow-hidden relative">
                      <img className="object-cover w-full h-full group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1599908638072-463e27521193?q=80&w=300" alt="Supra" />
                       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold border border-white px-1">SOLD</span>
                      </div>
                   </div>
                   <div>
                      <p className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">Toyota Supra MK4</p>
                      <p className="text-xs text-gray-500">Exported to UK</p>
                   </div>
                </div>

             </div>
             <Link href="/sold" className="block mt-6 text-sm font-bold text-blue-600 hover:text-blue-800">
                View Archive →
             </Link>
          </div>

        </div>

      </div>
    </main>
  );
}