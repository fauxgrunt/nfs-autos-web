'use client';

import { useState } from 'react';
import { BookingModal } from './BookingModal';

interface BookingModalButtonProps {
  carDetails: string;
}

export function BookingModalButton({ carDetails }: BookingModalButtonProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
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
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        carDetails={carDetails}
      />
    </>
  );
}