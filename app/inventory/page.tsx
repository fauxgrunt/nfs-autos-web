'use client';

import { useState } from 'react';
import CarCard from '../Components/CarCard';

// Just 3 cars for clean display - WORKING IMAGE URLS
const MOCK_CARS = [
  { 
    id: '1', 
    title: '2015 Toyota Crown Athlete', 
    price: 18990, 
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    mileage: '65,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    weeklyPrice: 91
  },
  { 
    id: '2', 
    title: '2013 Toyota Mark X 250G', 
    price: 15500, 
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    mileage: '72,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    weeklyPrice: 74
  },
  { 
    id: '3', 
    title: '2016 Lexus IS250 F-Sport', 
    price: 22900, 
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    mileage: '58,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    weeklyPrice: 110
  }
];

export default function InventoryPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-12">
          
          {/* SIDEBAR - Olinto Style */}
          <aside className={`w-72 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            
            <div className="border-b pb-4 mb-6">
              <p className="text-sm mb-2">
                <strong>3 vehicles</strong> match your filter
              </p>
              <button className="text-sm text-slate-600 hover:text-red-600 hover:underline">
                Reset Filter
              </button>
            </div>

            {/* Make */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold mb-4 text-sm">Make</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Lexus</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Toyota</span>
                </label>
              </div>
            </div>

            {/* Model */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold mb-4 text-sm">Model</h3>
              <div className="space-y-3">
                <div className="mb-3">
                  <p className="text-xs text-slate-500 mb-2">Lexus</p>
                  <label className="flex items-center gap-2 text-sm cursor-pointer mb-2 hover:text-red-600">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>IS250</span>
                  </label>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-2">Toyota</p>
                  <label className="flex items-center gap-2 text-sm cursor-pointer mb-2 hover:text-red-600">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Crown</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Mark X</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Transmission */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold mb-4 text-sm">Transmission</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Auto</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Manual</span>
                </label>
              </div>
            </div>

            {/* Year */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold mb-4 text-sm">Year</h3>
              <div className="space-y-3">
                {['2016', '2015', '2014', '2013'].map(year => (
                  <label key={year} className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>{year}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4 text-sm">Body</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Sedan</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-600">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Coupe</span>
                </label>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1">
            
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <button 
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden text-sm font-semibold mb-2"
                >
                  Show Filter
                </button>
                <p className="text-sm"><strong>3 vehicles</strong></p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-500">Sort by</span>
                <button className="hover:underline">YEAR</button>
                <button className="hover:underline">PRICE $$ - $</button>
                <button className="hover:underline">PRICE $ - $$</button>
                <button className="hover:underline">KILOMETRES</button>
              </div>
            </div>

            {/* GRID - POLISHED CRISP CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_CARS.map((car) => (
                <div key={car.id} className="group">
                  
                  {/* Image */}
                  <div className="relative bg-slate-100 mb-4 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-slate-900/75 text-white text-xs font-medium">
                      ${car.weeklyPrice} per week*
                    </div>
                  </div>

                  {/* Title - CRISP */}
                  <h3 className="font-semibold text-base mb-1 uppercase">
                    {car.title}
                  </h3>

                  {/* Subtitle - LIGHT */}
                  <p className="text-sm text-slate-600 uppercase mb-3">
                    {car.transmission} {car.bodyType}
                  </p>

                  {/* View link */}
                  <a href="#" className="text-sm text-red-600 hover:underline font-semibold inline-block mb-4">
                    View Vehicle
                  </a>

                  {/* Price section - BALANCED */}
                  <div className="border-t pt-4 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold mb-1">
                        ${car.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-slate-500">Exc. Gov. Charges</p>
                    </div>
                    <button className="px-6 py-2 bg-black text-white text-sm font-semibold hover:bg-slate-800 transition-colors">
                      View
                    </button>
                  </div>

                  {/* Icons row - CLEAN & SLIM */}
                  <div className="border-t mt-4 pt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 mb-1.5 text-slate-600">
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium">{car.mileage}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 mb-1.5 text-slate-600">
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="6" cy="19" r="2"/>
                          <circle cx="18" cy="19" r="2"/>
                          <path d="M6 19h12M6 19V9M18 19v-4"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium">{car.transmission}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 mb-1.5 text-slate-600">
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="11" width="18" height="10" rx="2"/>
                          <path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium uppercase">{car.bodyType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}