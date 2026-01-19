"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export default function Section({ children, className, id, noPadding = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "relative w-full overflow-hidden", 
        !noPadding && "py-20 md:py-32", 
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
