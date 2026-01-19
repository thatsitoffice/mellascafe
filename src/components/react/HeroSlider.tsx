import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { HERO_SLIDES } from "../../data/home";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
              <div className="overflow-hidden mb-4">
                <span className="text-accent text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                  {slide.eyebrow}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-4xl leading-tight">
                {slide.title}
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 font-light">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent hover:bg-white hover:text-black text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
                  {slide.ctaPrimary}
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
                  {slide.ctaSecondary}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
