'use client';

import Image from 'next/image';
import Link from 'next/link';import { Gauge, Cog, Car } from 'lucide-react';
interface CarProps {
  id: string;
  title: string;
  price: number;
  image: string;
  mileage: string;
  transmission: string;
  bodyType: string;
  weeklyPrice?: number;
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
  weeklyPrice,
  isSold = false 
}: CarProps) {
  return (
    <Link href={`/inventory/${id}`} className="group relative flex flex-col gap-3 cursor-pointer bg-white rounded-lg border border-gray-100 md:border-0 shadow-sm md:shadow-none hover:shadow-md md:hover:shadow-none transition-all duration-200 active:scale-[0.97]">
      
      {/* 1. Image - The Hero */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isSold ? 'grayscale' : ''}`}
        />
        
        {/* Minimalist Sold Badge (Only if sold) */}
        {isSold && (
          <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
             <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
               Sold
             </span>
          </div>
        )}

        {/* Premium Weekly Finance Badge - Monochrome Luxury */}
        {weeklyPrice && !isSold && (
          <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 px-2 py-1 md:px-2.5 md:py-1.5 bg-black/80 backdrop-blur-sm border border-black/20 rounded-md shadow-lg">
            <p className="text-[7px] md:text-[8px] font-medium uppercase tracking-wider text-white/60 mb-0.5">From</p>
            <p className="text-sm md:text-base font-bold text-white">
              ${weeklyPrice}<span className="text-[9px] md:text-xs font-medium text-white/90">/wk</span>
            </p>
          </div>
        )}
      </div>

      {/* 2. The Clean Details */}
      <div className="flex flex-col gap-1 px-1">
        {/* Title: Bold Condensed - Premium Typography */}
        <h3 className="font-condensed text-base font-bold text-gray-900 uppercase tracking-tight truncate">
          {title}
        </h3>

        {/* Price: The Hero (No 'Cash Price' label) */}
        <p className="text-base font-bold text-gray-900">
          ${price.toLocaleString()}
        </p>

        {/* Icon Row - Premium metadata with icons */}
        <div className="flex items-center gap-3 text-slate-500 text-sm">
          <div className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cog className="w-4 h-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-4 h-4" />
            <span>{bodyType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}