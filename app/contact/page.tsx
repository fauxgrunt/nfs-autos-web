import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#0B1221] text-white flex flex-col items-center pt-24">
      <div className="max-w-7xl w-full px-4 md:px-6 lg:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16">
        {/* Left/Main Side */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
          <p className="text-lg md:text-xl font-light">
            For bespoke inquiries and showroom appointments, contact our concierge team directly.
          </p>
        </div>

        {/* Right/Details Side */}
        <div className="bg-white text-[#0B1221] rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-sm font-light">Level 4, Gulshan Avenue, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <a href="tel:+8801711XXXXXX" className="text-2xl font-bold hover:text-blue-400 transition-colors">
              +880 1711-XXXXXX
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:concierge@nfsautos.com" className="text-sm font-light hover:underline">
              concierge@nfsautos.com
            </a>
          </div>
          <button className="w-full py-3 bg-[#0B1221] text-white rounded-lg hover:bg-opacity-90 transition-all">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}