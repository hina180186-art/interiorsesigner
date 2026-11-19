import { useReveal } from './hooks';

const projects = [
  {
    title: 'The Hawthorne Residence',
    category: 'Full Home Renovation',
    location: 'Portland, OR',
    year: '2024',
    image: 'https://image.qwenlm.ai/generated-images/65c30f3d-5075-4f64-968f-3822a34280f7/_result.png',
    description: 'A 1920s craftsman reimagined for modern family life — preserving original character while introducing warmth and light.',
    size: 'large',
  },
  {
    title: 'Pearl District Loft',
    category: 'Urban Living',
    location: 'Portland, OR',
    year: '2023',
    image: 'https://image.qwenlm.ai/generated-images/98fd1262-781b-408a-bcbb-94ecf14e0cd6/_result.png',
    description: 'Industrial bones meet softness. A loft conversion that balances raw concrete with layered textiles and organic forms.',
    size: 'medium',
  },
  {
    title: 'Coastal Retreat',
    category: 'Kitchen & Bath',
    location: 'Cannon Beach, OR',
    year: '2024',
    image: 'https://image.qwenlm.ai/generated-images/ed357a52-7c4b-4491-a658-bfa98f407dfc/_result.png',
    description: 'A beach house kitchen designed around the rhythm of gathering — open, resilient, and quietly luxurious.',
    size: 'medium',
  },
  {
    title: 'The Sellwood Bathroom',
    category: 'Bathroom Design',
    location: 'Sellwood, OR',
    year: '2023',
    image: 'https://image.qwenlm.ai/generated-images/b91196e4-8bb1-41eb-b42a-b5a4eaffb2c1/_result.png',
    description: 'A sanctuary of stone and steam. Natural materials create a spa-like atmosphere in a modest footprint.',
    size: 'large',
  },
];

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-sans block mb-4">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
              Projects that
              <br />
              <span className="italic">tell stories</span>
            </h2>
          </div>
          <p className="text-warm-gray font-light mt-6 md:mt-0 max-w-sm text-sm leading-relaxed">
            Each project begins with listening. Here's a selection of spaces we've had the privilege to shape.
          </p>
        </div>

        {/* Projects Grid - Asymmetric */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 1 - Large */}
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-7 img-hover rounded-sm">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full aspect-[16/10] object-cover rounded-sm"
              />
            </div>
            <div className="md:col-span-5 md:pl-6">
              <span className="text-xs tracking-[0.3em] uppercase text-sage font-sans">
                {projects[0].category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal mt-3 mb-4">
                {projects[0].title}
              </h3>
              <p className="text-warm-gray font-light leading-relaxed mb-6">
                {projects[0].description}
              </p>
              <div className="flex items-center gap-4 text-xs tracking-wider text-warm-gray uppercase">
                <span>{projects[0].location}</span>
                <span className="w-8 h-[1px] bg-warm-gray/30" />
                <span>{projects[0].year}</span>
              </div>
            </div>
          </div>

          {/* Projects 2 & 3 - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.slice(1, 3).map((project, i) => (
              <div key={project.title} className="reveal group">
                <div className="img-hover rounded-sm mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/5] object-cover rounded-sm"
                  />
                </div>
                <span className="text-xs tracking-[0.3em] uppercase text-sage font-sans">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-warm-gray font-light leading-relaxed text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-xs tracking-wider text-warm-gray uppercase">
                  <span>{project.location}</span>
                  <span className="w-8 h-[1px] bg-warm-gray/30" />
                  <span>{project.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Project 4 - Large reversed */}
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-5 md:order-2 md:pl-6">
              <div className="img-hover rounded-sm">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full aspect-[16/10] object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:order-1 md:text-right">
              <span className="text-xs tracking-[0.3em] uppercase text-sage font-sans">
                {projects[3].category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal mt-3 mb-4">
                {projects[3].title}
              </h3>
              <p className="text-warm-gray font-light leading-relaxed mb-6 md:ml-auto md:max-w-md">
                {projects[3].description}
              </p>
              <div className="flex items-center gap-4 text-xs tracking-wider text-warm-gray uppercase md:justify-end">
                <span>{projects[3].location}</span>
                <span className="w-8 h-[1px] bg-warm-gray/30" />
                <span>{projects[3].year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
