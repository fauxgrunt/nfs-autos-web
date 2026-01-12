'use client';

import Link from 'next/link';
import { Ship, Container, ArrowRight, Anchor } from 'lucide-react';

export default function ImportBrokeragePage() {
  return (
    <main className="min-h-screen bg-slate-50 relative flex items-center justify-center overflow-hidden px-6">
      
      {/* 1. ATMOSPHERE (Background Gradients & Mesh) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-400/10 rounded-full blur-[100px]" />
      </div>

      {/* 2. MAIN GLASS CONTAINER */}
      <div className="relative w-full max-w-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-16 text-center">
        
        {/* Animated Icon Header */}
        <div className="flex justify-center mb-8 gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-300 animate-pulse">
                <Ship className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-red-500 relative">
                <Container className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-300 animate-pulse">
                <Anchor className="w-8 h-8" />
            </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    System Under Development
                </span>
            </div>

            <h1 className="font-chakra font-black italic text-4xl md:text-6xl uppercase tracking-tighter text-slate-900 leading-none">
                Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">JDM</span> Import<br />
                Brokerage
            </h1>

            <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto leading-relaxed">
                We are building a direct portal for you to browse, bid, and import vehicles straight from Japanese Auction Houses (USS, TAA, JU).
            </p>
        </div>

        {/* Progress Bar (Visual Flair) */}
        <div className="max-w-md mx-auto mt-10 mb-12">
            <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 mb-2">
                <span>System Build</span>
                <span>75% Complete</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[75%] rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12" />
                </div>
            </div>
        </div>

        {/* 3. CTA: "Don't Wait" */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60">
            <h3 className="font-chakra font-bold italic text-slate-900 uppercase text-lg mb-2">
                Can't wait for the portal?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
                Our brokerage team is active manually. We can still source your Lexus Mark X or Crown today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-chakra font-bold italic uppercase tracking-wider hover:bg-red-600 transition-colors shadow-lg shadow-slate-900/20"
                >
                    Inquire Manually
                    <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                    href="/inventory"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-lg font-chakra font-bold italic uppercase tracking-wider hover:bg-slate-50 transition-colors"
                >
                    View Current Stock
                </Link>
            </div>
        </div>

      </div>
    </main>
  );
}