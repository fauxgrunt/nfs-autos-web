'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CarProps {
  id: string;
  title: string;
  price: number;
  image: string;
  mileage: string;
  transmission: string;
  bodyType: string;
  isSold?: boolean;
}

export default function CarCard({ 
  id, 
  title, 
  price, 
  image, 
  mileage, 
  transmission, 
  bodyType, 
  isSold = false 
}: CarProps) {
  return (
    <div className="group relative flex flex-col h-full transition-all duration-500 hover:-translate-y-1">
      
      {/* 1. GLOW EFFECT (Hidden by default, appears behind card on hover) */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-slate-200 to-slate-100 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:from-red-500/20 group-hover:to-red-500/5 transition duration-500 blur-md" />

      {/* 2. THE GLASS CARD */}
      <div className="relative flex flex-col h-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden">
        
        {/* IMAGE AREA */}
        <div className="relative aspect-[4/3] overflow-hidden w-full">
          {/* Sold Overlay */}
          {isSold && (
            <div className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center">
              <span className="text-2xl font-black italic text-white uppercase tracking-widest border-2 border-white px-6 py-2 transform -rotate-12">
                Sold
              </span>
            </div>
          )}
          
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Subtle gradient at bottom of image for depth */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
        </div>

        {/* DETAILS AREA */}
        <div className="p-5 flex flex-col flex-grow">
          
          {/* Title */}
          <h3 className="font-chakra font-black italic text-lg leading-tight text-slate-800 uppercase mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Clean Specs Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Odo</span>
                  <span className="text-xs font-bold text-slate-700">{mileage}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Trans</span>
                  <span className="text-xs font-bold text-slate-700">{transmission}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50/50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Body</span>
                  <span className="text-xs font-bold text-slate-700">{bodyType}</span>
              </div>
          </div>

          {/* Footer: Price + Ghost Button */}
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
            
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Price</p>
                <p className="text-xl font-black text-red-600 tracking-tight">
                    ${price.toLocaleString()}
                </p>
            </div>

            <Link 
                href={`/inventory/${id}`}
                className="group/btn relative overflow-hidden rounded-lg bg-transparent border border-slate-200 text-slate-900 px-5 py-2 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/20"
            >
                <span className="font-chakra font-bold italic text-sm uppercase flex items-center gap-2">
                    View
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}