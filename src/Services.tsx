import { useReveal } from './hooks';

const services = [
  {
    number: '01',
    title: 'Full Home Design',
    description: 'End-to-end interior design for new builds and complete renovations. From initial concept through final styling — we handle every detail so you can simply come home to something beautiful.',
    details: ['Space Planning', 'Material Selection', 'Custom Millwork', 'Furniture Curation', 'Art Consultation', 'Project Management'],
  },
  {
    number: '02',
    title: 'Room Refresh',
    description: 'Targeted design for a single room or specific area. Perfect when you know something needs to change but aren\'t sure where to start. We bring clarity, cohesion, and confidence.',
    details: ['Layout Optimization', 'Color Consultation', 'Furniture Sourcing', 'Lighting Design', 'Styling & Accessorizing'],
  },
  {
    number: '03',
    title: 'Kitchen & Bath',
    description: 'The most complex rooms in any home deserve the most thoughtful design. We specialize in kitchens and bathrooms that are as functional as they are beautiful — built to last decades.',
    details: ['Cabinet Design', 'Tile & Stone Selection', 'Fixture Specification', 'Appliance Planning', 'Contractor Coordination'],
  },
  {
    number: '04',
    title: 'Design Advisory',
    description: 'For the hands-on homeowner. We provide expert guidance, trade resources, and a clear design direction — then you execute at your own pace with us on speed dial.',
    details: ['Concept Development', 'Shopping Lists', 'Trade Discounts', 'Virtual Consultations', 'Floor Plans & Elevations'],
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-24 md:py-36 bg-charcoal text-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="reveal mb-16 md:mb-24">
          <span className="text-xs tracking-[0.4em] uppercase text-white/50 font-sans block mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl">
            Every project is
            <br />
            <span className="italic">different. Our process</span>
            <br />
            stays the same.
          </h2>
        </div>

        {/* Services List */}
        <div className="stagger-children">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-t border-white/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 hover:border-sage/40 transition-colors duration-500"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-2xl text-sage/60 font-light">{service.number}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light group-hover:text-sage transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-3">
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-xs tracking-wider text-white/40 uppercase flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-sage/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA */}
        <div className="reveal mt-16 md:mt-20 text-center">
          <p className="text-white/50 font-light mb-6">
            Not sure where to start? Let's talk about your space.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-white/20 text-sm tracking-[0.2em] uppercase text-white hover:bg-white hover:text-charcoal transition-all duration-500"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
