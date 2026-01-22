'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Gauge, Cog, ChevronLeft, ChevronRight } from 'lucide-react';

interface CarProps {
  id: string;
  title: string;
  estLandedCost: string;
  image: string;
  mileage: string;
  transmission: string;
  grade: string;
  gallery?: string[];
  isSold?: boolean;
  year?: number;
  make?: string;
  model?: string;
}

export default function CarCard({ 
  id, 
  title, 
  estLandedCost, 
  image, 
  mileage, 
  transmission, 
  grade, 
  gallery,
  isSold = false,
  year,
  make,
  model
}: CarProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const galleryLength = Array.isArray(gallery) ? gallery.length : 0;
  const hasGallery = galleryLength > 1;
  const currentImage = galleryLength > 0 && gallery ? gallery[imgIndex % galleryLength] : image;

  return (
    <Link href={`/inventory/${id}`} className="group relative flex flex-col gap-3 cursor-pointer bg-white rounded-lg border border-gray-100 md:border-0 shadow-sm md:shadow-none hover:shadow-md md:hover:shadow-none transition-all duration-200 active:scale-[0.97]">
        
        {/* 1. Image - Fixed Aspect Ratio */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={currentImage}
              alt={title}
              fill
              className={`object-contain object-center ${isSold ? 'grayscale' : ''}`}
            />
          
            {hasGallery && (
              <>
                <button
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/75 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImgIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/75 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImgIndex((prev) => (prev + 1) % galleryLength);
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
            
            {/* Minimalist Sold Badge (Only if sold) */}
            {isSold && (
              <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
                <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Sold
                </span>
              </div>
            )}
          </div>

        {/* 2. The Clean Details */}
        <div className="flex flex-col gap-1.5 px-1">
          {/* Title: Bold Condensed with line-clamp-2 and min-height */}
          <h3 className="font-condensed text-sm md:text-base font-bold text-gray-900 uppercase tracking-tight line-clamp-2 min-h-[3rem]">
            {title}
          </h3>

          {/* Est. Landed Cost Label */}
          <div>
            <p className="text-[10px] text-slate-500 mb-0.5">Est. Landed:</p>
            <p className="text-base md:text-lg font-bold text-gray-900">
              {estLandedCost}
            </p>
          </div>

          {/* Icon Row - Premium metadata with grade first */}
          <div className="flex items-center gap-2 md:gap-3 text-slate-500 text-xs md:text-sm flex-wrap">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Gauge className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{mileage}</span>
            </div>
            <span>•</span>
            <span className="whitespace-nowrap">Grade {grade}</span>
            <span>•</span>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Cog className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{transmission}</span>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <p className="text-[9px] text-slate-400 leading-tight mt-1">
            Estimate based on current auction averages. Final price varies.
          </p>
        </div>
      </Link>
  );
}
