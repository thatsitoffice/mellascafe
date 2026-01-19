import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00"
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation simulated! Thank you.");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-surface border border-white/10 p-8 w-full max-w-lg relative rounded-sm shadow-2xl pointer-events-auto">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-accent transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <span className="text-accent uppercase text-xs tracking-widest font-bold mb-2 block">Reservation</span>
                <h2 className="text-3xl font-serif text-white">Book a Table</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/60 mb-1 uppercase tracking-wider">Date</label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      className="w-full bg-black/20 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1 uppercase tracking-wider">Time</label>
                    <select 
                      name="time"
                      className="w-full bg-black/20 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      onChange={handleChange}
                      defaultValue="19:00"
                    >
                      {Array.from({ length: 13 }).map((_, i) => {
                        const hour = 10 + i;
                        return <option key={hour} value={`${hour}:00`}>{hour}:00</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-1 uppercase tracking-wider">People</label>
                  <select 
                    name="guests"
                    className="w-full bg-black/20 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    onChange={handleChange}
                    defaultValue="2"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
                    ))}
                    <option value="more">More (Contact us)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/20 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      onChange={handleChange}
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="w-full bg-black/20 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      onChange={handleChange}
                    />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest py-4 transition-all duration-300 mt-4"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
