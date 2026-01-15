'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface EnquiryModalContextType {
  isOpen: boolean;
  carName: string | null;
  openModal: (carName?: string) => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [carName, setCarName] = useState<string | null>(null);

  const openModal = (carName?: string) => {
    setCarName(carName || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Clear car name after a short delay to avoid visual flash
    setTimeout(() => setCarName(null), 300);
  };

  return (
    <EnquiryModalContext.Provider value={{ isOpen, carName, openModal, closeModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (context === undefined) {
    throw new Error('useEnquiryModal must be used within an EnquiryModalProvider');
  }
  return context;
}
