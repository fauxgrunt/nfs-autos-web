'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useEnquiryModal } from '../contexts/EnquiryModalContext';
import { INVENTORY_DATA } from '../lib/inventoryData';

export default function EnquiryModal() {
  const { isOpen, carName, closeModal } = useEnquiryModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    subject: 'general' as 'general' | 'brokerage' | 'vehicle',
    selectedVehicle: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Group vehicles by make
  const vehiclesByMake = INVENTORY_DATA.reduce((acc, car) => {
    if (!acc[car.make]) {
      acc[car.make] = [];
    }
    acc[car.make].push(car);
    return acc;
  }, {} as Record<string, typeof INVENTORY_DATA>);

  // Auto-fill message based on context
  useEffect(() => {
    if (!isOpen) return;

    // If opened with a specific car name (from vehicle detail page)
    if (carName) {
      setFormData(prev => ({
        ...prev,
        subject: 'vehicle',
        message: `Hi, I would like to book a viewing for the ${carName}. Please contact me at your earliest convenience.`
      }));
    } else {
      // Default for general enquiries
      setFormData(prev => ({
        ...prev,
        subject: 'general',
        message: 'Hi, I would like to enquire about your vehicles. Please contact me at your earliest convenience.'
      }));
    }
  }, [isOpen, carName]);

  // Update message when subject or vehicle changes
  useEffect(() => {
    if (formData.subject === 'brokerage') {
      setFormData(prev => ({
        ...prev,
        message: 'Hi, I am looking to import a car from Japan. Please guide me through the process.'
      }));
    } else if (formData.subject === 'vehicle' && formData.selectedVehicle) {
      const vehicle = INVENTORY_DATA.find(v => v.id === formData.selectedVehicle);
      if (vehicle) {
        setFormData(prev => ({
          ...prev,
          message: `Hi, is the ${vehicle.year} ${vehicle.make} ${vehicle.model} still available? I would like to book a viewing.`
        }));
      }
    } else if (formData.subject === 'vehicle' && !formData.selectedVehicle && !carName) {
      setFormData(prev => ({
        ...prev,
        message: 'Hi, I would like to enquire about your vehicles. Please contact me at your earliest convenience.'
      }));
    } else if (formData.subject === 'general') {
      setFormData(prev => ({
        ...prev,
        message: 'Hi, I would like to enquire about your vehicles. Please contact me at your earliest convenience.'
      }));
    }
  }, [formData.subject, formData.selectedVehicle, carName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Enquiry Submission:', {
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
        message: '', 
        subject: 'general',
        selectedVehicle: ''
      });
      closeModal();
    }, 3000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ 
      name: '', 
      phone: '', 
      message: '', 
      subject: 'general',
      selectedVehicle: ''
    });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-neutral-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
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
            <h3 className="font-condensed text-2xl font-bold text-white mb-3 uppercase tracking-tight">
              Thank You
            </h3>
            <p className="font-ui text-sm text-gray-300 leading-relaxed">
              Our concierge will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-800">
              <h2 className="font-condensed text-2xl font-bold text-white uppercase tracking-tight">
                {carName ? 'Book a Viewing' : 'Contact Us'}
              </h2>
              <p className="font-ui text-sm text-gray-400 mt-2">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-5">
                
                {/* Subject Dropdown */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block font-ui text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    What are you interested in? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      subject: e.target.value as 'general' | 'brokerage' | 'vehicle',
                      selectedVehicle: '' // Reset vehicle selection when subject changes
                    }))}
                    className="w-full px-6 py-4 pr-12 bg-neutral-800 border border-neutral-700 text-white font-ui text-base font-medium rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all cursor-pointer hover:border-neutral-600"
                  >
                    <option value="general" className="bg-neutral-800">General Inquiry</option>
                    <option value="brokerage" className="bg-neutral-800">Import Brokerage Service</option>
                    <option value="vehicle" className="bg-neutral-800">Vehicle in Stock</option>
                  </select>
                </div>

                {/* Conditional Vehicle Dropdown */}
                {formData.subject === 'vehicle' && (
                  <div>
                    <label 
                      htmlFor="vehicle" 
                      className="block font-ui text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                    >
                      Select Vehicle <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="vehicle"
                      required={formData.subject === 'vehicle'}
                      value={formData.selectedVehicle}
                      onChange={(e) => setFormData(prev => ({ ...prev, selectedVehicle: e.target.value }))}
                      className="w-full px-6 py-4 pr-12 bg-neutral-800 border border-neutral-700 text-white font-ui text-base font-medium rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all cursor-pointer hover:border-neutral-600"
                    >
                      <option value="" className="bg-neutral-800">-- Choose a vehicle --</option>
                      {Object.keys(vehiclesByMake).sort().map(make => (
                        <optgroup key={make} label={make} className="bg-neutral-800 font-semibold">
                          {vehiclesByMake[make].map(vehicle => (
                            <option 
                              key={vehicle.id} 
                              value={vehicle.id}
                              className="bg-neutral-800 font-normal"
                            >
                              {vehicle.year} {vehicle.model} - ${vehicle.price.toLocaleString()}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block font-ui text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white font-ui text-base rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all placeholder:text-gray-500 hover:border-neutral-600"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block font-ui text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white font-ui text-base rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all placeholder:text-gray-500 hover:border-neutral-600"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block font-ui text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white font-ui text-base leading-relaxed rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all resize-none placeholder:text-gray-500 hover:border-neutral-600"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-ui font-bold text-xs uppercase tracking-widest rounded-md hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
              >
                Send Enquiry
              </button>

              {/* Privacy Notice */}
              <p className="font-ui text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted by our team.
              </p>
            </form>
          </>
        )}
      </div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        
        .font-condensed {
          font-family: 'Barlow Condensed', sans-serif;
        }
        
        .font-ui {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
    </div>
  );
}
