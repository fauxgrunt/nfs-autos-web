'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Search, Shield, Truck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEnquiryModal } from '../contexts/EnquiryModalContext';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ImportBrokeragePage() {
  const { openModal } = useEnquiryModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    budget: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! Our team will contact you.');
    // Reset form
    setFormData({ name: '', phone: '', model: '', budget: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Section 1: Hero - The Hook */}
      <section className="bg-slate-50 pt-64 pb-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-5xl text-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-tight mb-8 uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            THE BESPOKE
            <br />
            IMPORT SERVICE.
          </h1>
          <p 
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Access the Japanese domestic market directly. Transparency, speed, and precision.
          </p>
        </div>
      </section>

      {/* Section 2: How It Works Timeline */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-4"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              HOW IT WORKS
            </h2>
            <p 
              className="text-xl text-slate-500 max-w-2xl mx-auto"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Four simple steps from consultation to delivery
            </p>
          </div>

          {/* Mobile Swiper - Hidden on Desktop */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.15}
              centeredSlides={false}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-slate-400',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-slate-900'
              }}
              className="!pb-12"
            >
              {/* Step 01 */}
              <SwiperSlide>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 h-[280px] flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                        <span 
                          className="text-white text-sm font-bold"
                          style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                        >
                          01
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                      >
                        CONSULTATION
                      </h3>
                    </div>
                  </div>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    We define your budget and specs. Tell us your dream car, and we&apos;ll make it happen.
                  </p>
                </div>
              </SwiperSlide>

              {/* Step 02 */}
              <SwiperSlide>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 h-[280px] flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                        <span 
                          className="text-white text-sm font-bold"
                          style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                        >
                          02
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                      >
                        SOURCING
                      </h3>
                    </div>
                  </div>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    We scan 100+ daily auctions across Japan to find the perfect match for your requirements.
                  </p>
                </div>
              </SwiperSlide>

              {/* Step 03 */}
              <SwiperSlide>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 h-[280px] flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                        <span 
                          className="text-white text-sm font-bold"
                          style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                        >
                          03
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                      >
                        VERIFICATION
                      </h3>
                    </div>
                  </div>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Physical inspection by our team in Japan. Every car is verified before purchase.
                  </p>
                </div>
              </SwiperSlide>

              {/* Step 04 */}
              <SwiperSlide>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 h-[280px] flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                        <span 
                          className="text-white text-sm font-bold"
                          style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                        >
                          04
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                      >
                        DELIVERY
                      </h3>
                    </div>
                  </div>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Customs, compliance, and doorstep delivery. We handle all the paperwork.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Step 01 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 hover:border-slate-300 transition-all duration-300 h-[240px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                    <span 
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                    >
                      01
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    CONSULTATION
                  </h3>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    We define your budget and specs. Tell us your dream car, and we&apos;ll make it happen.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 hover:border-slate-300 transition-all duration-300 h-[240px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                    <span 
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                    >
                      02
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    SOURCING
                  </h3>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    We scan 100+ daily auctions across Japan to find the perfect match for your requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 hover:border-slate-300 transition-all duration-300 h-[240px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                    <span 
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                    >
                      03
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    VERIFICATION
                  </h3>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Physical inspection by our team in Japan. Every car is verified before purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100 hover:border-slate-300 transition-all duration-300 h-[240px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#0f172a] rounded-full flex items-center justify-center">
                    <span 
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                    >
                      04
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-slate-900 uppercase mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    DELIVERY
                  </h3>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Customs, compliance, and doorstep delivery. We handle all the paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Transparent Sourcing */}
      <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-4"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              TRANSPARENT SOURCING
            </h2>
            <p 
              className="text-xl text-slate-500 max-w-2xl mx-auto"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              One fixed service fee. Zero hidden markups.
            </p>
          </div>

          {/* Single Premium Card - Centered */}
          <div className="max-w-[500px] mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-[#0f172a] relative overflow-hidden shadow-xl">
              
              {/* Authorised Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-full shadow-sm">
                  <Shield className="w-3.5 h-3.5 text-amber-700" />
                  <span 
                    className="text-[10px] font-bold text-amber-900 uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                  >
                    Authorised Brokerage
                  </span>
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 
                  className="text-3xl font-bold text-slate-900 uppercase mb-3 tracking-tight"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  Premium Import Brokerage
                </h3>
                <p 
                  className="text-slate-500 mb-6 text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Transparent flat-fee structure
                </p>
                <div 
                  className="text-5xl font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  $$
                </div>
                <p 
                  className="text-xs text-slate-500"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Flat service fee per import
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">One fixed service fee (No hidden markups)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Full auction sheet & translation access</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">360° physical inspection in Japan</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Complete customs, compliance & logistics handling</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Delivered to your door in pristine condition</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => openModal(undefined, 'brokerage')}
                className="w-full py-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-bold text-sm uppercase tracking-widest rounded-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 active:scale-95"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                START YOUR SEARCH
              </button>

              {/* Trust Signal */}
              <p 
                className="text-xs text-slate-500 text-center mt-4"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                No obligation consultation. Response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Spec Sheet Form */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-2xl">
          
          {/* Form Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-4"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              START YOUR ORDER
            </h2>
            <p 
              className="text-xl text-slate-500"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Tell us what you&apos;re looking for
            </p>
          </div>

          {/* Premium Form */}
          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                  placeholder="John Smith"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="phone"
                  className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Model Dropdown */}
              <div>
                <label 
                  htmlFor="model"
                  className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  Desired Model
                </label>
                <select
                  id="model"
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors appearance-none cursor-pointer"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <option value="" className="text-slate-400">Select a model</option>
                  <option value="crown" className="text-slate-900">Toyota Crown</option>
                  <option value="markx" className="text-slate-900">Toyota Mark X</option>
                  <option value="lexus-is" className="text-slate-900">Lexus IS Series</option>
                  <option value="lexus-gs" className="text-slate-900">Lexus GS Series</option>
                  <option value="other" className="text-slate-900">Other Model</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label 
                  htmlFor="budget"
                  className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors appearance-none cursor-pointer"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <option value="" className="text-slate-400">Select your budget</option>
                  <option value="10-15k" className="text-slate-900">$10,000 - $15,000</option>
                  <option value="15-20k" className="text-slate-900">$15,000 - $20,000</option>
                  <option value="20-30k" className="text-slate-900">$20,000 - $30,000</option>
                  <option value="30k+" className="text-slate-900">$30,000+</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
              >
                SUBMIT REQUEST
              </button>

              <p 
                className="text-sm text-slate-500 text-center mt-4"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Our team will contact you within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}