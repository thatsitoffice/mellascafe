"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 500);
  };

  return (
    <div className="py-20 border-t border-white/5 bg-surface">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Newsletter</span>
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-white/60 mb-8">
          Stay updated with our latest news, events and special offers. We promise not to spam you.
        </p>

        {status === "success" ? (
          <div className="bg-green-500/10 text-green-500 p-4 rounded-sm border border-green-500/20">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/20 border border-white/10 text-white px-6 py-4 pr-16 focus:outline-none focus:border-accent transition-colors rounded-sm"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-accent hover:bg-white hover:text-black text-white px-4 rounded-sm transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
