"use client";

import { Utensils, Wine, UserCheck, type LucideIcon } from "lucide-react";
import { FEATURES } from "@/data/home";
import Section from "./Section";

const iconMap: Record<string, LucideIcon> = {
  "Utensils": Utensils,
  "Wine": Wine,
  "UserCheck": UserCheck
};

export default function FeatureCards() {
  return (
    <Section>
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Our Features</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">Why People Choose Us?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div 
              key={feature.id}
              className="group p-8 border border-white/10 hover:border-accent bg-surface hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-accent/10" />
              
              <div className="mb-6 inline-block p-4 border border-white/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {Icon && <Icon size={32} strokeWidth={1.5} />}
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
