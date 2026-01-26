'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: string;
}

export function BookingModal({ isOpen, onClose, carDetails }: BookingModalProps) {
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