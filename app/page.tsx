import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import WorkingHours from "@/components/WorkingHours";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import StatsCounters from "@/components/StatsCounters";
import AppDownload from "@/components/AppDownload";
import BlogSlider from "@/components/BlogSlider";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      {/* 2) HERO Slider */}
      <HeroSlider />

      {/* 3) About Us Teaser */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] lg:h-[500px] w-full group overflow-hidden rounded-sm">
            <Image 
              src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2000&auto=format&fit=crop"
              alt="About Mella's"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[10px] border-white/5 pointer-events-none z-10" />
          </div>
          
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">About Us</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Founded in 2010, Mella's Café & Lounge Bar has become a staple for night owls and cocktail enthusiasts alike. We believe in the power of good company and even better drinks.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Our interior is designed to provide a cozy yet sophisticated atmosphere, perfect for a romantic date or a night out with friends. Experience the difference of premium service.
            </p>
            <button className="bg-transparent border border-white text-white hover:bg-accent hover:border-accent hover:text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </Section>

      {/* 4) Our Menu Teaser */}
      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Discover</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Always Quality Drinks</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Our menu features a wide selection of signature cocktails, fine wines, and premium spirits. We also offer delicious bar snacks to complement your drinks.
            </p>
            <button className="bg-accent text-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
              View Menu
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[400px] w-full group">
             <Image 
              src="https://images.unsplash.com/photo-1536935338788-843bb6319851?q=80&w=2000&auto=format&fit=crop"
              alt="Cocktails"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </Section>

      {/* 5) Our Bartender Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] lg:h-[600px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1595977507348-18c7c9cb6d5e?q=80&w=2000&auto=format&fit=crop"
              alt="Bartender"
              fill
              className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Use the Tips of Our Bartender</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              "The secret to a great cocktail is not just the ingredients, but the passion you put into mixing them. Let us surprise you with our signature creations."
            </p>
            <button className="border-b border-white text-white hover:text-accent hover:border-accent pb-1 font-serif italic text-xl transition-all duration-300">
              Meet the Team
            </button>
          </div>
        </div>
      </Section>

      {/* 6) Features */}
      <FeatureCards />

      {/* 7) Working Hours */}
      <WorkingHours />

      {/* 8) Testimonials */}
      <TestimonialsSlider />

      {/* 9) Counters */}
      <StatsCounters />

      {/* 10) App Download */}
      <AppDownload />

      {/* 11) Latest News */}
      <BlogSlider />

      {/* 12) Newsletter */}
      <NewsletterForm />
    </>
  );
}
