'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data with real images
const dummyVehicle = {
  id: '1',
  make: 'Toyota',
  model: 'Mark X 250G',
  year: 2013,
  price: 15500,
  weeklyPrice: 74,
  odometer: 72000,
  transmission: 'Automatic',
  bodyType: 'Sedan',
  engine: '2.5L V6',
  fuel: 'Petrol',
  status: 'Available',
  location: 'Showroom Floor',
  images: [
    'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=1600&q=80', // JDM Style Exterior
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80', // Detail Shot
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80', // Interior
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80', // Rear
  ]
};

export default function VehicleDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/inventory" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Inventory
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Gallery (60%) */}
          <div className="lg:col-span-3">
            {/* Main Image */}
            <div className="relative aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden mb-4">
              <Image
                src={dummyVehicle.images[selectedImage]}
                alt={`${dummyVehicle.make} ${dummyVehicle.model}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {dummyVehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-red-600 ring-2 ring-red-600 ring-offset-2' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Vehicle Specifications - Below Gallery on Mobile */}
            <div className="mt-8 lg:hidden bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Vehicle Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Odometer</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.odometer.toLocaleString()} km</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.transmission}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Body Type</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.bodyType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Engine</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.engine}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.fuel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{dummyVehicle.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weekly Price</p>
                  <p className="font-semibold text-gray-900">${dummyVehicle.weeklyPrice}/week</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Concierge Sidebar (40%) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8 space-y-6">
              
              {/* Header Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                {/* Brand & Status */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {dummyVehicle.make}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Available in Showroom
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {dummyVehicle.year} {dummyVehicle.model}
                </h1>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-4xl lg:text-5xl font-bold text-gray-900">
                    ${dummyVehicle.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    or ${dummyVehicle.weeklyPrice}/week
                  </p>
                </div>

                {/* Call to Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Viewing
                  </button>
                  
                  <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-xl border-2 border-gray-300 transition-colors inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call / WhatsApp
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="space-y-2.5 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Verified Inspection</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Clear Title</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Finance Available</span>
                  </div>
                </div>
              </div>

              {/* Desktop Specifications */}
              <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Vehicle Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Year</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.year}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Odometer</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.odometer.toLocaleString()} km</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Engine</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.engine}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Transmission</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Body Type</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.bodyType}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Fuel Type</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.fuel}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-900">{dummyVehicle.location}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Weekly Price</span>
                    <span className="font-semibold text-gray-900">${dummyVehicle.weeklyPrice}/week</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Viewing
        </button>
      </div>

      {/* Mobile Bottom Padding (to prevent content hiding under sticky footer) */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
}