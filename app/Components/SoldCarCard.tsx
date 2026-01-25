import Image from 'next/image';

interface SoldCarCardProps {
  title: string;
  image: string;
  mileage: string;
  color: string;
  onFindSimilar: () => void;
}

export default function SoldCarCard({
  title,
  image,
  mileage,
  color,
  onFindSimilar
}: SoldCarCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Image Container - Strict 4:3 Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
        
        {/* SOLD Badge - Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
            SOLD
          </span>
        </div>
      </div>

      {/* Text Area */}
      <div className="p-5 pb-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mt-1">
          {title}
        </h3>

        {/* Specs - Simple Text Line */}
        <p className="text-sm text-gray-500 mt-1">
          {mileage} • {color}
        </p>

        {/* Find Similar Button */}
        <button
          onClick={onFindSimilar}
          className="w-full mt-4 py-2.5 rounded-lg bg-[#0B1221] text-sm font-semibold text-white hover:bg-opacity-90 transition-all duration-300"
        >
          Find similar like this
        </button>
      </div>
    </div>
  );
}
