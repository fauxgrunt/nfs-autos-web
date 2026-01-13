'use client';

import { useState } from 'react';
import { ChevronDown, Heart, Gauge, Cog, Car, Phone, Eye } from 'lucide-react';
import CarCard from '../Components/CarCard';
import SortDropdown from '../Components/SortDropdown';

// REALISTIC INVENTORY
const MOCK_CARS = [
  { 
    id: '1', 
    title: '2015 Toyota Crown Athlete', 
    price: 18990, 
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    mileage: '65,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    engine: 'V6 3.5L',
    weeklyPrice: 91,
    status: 'JUST LANDED'
  },
  { 
    id: '2', 
    title: '2013 Toyota Mark X 250G', 
    price: 15500, 
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    mileage: '72,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    engine: '2.5L',
    weeklyPrice: 74,
    status: 'LOW KMS'
  },
  { 
    id: '3', 
    title: '2016 Lexus IS250 F-Sport', 
    price: 22900, 
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    mileage: '58,000', 
    transmission: 'Auto', 
    bodyType: 'Sedan',
    engine: 'V6 2.5L',
    weeklyPrice: 110,
    status: 'PREMIUM'
  }
];

export default function InventoryPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [selectedBodies, setSelectedBodies] = useState<string[]>([]);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [currentSort, setCurrentSort] = useState('newest');
  
  const [openSections, setOpenSections] = useState({
    make: true,
    model: false,
    transmission: false,
    year: false,
    body: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleMake = (make: string) => {
    setSelectedMakes(prev => 
      prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]
    );
  };

  const toggleModel = (model: string) => {
    setSelectedModels(prev => 
      prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
    );
  };

  const toggleYear = (year: string) => {
    setSelectedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const toggleTransmission = (trans: string) => {
    setSelectedTransmissions(prev => 
      prev.includes(trans) ? prev.filter(t => t !== trans) : [...prev, trans]
    );
  };

  const toggleBody = (body: string) => {
    setSelectedBodies(prev => 
      prev.includes(body) ? prev.filter(b => b !== body) : [...prev, body]
    );
  };

  const sortLabels: Record<string, string> = {
    newest: 'Year: New → Old',
    oldest: 'Year: Old → New',
    price_asc: 'Price: Low → High',
    price_desc: 'Price: High → Low',
    mileage_asc: 'Mileage: Low → High',
    mileage_desc: 'Mileage: High → Low'
  };

  const handleSortChange = (sortValue: string) => {
    setCurrentSort(sortValue);
    setShowSortMenu(false);
  };

  const resetFilters = () => {
    setSelectedMakes([]);
    setSelectedModels([]);
    setSelectedYears([]);
    setSelectedTransmissions([]);
    setSelectedBodies([]);
  };

  const filteredCars = [...MOCK_CARS]
    .filter(car => {
      if (selectedMakes.length > 0) {
        const carMake = car.title.includes('Lexus') ? 'Lexus' : 'Toyota';
        if (!selectedMakes.includes(carMake)) return false;
      }
      if (selectedTransmissions.length > 0 && !selectedTransmissions.includes(car.transmission)) return false;
      if (selectedBodies.length > 0 && !selectedBodies.includes(car.bodyType)) return false;
      return true;
    })
    .sort((a, b) => {
      const yearA = parseInt(a.title.match(/\d{4}/)?.[0] || '0');
      const yearB = parseInt(b.title.match(/\d{4}/)?.[0] || '0');
      const mileageA = parseInt(a.mileage.replace(/,/g, ''));
      const mileageB = parseInt(b.mileage.replace(/,/g, ''));

      switch (currentSort) {
        case 'newest':
          return yearB - yearA;
        case 'oldest':
          return yearA - yearB;
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'mileage_asc':
          return mileageA - mileageB;
        case 'mileage_desc':
          return mileageB - mileageA;
        default:
          return 0;
      }
    });

  return (
    <>
      {/* GOOGLE FONTS - TECHNICAL PRECISION */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        
        .font-condensed {
          font-family: 'Barlow Condensed', sans-serif;
        }
        
        .font-ui {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      <main className="min-h-screen bg-gray-100">
        
        <div className="max-w-[1800px] mx-auto min-h-screen">
          <div className="flex items-stretch min-h-screen">
            
            {/* DARK SIDEBAR - "CONTROL CENTER" */}
            <aside className={`
              ${showMobileFilters ? 'fixed inset-0 z-50 overflow-y-auto' : 'hidden lg:block'}
              lg:w-80 lg:flex-shrink-0 min-h-full bg-[#0b1d38] text-white
            `}>
              
              {/* Mobile close */}
              {showMobileFilters && (
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="lg:hidden absolute top-6 right-6 text-white text-2xl hover:opacity-70"
                >
                  ×
                </button>
              )}

              <div className="p-6 lg:p-8">
                
                {/* Filter Header */}
                <div className="mb-8 pb-6 border-b border-white/20">
                  <p className="font-ui text-sm font-semibold text-white/90 mb-3 tracking-wide">
                    {filteredCars.length} <span className="text-white/60">VEHICLES AVAILABLE</span>
                  </p>
                  <button 
                    onClick={resetFilters}
                    className="font-ui text-sm text-white/70 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    Reset Filters
                  </button>
                </div>

                {/* Make */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('make')}
                    className="w-full flex items-center justify-between py-4 font-ui font-bold text-sm text-white hover:text-white/80 transition-colors"
                  >
                    Make
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSections.make ? 'rotate-180' : ''}`} />
                  </button>
                  {openSections.make && (
                    <div className="pb-6 space-y-4">
                      {['Lexus', 'Toyota'].map(make => (
                        <label key={make} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            checked={selectedMakes.includes(make)}
                            onChange={() => toggleMake(make)}
                             className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400" 
                          />
                          <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{make}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  <div className="h-px bg-white/20"></div>
                </div>

                {/* Model */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('model')}
                    className="w-full flex items-center justify-between py-4 font-ui font-bold text-sm text-white hover:text-white/80 transition-colors"
                  >
                    Model
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSections.model ? 'rotate-180' : ''}`} />
                  </button>
                  {openSections.model && (
                    <div className="pb-6 space-y-5">
                      <div>
                        <p className="font-ui text-xs font-semibold text-white/40 mb-3">Lexus</p>
                        {['IS250', 'GS350'].map(model => (
                          <label key={model} className="flex items-center gap-3 cursor-pointer mb-3 group">
                            <input
                              type="checkbox"
                              checked={selectedModels.includes(model)}
                              onChange={() => toggleModel(model)}
                              className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400"
                            />
                            <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{model}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <p className="font-ui text-xs font-semibold text-white/40 mb-3">Toyota</p>
                        {['Crown', 'Mark X'].map(model => (
                          <label key={model} className="flex items-center gap-3 cursor-pointer mb-3 group">
                            <input
                              type="checkbox"
                              checked={selectedModels.includes(model)}
                              onChange={() => toggleModel(model)}
                              className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400"
                            />
                            <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{model}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="h-px bg-white/20"></div>
                </div>

                {/* Transmission */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('transmission')}
                    className="w-full flex items-center justify-between py-4 font-ui font-bold text-sm text-white hover:text-white/80 transition-colors"
                  >
                    Transmission
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSections.transmission ? 'rotate-180' : ''}`} />
                  </button>
                  {openSections.transmission && (
                    <div className="pb-6 space-y-4">
                      {['Auto', 'Manual'].map(trans => (
                        <label key={trans} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedTransmissions.includes(trans)}
                            onChange={() => toggleTransmission(trans)}
                            className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400"
                          />
                          <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{trans}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  <div className="h-px bg-white/20"></div>
                </div>

                {/* Year */}
                <div className="mb-8">
                  <button
                    onClick={() => toggleSection('year')}
                    className="w-full flex items-center justify-between py-4 font-ui font-bold text-sm text-white hover:text-white/80 transition-colors"
                  >
                    Year
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSections.year ? 'rotate-180' : ''}`} />
                  </button>
                  {openSections.year && (
                    <div className="pb-6 space-y-4">
                      {['2016', '2015', '2014', '2013', '2012', '2011'].map(year => (
                        <label key={year} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedYears.includes(year)}
                            onChange={() => toggleYear(year)}
                            className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400"
                          />
                          <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{year}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  <div className="h-px bg-white/20"></div>
                </div>

                {/* Body */}
                <div className="mb-0">
                  <button
                    onClick={() => toggleSection('body')}
                    className="w-full flex items-center justify-between py-4 font-ui font-bold text-sm text-white hover:text-white/80 transition-colors"
                  >
                    Body Type
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSections.body ? 'rotate-180' : ''}`} />
                  </button>
                  {openSections.body && (
                    <div className="pb-6 space-y-4">
                      {['Sedan', 'Coupe', 'Wagon'].map(body => (
                        <label key={body} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedBodies.includes(body)}
                            onChange={() => toggleBody(body)}
                            className="appearance-none h-5 w-5 rounded-sm border border-gray-600 bg-transparent checked:bg-[#d32f2f] checked:border-[#d32f2f] checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-center cursor-pointer transition-all duration-200 hover:border-gray-400"
                          />
                          <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{body}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Apply */}
                {showMobileFilters && (
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full mt-8 py-4 bg-white text-[#0b1d38] font-ui font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all"
                  >
                    Apply Filters
                  </button>
                )}
              </div>
            </aside>

            {/* LIGHT GRID CANVAS */}
            <div className="flex-1 bg-gray-100">
              
              {/* PREMIUM STICKY UTILITY BAR - MOBILE ONLY */}
              <div className="lg:hidden sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="h-12 flex items-center">
                  {/* Left Half - Filters */}
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="flex-1 h-full flex items-center justify-center gap-2 text-sm font-medium text-[#0B1221] hover:bg-gray-50/50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 12h12M3 20h6" />
                    </svg>
                    Filters
                  </button>

                  {/* Vertical Divider */}
                  <div className="h-6 w-px bg-gray-200" />

                  {/* Right Half - Sort */}
                  <button
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex-1 h-full flex items-center justify-center gap-2 text-sm font-medium text-[#0B1221] hover:bg-gray-50/50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    Sort
                  </button>
                </div>
              </div>

              {/* MOBILE SORT MENU DROPDOWN */}
              {showSortMenu && (
                <div className="lg:hidden fixed inset-0 z-50 flex items-end">
                  {/* Backdrop */}
                  <div 
                    onClick={() => setShowSortMenu(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  />
                  
                  {/* Sort Menu */}
                  <div className="relative w-full bg-white rounded-t-2xl shadow-2xl">
                    {/* Handle Bar */}
                    <div className="flex justify-center pt-3 pb-2">
                      <div className="w-12 h-1 bg-gray-300 rounded-full" />
                    </div>

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="font-ui text-base font-bold text-[#0B1221] uppercase tracking-wide">Sort By</h3>
                    </div>

                    {/* Sort Options */}
                    <div className="px-6 py-4 space-y-1">
                      <button 
                        onClick={() => handleSortChange('newest')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'newest' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Year: New → Old
                      </button>
                      <button 
                        onClick={() => handleSortChange('oldest')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'oldest' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Year: Old → New
                      </button>
                      <button 
                        onClick={() => handleSortChange('price_asc')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'price_asc' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Price: Low → High
                      </button>
                      <button 
                        onClick={() => handleSortChange('price_desc')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'price_desc' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Price: High → Low
                      </button>
                      <button 
                        onClick={() => handleSortChange('mileage_asc')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'mileage_asc' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Mileage: Low → High
                      </button>
                      <button 
                        onClick={() => handleSortChange('mileage_desc')}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-ui text-sm font-medium ${
                          currentSort === 'mileage_desc' ? 'bg-red-50 text-[#d32f2f] font-bold' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Mileage: High → Low
                      </button>
                    </div>

                    {/* Bottom Padding */}
                    <div className="pb-6" />
                  </div>
                </div>
              )}

              {/* Top bar */}
              <div className="px-6 lg:px-8 py-6 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="font-condensed text-lg font-bold text-[#0b1d38] uppercase tracking-tight">
                    {filteredCars.length} <span className="text-gray-500">VEHICLES</span>
                  </p>
                  
                  {/* Desktop Sort Dropdown */}
                  <div className="hidden lg:block">
                    <SortDropdown 
                      currentSort={currentSort}
                      onSort={setCurrentSort}
                    />
                  </div>
                </div>
              </div>

              {/* PRO GRID */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 md:gap-6">
                  {filteredCars.map((car) => (
                    <CarCard
                      key={car.id}
                      id={car.id}
                      title={car.title}
                      price={car.price}
                      image={car.image}
                      mileage={car.mileage}
                      transmission={car.transmission}
                      bodyType={car.bodyType}
                      weeklyPrice={car.weeklyPrice}
                    />
                  ))}
                </div>

                {/* No results */}
                {filteredCars.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-lg border border-gray-200 shadow-sm">
                    {/* Empty State Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Empty State Text */}
                    <h3 className="font-condensed text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                      No Vehicles Found
                    </h3>
                    <p className="font-ui text-sm text-gray-500 mb-8 max-w-md mx-auto">
                      No vehicles match your current filter criteria. Try adjusting your filters to see more results.
                    </p>

                    {/* Clear Filters Button */}
                    <button 
                      onClick={resetFilters}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-[#d32f2f] text-white font-ui font-bold text-xs uppercase tracking-widest rounded-md hover:bg-[#b71c1c] transition-all shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}