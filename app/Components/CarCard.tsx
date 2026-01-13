'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    <Link href={`/inventory/${id}`} className="group relative flex flex-col gap-3 cursor-pointer bg-white">
      
      {/* 1. Image - The Hero */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
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

        {/* Premium Weekly Finance Badge */}
        {weeklyPrice && !isSold && (
          <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-md shadow-sm">
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">From</p>
            <p className="text-xs md:text-sm font-bold text-red-700">
              ${weeklyPrice}<span className="text-[10px] md:text-xs">/WK</span>
            </p>
          </div>
        )}
      </div>

      {/* 2. The Clean Details */}
      <div className="flex flex-col gap-1 px-1">
        {/* Title: Sentence Case, Medium Weight */}
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {title}
        </h3>

        {/* Price: The Hero (No 'Cash Price' label) */}
        <p className="text-base font-semibold text-gray-900">
          ${price.toLocaleString()}
        </p>

        {/* Specs: Single Elegant Line */}
        <p className="text-xs text-gray-500 flex items-center gap-1.5">
          <span>{mileage}</span>
          <span className="text-gray-300">•</span>
          <span>{transmission}</span>
          <span className="text-gray-300">•</span>
          <span>{bodyType}</span>
        </p>
      </div>
    </Link>
  );
}