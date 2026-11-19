import { useState } from 'react';
import { useNavScroll } from './hooks';

export default function Navigation() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Studio', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-linen/90 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wide text-charcoal group-hover:text-sage-dark transition-colors duration-300">
              Atelier Nora
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-light tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-sage after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-linen transition-all duration-500 flex flex-col items-center justify-center gap-8 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl font-light text-charcoal hover:text-sage transition-colors duration-300"
            style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
