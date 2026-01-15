import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden pt-24">
      {/* 1. HERO SECTION (Premium Navy Blue Banner) */}
      <div className="w-full bg-[#0f172a] py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-thin text-white tracking-wide break-words">
          Connect With Us
        </h1>
        <p className="mt-4 text-slate-300 font-light text-lg tracking-wider uppercase break-words">
          Concierge Import Services
        </p>
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24">
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: THE FORM (Luxury "Underline" Style) */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-thin text-slate-900">Contact Us</h2>
              <div className="w-12 h-0.5 bg-slate-900"></div> {/* decorative line */}
            </div>

            <form className="space-y-8 mt-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    className="w-full border-b border-gray-300 py-3 bg-transparent text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <input 
                    type="tel" 
                    placeholder="Your Mobile*" 
                    className="w-full border-b border-gray-300 py-3 bg-transparent text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="group">
                <input 
                  type="email" 
                  placeholder="Your Email*" 
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light placeholder-gray-400"
                />
              </div>

              {/* Row 3 */}
              <div className="group">
                <input 
                  type="text" 
                  placeholder="Subject (e.g. Toyota Crown Auction)" 
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light placeholder-gray-400"
                />
              </div>

              {/* Row 4 */}
              <div className="group">
                <textarea 
                  rows={4}
                  placeholder="Description*" 
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button className="w-full md:w-auto border border-slate-900 text-slate-900 px-12 py-4 uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO & MAP */}
          <div className="flex flex-col space-y-12">
            
            {/* Info Block */}
            <div className="bg-slate-50 p-8 md:p-12 space-y-8">
              <h3 className="text-xl font-light uppercase tracking-widest text-slate-900 border-b border-gray-200 pb-4">
                Visit Us Today
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-slate-900 font-medium">Headquarters</p>
                    <p className="text-slate-500 font-light">Level 4, Gulshan Avenue<br/>Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-slate-900 font-medium">Concierge Line</p>
                    <p className="text-slate-500 font-light">+880 1711-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-slate-900 font-medium">Trading Hours</p>
                    <p className="text-slate-500 font-light">Mon - Sat: 10am - 8pm<br/><span className="text-xs uppercase text-slate-400">By Appointment Only</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 bg-slate-200 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex flex-col items-center gap-3">
                    <MapPin className="w-8 h-8 text-slate-400 group-hover:text-red-600 transition-colors" />
                    <span className="text-slate-500 text-sm tracking-widest uppercase">View on Google Maps</span>
                 </div>
              </div>
              {/* Overlay link would go here */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}