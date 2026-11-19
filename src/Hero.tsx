import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/c6c40009-ce8f-4826-a606-33ca14686b54/_result.png"
          alt="Modern living room interior"
          className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${
            loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p
              className={`text-sm tracking-[0.3em] uppercase text-white/70 mb-4 md:mb-6 transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Interior Design Studio — Est. 2016
            </p>
            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] transition-all duration-1000 delay-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Spaces that
              <br />
              <span className="italic font-light">speak softly</span>
              <br />
              and live loudly.
            </h1>
          </div>

          <div
            className={`md:col-span-4 md:text-right transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-white/80 font-light leading-relaxed text-sm md:text-base max-w-sm md:ml-auto">
              We design residential interiors that balance beauty with the way you actually live — 
              thoughtful, enduring, and unmistakably yours.
            </p>
            <a
              href="#portfolio"
              className="inline-block mt-6 md:mt-8 text-sm tracking-[0.2em] uppercase text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1.5s] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/80 animate-[fadeInUp_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
