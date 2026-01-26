"use client";

import React from "react";
import { PhoneIcon, MapIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ContactPage = () => {
  return (
    <div className="min-h-[85vh] bg-[#0B1221] text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            Private Client Concierge
          </h1>
          <p className="text-gray-400 mt-6 text-lg">
            For bespoke import inquiries and immediate acquisition requests,
            access our dedicated team directly.
          </p>
          <p className="mt-12 text-sm text-gray-500">
            Location: Sydney, Australia
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
          {/* Call Row */}
          <div
            className="flex items-center justify-between p-6 border-b border-white/10 cursor-pointer group hover:bg-white/5 transition-all duration-300"
            onClick={() => (window.location.href = "tel:+61416378869")}
          >
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-white" />
              <span className="text-lg">Call Agent</span>
            </div>
            <ArrowUpRightIcon className="h-5 w-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          {/* WhatsApp Row */}
          <div
            className="flex items-center justify-between p-6 border-b border-white/10 cursor-pointer group hover:bg-white/5 transition-all duration-300"
            onClick={() =>
              window.open("https://wa.me/61416378869", "_blank")
            }
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">WhatsApp Chat</span>
            </div>
            <ArrowUpRightIcon className="h-5 w-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          {/* Email Row */}
          <div
            className="flex items-center justify-between p-6 cursor-pointer group hover:bg-white/5 transition-all duration-300"
            onClick={() => (window.location.href = "mailto:nfsautos26@gmail.com")}
          >
            <div className="flex items-center gap-4">
              <MapIcon className="h-6 w-6 text-white" />
              <span className="text-lg">Email Support</span>
            </div>
            <ArrowUpRightIcon className="h-5 w-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;