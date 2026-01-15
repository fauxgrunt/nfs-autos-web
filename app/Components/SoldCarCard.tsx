import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Cog, Car } from 'lucide-react';

interface SoldCarCardProps {
  id: string;
  title: string;
  soldPrice: number;
  image: string;
  mileage: string;
  transmission: string;
  bodyType: string;
  soldTo: string;
  soldDate: string;
}

export default function SoldCarCard({
  id,
  title,
  soldPrice,
  image,
  mileage,
  transmission,
  bodyType,
  soldTo,
  soldDate
}: SoldCarCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-300">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* SOLD Badge - Top Right */}
        <div className="absolute top-3 right-3 px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-700 rounded-md shadow-lg">
          <span className="text-white font-bold text-xs uppercase tracking-widest">SOLD</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Title */}
        <h3 className="font-condensed text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight line-clamp-1 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        {/* Sold Info */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-red-600 font-bold text-base">SOLD</span>
          <span className="text-gray-400 text-sm">•</span>
          <span className="text-gray-500 text-sm font-medium">{soldDate}</span>
        </div>

        {/* Sold To Location */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <p className="text-sm text-gray-600">
            Sold to <span className="font-semibold text-gray-900">{soldTo}</span>
          </p>
        </div>

        {/* Specs Icons */}
        <div className="flex items-center justify-between text-gray-500 text-xs">
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
    </div>
  );
}
