import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHome() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="flex flex-col gap-10">
            
            {/* The Header Group */}
            <div className="flex flex-col gap-2">
              {/* ✨ THE LOOK: Thin, Large, Elegant */}
              <h2 className="text-6xl md:text-8xl font-header font-extralight text-slate-900 leading-[1] tracking-tight">
                About Us
              </h2>
              
              {/* Refined Red Line (Thinner to match text) */}
              <div className="h-[2px] w-24 bg-red-600 mt-4"></div>
            </div>

            {/* Body Text: Clean and legible */}
            <div className="flex flex-col gap-6 text-slate-500 font-sans text-lg leading-relaxed font-light">
              <p>
                Since our importing journey began, we have managed to assemble the best possible team 
                across Japan and the UK, covering exclusive auctions and private buying avenues 
                unavailable to the general public.
              </p>
              
              <p>
                With offices based in <strong className="text-slate-900 font-medium">Tokyo & Sydney</strong>, we source and export cars to enthusiasts 
                who demand perfection. 
              </p>
            </div>

            {/* Minimalist Link */}
            <div className="pt-6">
              <Link 
                href="/about"
                className="group inline-flex items-center gap-3 text-slate-900 font-header font-normal text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                Read Our Story 
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                   <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

          </div>

          {/* RIGHT: HERO IMAGE */}
          <div className="relative h-[500px] w-full group">
            <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image 
                  src="/about-hero.jpg" 
                  alt="NFS Autos Garage"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>
            
            {/* Minimalist Badge */}
            <div className="absolute -bottom-6 left-8 bg-white p-6 shadow-xl border-t border-red-600 z-10 hidden md:block">
               <p className="text-4xl font-header font-thin text-slate-900">100%</p>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Compliance Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}