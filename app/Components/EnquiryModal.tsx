'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useEnquiryModal } from '../contexts/EnquiryModalContext';

export default function EnquiryModal() {
  const { isOpen, carName, defaultService, closeModal } = useEnquiryModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'brokerage' as 'brokerage' | 'vehicle' | 'general',
    targetVehicle: '',
    estimatedBudget: '',
    auctionGrade: '4.0' as '4.0' | '4.5' | '5/S',
    specificRequirements: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    { value: 'brokerage', label: 'Import Brokerage Service' },
    { value: 'vehicle', label: 'Vehicle in Stock' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const gradeOptions = [
    { value: '4.0', label: 'Grade 4.0' },
    { value: '4.5', label: 'Grade 4.5' },
    { value: '5/S', label: 'Grade 5/S' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(event.target as Node)) {
        setIsGradeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-set subject based on context
  useEffect(() => {
    if (!isOpen) return;
    if (defaultService) {
      setFormData(prev => ({ ...prev, subject: defaultService }));
    } else if (carName) {
      setFormData(prev => ({ ...prev, subject: 'vehicle' }));
    }
  }, [isOpen, carName, defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Appointment Request:', {
      ...formData,
      carName: carName || 'General Enquiry',
      timestamp: new Date().toISOString()
    });

    // Show success message
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ 
        name: '', 
        phone: '', 
        email: '',
        subject: 'brokerage',
        targetVehicle: '',
        estimatedBudget: '',
        auctionGrade: '4.0',
        specificRequirements: ''
      });
      closeModal();
    }, 3000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ 
      name: '', 
      phone: '', 
      email: '',
      subject: 'brokerage',
      targetVehicle: '',
      estimatedBudget: '',
      auctionGrade: '4.0',
      specificRequirements: ''
    });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
      />

      {/* Modal - Compact with max-height and hidden scrollbar */}
      <div className="relative w-full max-w-[600px] bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-[#0f172a] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3 uppercase tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
              Request Received
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              We will review the current Japanese auction listings and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[#0f172a] uppercase tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                Source Your Dream Car
              </h2>
              <p className="text-xs text-gray-600 mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our flat-fee brokerage service manages the entire auction-to-delivery process.
              </p>
            </div>

            {/* Scrollable Form Content */}
            <div className="overflow-y-auto flex-1 hide-scrollbar">
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-4">
                {/* Hidden field - form is exclusively for Import Brokerage */}
                <input type="hidden" name="subject" value="brokerage" />
                
                <div className="space-y-3">
                  {/* Row 1: Name | Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone | Target Vehicle */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        placeholder="Your phone"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="targetVehicle" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Target Vehicle <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="targetVehicle"
                        required
                        value={formData.targetVehicle}
                        onChange={(e) => setFormData(prev => ({ ...prev, targetVehicle: e.target.value }))}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        placeholder="e.g. 2018 Lexus LS 500h"
                      />
                    </div>
                  </div>

                  {/* Row 3: Budget | Auction Grade */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label 
                        htmlFor="estimatedBudget" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Budget <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="estimatedBudget"
                        required
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData(prev => ({ ...prev, estimatedBudget: e.target.value }))}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        placeholder="$15,000 - $20,000"
                      />
                    </div>

                    <div className="relative" ref={gradeDropdownRef}>
                      <label 
                        htmlFor="auctionGrade" 
                        className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Auction Grade <span className="text-red-500">*</span>
                      </label>
                      
                      <button
                        type="button"
                        onClick={() => setIsGradeDropdownOpen(!isGradeDropdownOpen)}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm font-medium rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all cursor-pointer hover:border-gray-300 flex items-center justify-between"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        <span>{gradeOptions.find(opt => opt.value === formData.auctionGrade)?.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            isGradeDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {isGradeDropdownOpen && (
                        <div 
                          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden"
                          style={{ animation: 'dropdownReveal 200ms ease-out' }}
                        >
                          {gradeOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, auctionGrade: option.value as '4.0' | '4.5' | '5/S' }));
                                setIsGradeDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-all ${
                                formData.auctionGrade === option.value
                                  ? 'bg-slate-50 text-[#0f172a]'
                                  : 'text-gray-700 hover:bg-slate-50 hover:text-[#0f172a]'
                              }`}
                              style={{ fontFamily: 'Raleway, sans-serif' }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Specific Requirements - Compact */}
                  <div>
                    <label 
                      htmlFor="specificRequirements" 
                      className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Specific Requirements
                    </label>
                    <textarea
                      id="specificRequirements"
                      rows={3}
                      value={formData.specificRequirements}
                      onChange={(e) => setFormData(prev => ({ ...prev, specificRequirements: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 resize-none"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                      placeholder="e.g., Must be white, Sunroof preferred, Low mileage"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Bottom Section - Trust Notice + Button */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
              {/* Thin Trust Notice */}
              <p className="text-[10px] text-amber-800 text-center mb-3 font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                ✓ Flat Brokerage Fee Applies. Transparent Sourcing Guaranteed.
              </p>

              {/* Submit Button - Full Width */}
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                REQUEST SOURCING CONSULTATION
              </button>
            </div>
          </>
        )}
      </div>

      {/* Premium Dropdown Animation */}
      <style jsx global>{`
        @keyframes dropdownReveal {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
