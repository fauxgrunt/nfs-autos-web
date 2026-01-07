import HeroSlider from "./Components/HeroSlider"; // Ensure this file exists!

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. HERO SECTION */}
      {/* Navbar is removed from here because it's already in layout.tsx */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* 2. THE "TRUST TRIAD" */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 py-8 md:p-8 max-w-7xl mx-auto">
        
        {/* Column 1: Inventory */}
        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-red-600 block"></span>
            Current Inventory
          </h3>
          <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center h-48">
            <p className="text-gray-400 text-sm">Inventory Slider Coming Soon...</p>
          </div>
        </div>

        {/* Column 2: Reviews */}
        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-4 shadow-sm">
           <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-900 block"></span>
            Testimonials
          </h3>
          <div className="bg-white p-4 rounded-lg flex-1">
            <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
            <p className="italic text-gray-600 mb-4 text-sm">"The team at NFS Autos made importing my S15 so easy. They handled everything."</p>
            <p className="font-bold text-xs text-right">- Alex M.</p>
          </div>
        </div>

        {/* Column 3: Sold */}
        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gray-800 block"></span>
            Previously Sold
          </h3>
          <div className="space-y-3">
             <div className="flex gap-3 items-center p-2 bg-gray-50 rounded">
                 <div className="w-12 h-12 bg-gray-300 rounded" />
                 <div>
                   <p className="text-sm font-bold">Nissan Silvia S15</p>
                   <p className="text-xs text-green-600 font-medium">Delivered to Sydney</p>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER REMOVED - It will now only show the main global footer from layout.tsx */}
    </main>
  );
}