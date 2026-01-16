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
    subject: 'general' as 'brokerage' | 'vehicle' | 'general',
    preferredTime: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    { value: 'brokerage', label: 'Import Brokerage Service' },
    { value: 'vehicle', label: 'Vehicle in Stock' },
    { value: 'general', label: 'General Inquiry' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
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
        subject: 'general',
        preferredTime: ''
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
      subject: 'general',
      preferredTime: ''
    });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-10 text-gray-400 hover:text-[#0f172a] transition-colors"
        >
          <X className="w-6 h-6" />
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
              Request Confirmed
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight" style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}>
                {defaultService === 'brokerage' ? 'Request a Quote' : (carName ? `Book Viewing: ${carName}` : 'Book Appointment')}
              </h2>
              <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Complete the form below and our team will reach out shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-5">
                
                {/* Subject Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label 
                    htmlFor="subject" 
                    className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  
                  {/* Custom Dropdown Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 text-[#0f172a] text-base font-medium rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/20 transition-all cursor-pointer hover:border-gray-300 shadow-sm flex items-center justify-between"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <span>{serviceOptions.find(opt => opt.value === formData.subject)?.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div 
                      className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden transition-all duration-200 ease-out origin-top"
                      style={{
                        animation: 'dropdownReveal 200ms ease-out'
                      }}
                    >
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, subject: option.value as 'brokerage' | 'vehicle' | 'general' }));
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-5 py-3.5 text-left text-base font-medium transition-all duration-150 active:scale-[0.98] ${
                            formData.subject === option.value
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

                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2"
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
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 text-[#0f172a] text-base rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 shadow-sm"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2"
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
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 text-[#0f172a] text-base rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 shadow-sm"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2"
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
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 text-[#0f172a] text-base rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 shadow-sm"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Preferred Time Field */}
                <div>
                  <label 
                    htmlFor="preferredTime" 
                    className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Best Time to Call
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 text-[#0f172a] text-base rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 shadow-sm"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    placeholder="e.g., Weekday mornings, After 5pm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 px-8 py-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 active:shadow-md"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                {defaultService === 'brokerage' ? 'Send Quote Request' : 'Confirm Appointment Request'}
              </button>

              {/* Trust Signal */}
              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                No-obligation. Our team will contact you within 24 hours.
              </p>
            </form>
          </>
        )}
      </div>

      {/* Premium Dropdown Animation */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
}
