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
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-300 active:scale-[0.97] cursor-pointer">
      
      {/* Image Container - Desaturated */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 saturate-[0.92] opacity-95"
        />
        
        {/* SOLD Badge - Top Left (matching inventory HOT/NEW badge position) */}
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg">
          <span className="text-white font-bold text-xs uppercase tracking-widest">SOLD</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Title - Bold Navy matching inventory */}
        <h3 className="font-condensed text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-tight line-clamp-1 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        {/* Icon Row - Matching inventory metadata */}
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-4 pb-4 border-b border-gray-100">
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

        {/* Sold Info Line - Clean single line */}
        <div className="text-sm text-slate-500">
          <span>Sold to {soldTo} • {soldDate}</span>
        </div>
      </div>
    </div>
  );
}
