'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface EnquiryModalContextType {
  isOpen: boolean;
  carName: string | null;
  defaultService: 'brokerage' | 'vehicle' | 'general' | null;
  openModal: (carName?: string, defaultService?: 'brokerage' | 'vehicle' | 'general') => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [carName, setCarName] = useState<string | null>(null);
  const [defaultService, setDefaultService] = useState<'brokerage' | 'vehicle' | 'general' | null>(null);

  const openModal = (carName?: string, defaultService?: 'brokerage' | 'vehicle' | 'general') => {
    setCarName(carName || null);
    setDefaultService(defaultService || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Clear car name and defaultService after a short delay to avoid visual flash
    setTimeout(() => {
      setCarName(null);
      setDefaultService(null);
    }, 300);
  };

  return (
    <EnquiryModalContext.Provider value={{ isOpen, carName, defaultService, openModal, closeModal }}>
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
