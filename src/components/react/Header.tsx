import { useState, useEffect } from "react";
import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../../data/site";
import { cn } from "../../lib/utils";
import MobileMenu from "./MobileMenu";
import ReservationModal from "./ReservationModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-bg/95 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="relative z-50">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tighter">
              Mella<span className="text-accent">'</span>s
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link, idx) => (
              <div key={idx} className="relative group">
                <a 
                  href={link.href} 
                  className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-accent transition-colors py-2 flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
                </a>
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5">Submenu Item 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5">Submenu Item 2</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:block relative text-white hover:text-accent transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            
            <button 
              onClick={() => setReservationOpen(true)}
              className="hidden lg:inline-block bg-accent hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-300"
            >
              Reservation
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white hover:text-accent transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onOpenReservation={() => setReservationOpen(true)}
      />

      <ReservationModal 
        isOpen={reservationOpen} 
        onClose={() => setReservationOpen(false)} 
      />
    </>
  );
}
