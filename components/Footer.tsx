"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, NAV_LINKS } from "@/data/site";
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-6">
               <h2 className="font-serif text-3xl font-bold text-white tracking-tighter">
                Mella<span className="text-accent">'</span>s
              </h2>
            </Link>
            <p className="text-white/50 mb-6 leading-relaxed">
              {FOOTER_LINKS.about.text}
            </p>
            <Link href="#" className="text-white hover:text-accent font-bold uppercase text-xs tracking-widest border-b border-white/20 pb-1 hover:border-accent transition-all">
              Read More
            </Link>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70">
                <Phone className="text-accent shrink-0" size={20} />
                <span>{FOOTER_LINKS.contact.phone}</span>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <Mail className="text-accent shrink-0" size={20} />
                <span>{FOOTER_LINKS.contact.email}</span>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>{FOOTER_LINKS.contact.address}</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              {FOOTER_LINKS.socials.map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-white transition-all">
                   {/* Simplified for demo, ideally map icon names */}
                   <span className="capitalize text-xs">{social.icon[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Gallery (Simulated) */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-8">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="relative aspect-square bg-white/5 overflow-hidden group">
                  <Image
                    src={`https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200&auto=format&fit=crop`}
                    alt="Gallery"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <a href="#" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-accent transition-colors">
              See More on Instagram
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Mella's Café & Lounge Bar. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
