'use client';

import { useState, useRef, useEffect } from 'react';
import SoldCarCard from '../Components/SoldCarCard';
import { SOLD_INVENTORY_DATA } from '../lib/soldInventoryData';
import { X, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function RecentlySoldPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    estimatedBudget: '',
    auctionGrade: '4.0' as '4.0' | '4.5' | '5/S',
    specificRequirements: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);

  const gradeOptions = [
    { value: '4.0', label: 'Grade 4.0' },
    { value: '4.5', label: 'Grade 4.5' },
    { value: '5/S', label: 'Grade 5/S' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(event.target as Node)) {
        setIsGradeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFindSimilar = (carTitle: string) => {
    setSelectedCar(carTitle);
    setFormData(prev => ({
      ...prev,
      specificRequirements: `I am looking for a car similar to the ${carTitle}. Please contact me with available options.`
    }));
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Please fill in all required fields marked with *');
      return;
    }

    setIsSending(true);
    setError('');

    // Define template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      target_vehicle: selectedCar, // Pre-filled from selected car
      budget: formData.estimatedBudget,
      auction_grade: formData.auctionGrade,
      specific_requirements: formData.specificRequirements
    };

    // Send both emails (Business + Auto-Reply)
    Promise.all([
      emailjs.send('service_crsliam', 'template_rb8hgnq', templateParams, 'Kvw3h6qxCVXjx1A6F'),
      emailjs.send('service_crsliam', 'template_l8nls3i', templateParams, 'Kvw3h6qxCVXjx1A6F')
    ])
    .then(() => {
      console.log('Both emails sent successfully');
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ 
          name: '', 
          phone: '', 
          email: '',
          estimatedBudget: '',
          auctionGrade: '4.0',
          specificRequirements: ''
        });
        setIsModalOpen(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Email failed:', error);
      setError('Failed to send request. Please try again later.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  const handleCloseModal = () => {
    setIsSuccess(false);
    setFormData({ 
      name: '', 
      phone: '', 
      email: '',
      estimatedBudget: '',
      auctionGrade: '4.0',
      specificRequirements: ''
    });
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Recently Sold</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Browse our past inventory. See something you like? Contact us to source a similar vehicle.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLD_INVENTORY_DATA.map((car) => (
            <SoldCarCard
              key={car.id}
              title={car.title}
              image={car.image}
              mileage={car.mileage}
              color={car.color}
              onFindSimilar={() => handleFindSimilar(car.title)}
            />
          ))}
        </div>
      </div>

      {/* Modal Overlay & Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            onClick={handleCloseModal}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-[600px] bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
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
                    Find similar like this
                  </h2>
                  <p className="text-xs text-gray-600 mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {selectedCar}
                  </p>
                </div>

                {/* Scrollable Form Content */}
                <div className="overflow-y-auto flex-1 hide-scrollbar">
                  
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="px-6 py-4">
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

                      {/* Row 2: Phone | Budget */}
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
                      </div>

                      {/* Row 3: Auction Grade (Full Width) */}
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

                      {/* Specific Requirements */}
                      <div>
                        <label 
                          htmlFor="specificRequirements" 
                          className="block text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-1.5"
                          style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                          Preferences / Message
                        </label>
                        <textarea
                          id="specificRequirements"
                          rows={3}
                          value={formData.specificRequirements}
                          onChange={(e) => setFormData(prev => ({ ...prev, specificRequirements: e.target.value }))}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-sm rounded-md focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all placeholder:text-gray-400 hover:border-gray-300 resize-none"
                          style={{ fontFamily: 'Raleway, sans-serif' }}
                          placeholder="Tell us what you're looking for..."
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Bottom Section - Trust Notice + Button */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  {/* Error Message */}
                  {error && (
                    <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-xs text-red-600 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {error}
                      </p>
                    </div>
                  )}
                  
                  {/* Trust Notice */}
                  <p className="text-[10px] text-amber-800 text-center mb-3 font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    ✓ Flat Brokerage Fee Applies. Transparent Sourcing Guaranteed.
                  </p>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    disabled={isSending}
                    className="w-full px-6 py-3 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    {isSending ? 'SENDING REQUEST...' : 'REQUEST SOURCING CONSULTATION'}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Dropdown Animation */}
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
      )}
    </main>
  );
}
