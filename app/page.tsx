import HeroSlider from "./Components/HeroSlider"; 

import AboutHome from "./Components/AboutHome"; // fixed path to app/Components/AboutHome



export default function Home() {

  return (

    <main className="min-h-screen bg-white text-slate-900 font-sans">

      

      {/* 1. HERO SECTION */}

      <section className="relative w-full">

        <HeroSlider />

      </section>



      {/* 2. THE "TRUST TRIAD" (Inventory / Testimonials / Sold) */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 py-12 md:p-12 max-w-[1920px] mx-auto">

        

        {/* Column 1: Inventory */}

        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 bg-white">

          <h3 className="font-bold text-xl mb-6 flex items-center gap-3 font-chakra italic uppercase tracking-wide">

            <span className="w-1 h-6 bg-red-600 block"></span>

            Current Inventory

          </h3>

          <div className="flex-1 bg-slate-50 rounded-lg flex items-center justify-center h-48 border border-slate-100">

            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Inventory Slider Coming Soon...</p>

          </div>

        </div>



        {/* Column 2: Reviews */}

        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 bg-white">

           <h3 className="font-bold text-xl mb-6 flex items-center gap-3 font-chakra italic uppercase tracking-wide">

            <span className="w-1 h-6 bg-slate-800 block"></span>

            Testimonials

          </h3>

          <div className="bg-white rounded-lg flex-1 flex flex-col justify-center">

            <div className="text-yellow-500 text-lg mb-3 tracking-widest">★★★★★</div>

            <p className="italic text-slate-600 mb-6 text-base font-medium leading-relaxed">"The team at NFS Autos made importing my S15 so easy. They handled everything from compliance to delivery."</p>

            <p className="font-bold text-xs text-slate-900 uppercase tracking-widest text-right">— Alex M.</p>

          </div>

        </div>



        {/* Column 3: Sold */}

        <div className="flex flex-col h-full border border-gray-100 rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 bg-white">

          <h3 className="font-bold text-xl mb-6 flex items-center gap-3 font-chakra italic uppercase tracking-wide">

            <span className="w-1 h-6 bg-slate-400 block"></span>

            Previously Sold

          </h3>

          <div className="space-y-4">

             <div className="flex gap-4 items-center p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer group">

                 <div className="w-14 h-14 bg-slate-300 rounded overflow-hidden relative">

                    {/* Placeholder for car thumbnail */}

                 </div>

                 <div>

                   <p className="text-sm font-bold font-chakra italic uppercase text-slate-900 group-hover:text-red-600 transition-colors">Nissan Silvia S15</p>

                   <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider mt-1">● Delivered to Sydney</p>

                 </div>

             </div>

             {/* You can add more sold items here later */}

          </div>

        </div>

      </section>



      {/* 3. NEW SLEEK ABOUT SECTION */}

      {/* This sits perfectly between your grid and the footer */}

      <AboutHome />



    </main>

  );

}