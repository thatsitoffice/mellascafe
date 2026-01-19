"use client";

import { useState, useEffect } from "react";
import { STATS } from "@/data/home";
import { useIntersection } from "@/lib/useIntersection";
import Section from "./Section";

// Simple CountUp Component
const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useIntersection();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export default function StatsCounters() {
  return (
    <div className="py-20 bg-accent relative overflow-hidden">
      {/* Pattern Overlay (Optional) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-white/20 md:divide-x">
          {STATS.map((stat) => (
            <div key={stat.id} className="p-4">
              <div className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix || ""} />
              </div>
              <div className="text-black/60 font-bold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
