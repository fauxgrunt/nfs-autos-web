'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Cog, Car } from 'lucide-react';

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
      
      {/* 1. Image - Fixed Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
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

        {/* Premium Weekly Finance Badge - Top Right with Glassmorphism */}
        {weeklyPrice && !isSold && (
          <div className="absolute top-2 right-2 px-2.5 py-1.5 md:px-3 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
            <p className="text-[7px] md:text-[8px] font-medium uppercase tracking-wider text-white/90 mb-0.5">From</p>
            <p className="text-xs md:text-sm font-bold text-white">
              ${weeklyPrice}<span className="text-[8px] md:text-[10px] font-medium text-white/90">/wk</span>
            </p>
          </div>
        )}
      </div>

      {/* 2. The Clean Details */}
      <div className="flex flex-col gap-1.5 px-1">
        {/* Title: Bold Condensed with line-clamp-2 and min-height */}
        <h3 className="font-condensed text-sm md:text-base font-bold text-gray-900 uppercase tracking-tight line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        {/* Price: The Hero */}
        <p className="text-base md:text-lg font-bold text-gray-900">
          ${price.toLocaleString()}
        </p>

        {/* Icon Row - Premium metadata with flex-shrink-0 icons */}
        <div className="flex items-center gap-2 md:gap-3 text-slate-500 text-xs md:text-sm flex-wrap">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Gauge className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{mileage}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Cog className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Car className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{bodyType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}