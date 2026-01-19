"use client";

import Image from "next/image";
import { Apple, Play } from "lucide-react";
import Section from "./Section";

export default function AppDownload() {
  return (
    <Section noPadding className="bg-surface overflow-visible py-20 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="order-2 lg:order-1 lg:py-32">
          <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Mobile App</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Download Our Application</h2>
          <p className="text-white/60 mb-8 max-w-md leading-relaxed">
            Order your favorite drinks and food directly from your phone. Get exclusive offers and track your delivery in real-time.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-sm hover:bg-accent hover:text-white transition-all duration-300">
              <Apple size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold opacity-60">Download on the</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
            
            <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-sm hover:bg-accent hover:border-accent transition-all duration-300">
              <Play size={24} className="fill-current" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold opacity-60">Get it on</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Image - sticking out */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full flex items-end justify-center">
          {/* Simple Phone Mockup via CSS/Image since we don't have assets */}
          <div className="relative w-[280px] h-[500px] lg:h-[550px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-2xl lg:translate-y-12 overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop"
              alt="App Screenshot"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-white font-serif text-2xl font-bold">Mella's App</h3>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-20"></div>
          </div>
        </div>

      </div>
    </Section>
  );
}
