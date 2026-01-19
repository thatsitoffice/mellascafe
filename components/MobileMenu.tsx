"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenReservation }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[45]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-surface z-[50] border-l border-white/10 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-xl font-serif font-bold text-white">Menu</span>
              <button onClick={onClose} className="text-white/70 hover:text-accent">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav className="flex flex-col space-y-6">
                {NAV_LINKS.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href}
                    onClick={onClose}
                    className="text-lg font-medium text-white hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} className="text-white/30 group-hover:text-accent" />}
                  </Link>
                ))}
              </nav>

              <div className="mt-12">
                 <button 
                  onClick={() => { onClose(); onOpenReservation(); }}
                  className="w-full bg-accent text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
                >
                  Reservation
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-white/10">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white/50 hover:text-accent"><Facebook size={20} /></a>
                <a href="#" className="text-white/50 hover:text-accent"><Instagram size={20} /></a>
                <a href="#" className="text-white/50 hover:text-accent"><Twitter size={20} /></a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
