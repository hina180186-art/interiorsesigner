import { useReveal } from './hooks';

const steps = [
  {
    title: 'Discover',
    description: 'We start by listening. Understanding how you live, what you love, and what "home" means to you. This is where the design begins — not with a mood board, but with a conversation.',
    duration: '1–2 weeks',
  },
  {
    title: 'Design',
    description: 'Concepts take shape through floor plans, material palettes, and curated selections. We present options, refine together, and build a clear vision you can feel excited about.',
    duration: '3–6 weeks',
  },
  {
    title: 'Develop',
    description: 'The detailed work. Specifications, sourcing, contractor coordination. Every measurement, every finish, every delivery is tracked and managed so nothing falls through the cracks.',
    duration: '4–12 weeks',
  },
  {
    title: 'Deliver',
    description: 'Installation day — the moment everything comes together. We style, adjust, and perfect until every detail feels right. Then we hand you the keys to your new space.',
    duration: '1–2 weeks',
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-36 bg-linen" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16 md:mb-24 max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-sans block mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            From first meeting to
            <br />
            <span className="italic">final reveal</span>
          </h2>
          <p className="text-warm-gray font-light leading-relaxed">
            Good design takes time. Our process is deliberate and transparent — 
            you'll always know where we are and where we're headed.
          </p>
        </div>

        {/* Process Steps */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              {/* Number */}
              <span className="font-serif text-6xl md:text-7xl text-charcoal/5 font-light block mb-4">
                0{i + 1}
              </span>
              
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-[calc(100%_-_40px)] h-[1px] bg-charcoal/10" />
              )}

              <h3 className="font-serif text-2xl font-light text-charcoal mb-3 group-hover:text-sage-dark transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-warm-gray font-light leading-relaxed text-sm mb-4">
                {step.description}
              </p>
              <span className="text-xs tracking-wider text-sage uppercase">
                {step.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
