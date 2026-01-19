export default function WorkingHours() {
  return (
    <div className="relative w-full py-20 md:py-32 bg-surface border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">Reservation</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Working Hours</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                We are open 7 days a week. Join us for a unique experience, great drinks, and unforgettable moments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-white hover:text-black text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
                Book a Table
              </button>
              <button className="border border-white/20 text-white hover:border-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hours Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              
              <div className="bg-surface p-8 sm:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors">
                <span className="text-accent font-serif text-xl italic mb-2">Sunday to Tuesday</span>
                <span className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  10<span className="text-accent">:</span>00
                </span>
                <span className="text-white/40 my-2 text-sm uppercase tracking-widest">to</span>
                <span className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  22<span className="text-accent">:</span>00
                </span>
              </div>

              <div className="bg-surface p-8 sm:p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors">
                <span className="text-accent font-serif text-xl italic mb-2">Friday to Saturday</span>
                <span className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  12<span className="text-accent">:</span>00
                </span>
                <span className="text-white/40 my-2 text-sm uppercase tracking-widest">to</span>
                <span className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  01<span className="text-accent">:</span>00
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
