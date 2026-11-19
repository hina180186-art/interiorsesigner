export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">Atelier Nora</h3>
            <p className="text-white/50 font-light leading-relaxed text-sm max-w-sm">
              A Portland-based interior design studio creating spaces that balance beauty, 
              function, and the art of living well.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Navigate</p>
            <ul className="space-y-3">
              {['Studio', 'Projects', 'Services', 'Journal', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-sage transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Stay Inspired</p>
            <p className="text-white/50 font-light text-sm mb-4">
              Quarterly design insights, studio updates, and behind-the-scenes looks at our projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-white/20 pb-2 text-sm text-white font-light focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-white/30"
              />
              <button className="ml-4 text-xs tracking-[0.2em] uppercase text-sage hover:text-white transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-light">
            © 2024 Atelier Nora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
