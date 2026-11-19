import { useReveal } from './hooks';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Nora didn't just design our home — she understood how we live in it. Every corner feels intentional, every material tells a story. We still discover new details we love, two years later.",
    author: 'Sarah & James Mitchell',
    project: 'The Hawthorne Residence',
    location: 'Portland, OR',
  },
  {
    quote: "Working with Atelier Nora was the most collaborative creative experience I've ever had. She listened more than she spoke, and the result was a space that feels more 'us' than we could have articulated ourselves.",
    author: 'Dr. Maya Patel',
    project: 'Pearl District Loft',
    location: 'Portland, OR',
  },
  {
    quote: "I was nervous about hiring a designer — worried my taste would get lost. Instead, Nora amplified it. She took the things I loved and made them work together in ways I never imagined. It's the home I always wanted but didn't know how to ask for.",
    author: 'Rebecca Torres',
    project: 'Coastal Retreat',
    location: 'Cannon Beach, OR',
  },
];

export default function Testimonials() {
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-cream-dark" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-sans block mb-4">
            Kind Words
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            From our <span className="italic">clients</span>
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="relative min-h-[280px]">
              {/* Large quote mark */}
              <span className="absolute -top-4 -left-2 font-serif text-8xl text-sage/20 leading-none select-none">
                "
              </span>
              <blockquote className="relative z-10">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal leading-[1.4] pl-6 md:pl-10">
                  {testimonials[active].quote}
                </p>
              </blockquote>
            </div>

            <div className="mt-10 pl-6 md:pl-10">
              <p className="text-charcoal font-medium text-sm">{testimonials[active].author}</p>
              <p className="text-warm-gray text-xs tracking-wider uppercase mt-1">
                {testimonials[active].project} — {testimonials[active].location}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 lg:gap-6 lg:items-end lg:pt-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-sm transition-all duration-500 border ${
                  i === active
                    ? 'bg-linen border-sage/20 shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-linen/50'
                }`}
              >
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  i === active ? 'text-charcoal' : 'text-warm-gray'
                }`}>
                  {t.author.split(' ').slice(-1)[0]}
                </p>
                <p className="text-xs text-warm-gray mt-1">{t.project}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Press Logos */}
        <div className="reveal mt-20 md:mt-28 pt-12 border-t border-charcoal/10">
          <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-8">As Featured In</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            {['Architectural Digest', 'Dwell', 'Elle Decor', 'House Beautiful', 'Luxe Interiors'].map((pub) => (
              <span
                key={pub}
                className="font-serif text-lg md:text-xl text-charcoal/30 hover:text-charcoal/60 transition-colors duration-300 cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
