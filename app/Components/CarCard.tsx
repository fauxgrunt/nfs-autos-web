'use client';

import Image from 'next/image';
import Link from 'next/link';

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
  // Use first image from gallery or fallback to main image
  const displayImage = (gallery && gallery.length > 0) ? gallery[0] : image;

  return (
    <Link 
      href={`/inventory/${id}`} 
      className="group relative flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={displayImage}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isSold ? 'grayscale' : ''}`}
        />
        
        {/* Sold Badge */}
        {isSold && (
          <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
              Sold
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title - Capitalize Case */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Price - Hero Element */}
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Est. Landed</p>
            <p className="text-2xl font-extrabold text-blue-900">
              {estLandedCost}
            </p>
          </div>
        </div>

        {/* Specs Grid - Badge Style */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-gray-100 rounded px-3 py-2">
            <p className="text-xs text-gray-500">Mileage</p>
            <p className="text-sm font-medium text-gray-900">{mileage}</p>
          </div>
          <div className="bg-gray-100 rounded px-3 py-2">
            <p className="text-xs text-gray-500">Grade</p>
            <p className="text-sm font-medium text-gray-900">{grade}</p>
          </div>
          <div className="bg-gray-100 rounded px-3 py-2 col-span-2">
            <p className="text-xs text-gray-500">Transmission</p>
            <p className="text-sm font-medium text-gray-900">{transmission}</p>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 leading-tight mt-1">
          Estimate based on current auction averages. Final price varies.
        </p>
      </div>
    </Link>
  );
}
