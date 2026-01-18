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
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
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
      <div className="p-4 md:p-5">
        
        {/* Title - Bold Navy with line-clamp-2 and min-height */}
        <h3 className="font-condensed text-sm md:text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-tight line-clamp-2 min-h-[3rem] group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        {/* Icon Row - Matching inventory metadata with flex-shrink-0 */}
        <div className="flex items-center gap-2 md:gap-3 text-gray-500 text-xs md:text-sm mb-4 pb-4 border-b border-gray-100 flex-wrap">
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

        {/* Sold Info Line - Clean single line */}
        <div className="text-xs md:text-sm text-slate-500">
          <span>Sold to {soldTo} • {soldDate}</span>
        </div>
      </div>
    </div>
  );
}
