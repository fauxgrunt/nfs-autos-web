'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, X } from 'lucide-react';
import { getVehicleById } from '@/app/lib/inventoryData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: string;
}

function BookingModal({ isOpen, onClose, carDetails }: BookingModalProps) {
  if (!isOpen) return null;

  // Generate booking URL with 30-minute slot and current date
  const currentDate = new Date().toISOString().split('T')[0];
  const bookingUrl = `https://cal.com/nfs-autos-6hl4of/30min?notes=${encodeURIComponent(carDetails)}&date=${currentDate}`;

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* iframe */}
        <iframe
          src={bookingUrl}
          className="w-full h-[600px] border-0"
          title="Book a consultation"
        />
      </div>
    </div>
  );
}

export default function VehicleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Get vehicle data based on slug
  const vehicle = getVehicleById(slug);
  
  // If vehicle not found, show 404
  if (!vehicle) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);

  // WhatsApp handler
  const openWhatsApp = () => {
    const phone = "61400000000"; // REPLACE WITH YOUR ACTUAL BUSINESS NUMBER
    const message = `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.id}). Is it available for viewing?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Cal.com booking details
  const carDetails = `Vehicle ID: ${vehicle.id} | ${vehicle.year} ${vehicle.make} ${vehicle.model} | ${vehicle.estLandedCost} | ${vehicle.mileage} | Grade ${vehicle.grade}`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full pt-24">
      {/* Premium Entrance Animation Wrapper */}
      <div key={slug} className="animate-fadeInUp">
        {/* Back Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
            <Link 
              href="/inventory" 
              className="group inline-flex items-center gap-2 py-2 pr-4 text-[#0f172a] font-medium text-sm hover:border-b-2 hover:border-[#0f172a] hover:pb-[6px] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Inventory
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Gallery (65%) */}
          <div className="lg:col-span-2">
            {/* Main Image - Gallery Print Style */}
            <div className="relative aspect-[16/10] bg-black mb-6 flex items-center justify-center overflow-hidden">
              <Image
                src={vehicle.images[selectedImage]}
                alt={`${vehicle.make} ${vehicle.model}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="grid grid-cols-4 gap-4">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-black' 
                      : 'border-gray-200 hover:border-gray-400'
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
            <div className="mt-12 lg:hidden border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Vehicle Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-semibold text-gray-900">{vehicle.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Odometer</p>
                  <p className="font-semibold text-gray-900">{vehicle.odometer.toLocaleString()} km</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-semibold text-gray-900">{vehicle.transmission}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Body Type</p>
                  <p className="font-semibold text-gray-900">{vehicle.bodyType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Engine</p>
                  <p className="font-semibold text-gray-900">{vehicle.engine}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel</p>
                  <p className="font-semibold text-gray-900">{vehicle.fuel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{vehicle.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Info Sidebar (35%) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              
              {/* Header Section */}
              <div className="mb-8">
                {/* Brand */}
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  {vehicle.make}
                </p>

                {/* Title - Large, Uppercase, Bold */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                  {vehicle.year} {vehicle.model}
                </h1>

                {/* Est. Landed Cost */}
                <div className="mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Est. Landed</p>
                  <p className="text-3xl font-semibold text-gray-900">{vehicle.estLandedCost}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Available Now
                </span>
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
                
                <button 
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-4 px-6 border border-black transition-colors inline-flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call / WhatsApp
                </button>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified Inspection</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Clear Title</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Finance Available</span>
                </div>
              </div>

              {/* Desktop Specifications */}
              <div className="hidden lg:block mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-tight">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Year</span>
                    <span className="font-semibold text-gray-900">{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Odometer</span>
                    <span className="font-semibold text-gray-900">{vehicle.odometer.toLocaleString()} km</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Engine</span>
                    <span className="font-semibold text-gray-900">{vehicle.engine}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Transmission</span>
                    <span className="font-semibold text-gray-900">{vehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Body Type</span>
                    <span className="font-semibold text-gray-900">{vehicle.bodyType}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Fuel Type</span>
                    <span className="font-semibold text-gray-900">{vehicle.fuel}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-sm text-gray-600">Location</span>
                    <span className="font-semibold text-gray-900">{vehicle.location}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End Animation Wrapper */}
      </div>

      {/* Mobile Sticky CTA Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
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
      </div>

      {/* Mobile Bottom Padding (to prevent content hiding under sticky footer) */}
      <div className="lg:hidden h-24"></div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        carDetails={carDetails}
      />
    </div>
  );
}