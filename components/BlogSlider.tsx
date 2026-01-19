"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LATEST_NEWS } from "@/data/home";
import Section from "./Section";
import { ArrowRight, Calendar, User } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSlider() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Our Blog</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Latest News & Events</h2>
        </div>
        <Link href="#" className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors font-bold text-sm uppercase tracking-widest">
          All Publications <ArrowRight size={16} />
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {LATEST_NEWS.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="group h-full flex flex-col">
              <div className="relative h-64 w-full overflow-hidden mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-sm">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-white/50 mb-3 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={12} /> {post.author}
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors">
                <Link href="#">{post.title}</Link>
              </h3>

              <p className="text-white/60 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>

              <Link href="#" className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mt-auto">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 text-center md:hidden">
        <Link href="#" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-bold text-sm uppercase tracking-widest">
          All Publications <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
