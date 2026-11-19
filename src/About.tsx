import { useReveal } from './hooks';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 md:py-36 bg-linen" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="reveal mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-sans">
            Our Studio
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 reveal-left">
            <div className="img-hover rounded-sm">
              <img
                src="https://image.qwenlm.ai/generated-images/82af658c-1bf3-4cb1-bea2-c64e12e009d5/_result.png"
                alt="Nora in her studio"
                className="w-full aspect-[3/4] object-cover rounded-sm"
              />
            </div>
            <p className="mt-4 text-xs tracking-wider text-warm-gray uppercase">
              Nora Chen, Founder & Principal Designer
            </p>
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-7 lg:pt-12">
            <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-charcoal mb-8 md:mb-12">
              Design isn't about
              <br />
              <span className="italic">filling a room.</span>
              <br />
              It's about how the room
              <br />
              <span className="italic">fills you.</span>
            </h2>

            <div className="reveal space-y-6 max-w-xl">
              <p className="text-warm-gray font-light leading-[1.8] text-base md:text-lg">
                Atelier Nora was founded on a simple belief: your home should feel like the most 
                honest version of yourself. Not a showroom. Not a trend. Just a space where every 
                detail was chosen with intention.
              </p>
              <p className="text-warm-gray font-light leading-[1.8] text-base md:text-lg">
                Based in Portland, Oregon, we work with homeowners across the Pacific Northwest 
                and beyond — from gut renovations to single-room transformations. Our approach is 
                collaborative, unhurried, and deeply personal.
              </p>
              <p className="text-warm-gray font-light leading-[1.8] text-base md:text-lg">
                We believe in natural materials, in the beauty of patina, in spaces that age 
                gracefully. We believe the best interiors feel inevitable — as though they were 
                always meant to be.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-8 mt-12 md:mt-16 pt-10 border-t border-charcoal/10">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal font-light">120+</span>
                <p className="text-xs tracking-wider uppercase text-warm-gray mt-2">Projects Completed</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal font-light">8</span>
                <p className="text-xs tracking-wider uppercase text-warm-gray mt-2">Years of Practice</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal font-light">14</span>
                <p className="text-xs tracking-wider uppercase text-warm-gray mt-2">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
