"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TESTIMONIALS } from "@/data/home";
import Section from "./Section";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  return (
    <Section className="bg-bg">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">What Our Visitors Say</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-surface p-8 border border-white/5 relative h-full flex flex-col pt-12">
                <div className="absolute top-8 left-8 text-accent/20">
                  <Quote size={40} />
                </div>
                
                <p className="text-white/70 italic mb-8 relative z-10 min-h-[80px]">
                  "{item.content}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image 
                      src={item.avatar} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold">{item.name}</h4>
                    <span className="text-accent text-xs uppercase tracking-wider">{item.date}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
