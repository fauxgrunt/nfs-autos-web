"use client";

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { client, urlFor } from '../../lib/sanity';
import { BookingModal } from './BookingModal';
import { BookingModalButton } from './BookingModalButton';
import { useState, useMemo } from 'react';

interface VehicleDetailPageProps {
  params: Promise<{ slug: string }>;
  cars: Array<{
    id: string;
    title: string;
    price: number;
    mileage: number;
    transmission: string;
    fuelType: string;
    bodyType: string;
    engine: string;
    location: string;
    description: string;
    mainImage: any;
    gallery: any[];
    slug: { current: string };
    make: string;
    model: string;
  }>;
}

export default async function VehicleDetailPage({ params, cars }: VehicleDetailPageProps) {
  const { slug } = await params;

  // State for filters
  const [filters, setFilters] = useState({ make: '', model: '', transmission: '', fuelType: '' });

  // State for mobile filter modal
  const [showFilters, setShowFilters] = useState(false);

  // Derived filtered cars
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      return (
        (!filters.make || car.make === filters.make) &&
        (!filters.model || car.model === filters.model) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.fuelType || car.fuelType === filters.fuelType)
      );
    });
  }, [filters, cars]);

  // Unique filter options
  const uniqueMakes = Array.from(new Set(cars.map(car => car.make)));
  const uniqueModels = Array.from(new Set(cars.map(car => car.model)));
  const uniqueTransmissions = Array.from(new Set(cars.map(car => car.transmission)));
  const uniqueFuelTypes = Array.from(new Set(cars.map(car => car.fuelType)));

  // If car not found, return 404
  const car = await client.fetch(
    `*[_type == "car" && slug.current == $slug][0] {
      title,
      price,
      mileage,
      transmission,
      fuelType,
      bodyType,
      engine,
      location,
      description,
      mainImage,
      gallery,
      "color": exteriorColor
    }`,
    { slug }
  );

  if (!car) {
    notFound();
  }

  // Prepare image URLs
  const mainImageUrl = car.mainImage ? urlFor(car.mainImage).url() : null;
  const galleryImages = car.gallery ? car.gallery.map((img: any) => urlFor(img).url()) : [];
  const allImages = mainImageUrl ? [mainImageUrl, ...galleryImages] : galleryImages;

  // WhatsApp handler
  const openWhatsApp = () => {
    const phone = "61416378869"; // Corrected phone number
    const message = `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.id}). Is it available for viewing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Log the URL for debugging
    console.log("WhatsApp URL:", whatsappUrl);

    // Open the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  };

  // Cal.com booking details
  const carDetails = `Vehicle: ${car.title} | Price: ${car.price} | Mileage: ${car.mileage} | Transmission: ${car.transmission || 'N/A'}`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full pt-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(true)}
          className="lg:hidden mb-4 px-4 py-2 bg-gray-900 text-white rounded"
        >
          Open Filters
        </button>

        {/* Mobile Filter Modal (Drawer) */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setShowFilters(false)}>
            <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFilters(false)} className="mb-4 text-white">Close</button>
              <h3 className="text-lg font-bold mb-4">Filters</h3>

              {/* Make Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Make</label>
                <select
                  value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                >
                  <option value="">All Makes</option>
                  {uniqueMakes.map((make) => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Model Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Model</label>
                <select
                  value={filters.model}
                  onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                >
                  <option value="">All Models</option>
                  {uniqueModels.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              {/* Transmission Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Transmission</label>
                <select
                  value={filters.transmission}
                  onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                >
                  <option value="">All Transmissions</option>
                  {uniqueTransmissions.map((trans) => (
                    <option key={trans} value={trans}>{trans}</option>
                  ))}
                </select>
              </div>

              {/* Call to Action Buttons */}
              <div className="space-y-3 mb-8">
                <button 
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 transition-colors inline-flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Inquire Now
                </button>

                <div className="grid grid-cols-2 gap-4">
                  {/* Call Button */}
                  <a 
                    href="tel:+61416378869"
                    className="flex items-center justify-center gap-2 py-4 px-6 border border-black text-black font-semibold uppercase tracking-wide text-sm transition-colors hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>

                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/61416378869" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 px-6 border border-black text-black font-semibold uppercase tracking-wide text-sm transition-colors hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on lg+ */}
          <aside className="hidden lg:block w-full lg:w-64 shrink-0 bg-gray-900 text-white p-6">
            <h3 className="text-lg font-bold mb-4">Filters</h3>

            {/* Make Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Make</label>
              <select
                value={filters.make}
                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Makes</option>
                {uniqueMakes.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {/* Model Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Model</label>
              <select
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Models</option>
                {uniqueModels.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Transmission Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Transmission</label>
              <select
                value={filters.transmission}
                onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Transmissions</option>
                {uniqueTransmissions.map((trans) => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Fuel Type</label>
              <select
                value={filters.fuelType}
                onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                className="w-full p-2 bg-gray-800 text-white rounded"
              >
                <option value="">All Fuel Types</option>
                {uniqueFuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold mb-2">{car.title}</h3>
                <p className="text-sm text-gray-600">{car.make} - {car.model}</p>
                <p className="text-sm text-gray-600">{car.transmission}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}