import React from "react";

type Props = {
  title: string;
  price: string;
  mileage: string;
  transmission: string;
  image: string;
};

export default function CarCard({ title, price, mileage, transmission, image }: Props) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{mileage} · {transmission}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">{price}</span>
        </div>
      </div>
    </article>
  );
}
