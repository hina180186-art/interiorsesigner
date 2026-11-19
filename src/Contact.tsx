import { useReveal } from './hooks';
import { useState } from 'react';

export default function Contact() {
  const ref = useReveal();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-linen" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="text-xs tracking-[0.4em] uppercase text-warm-gray font-sans block mb-4">
                Get In Touch
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-8">
                Let's create
                <br />
                <span className="italic">something</span>
                <br />
                beautiful.
              </h2>
              <p className="text-warm-gray font-light leading-relaxed mb-10 max-w-md">
                Every great project starts with a conversation. Tell us about your space, 
                your vision, and how you want to feel when you walk through the door.
              </p>
            </div>

            <div className="reveal space-y-6">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-1">Studio</p>
                <p className="text-charcoal font-light">3847 SE Division Street, Portland, OR 97202</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-1">Email</p>
                <a href="mailto:hello@ateliernora.com" className="text-charcoal font-light hover:text-sage transition-colors duration-300">
                  hello@ateliernora.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-1">Phone</p>
                <a href="tel:+15039467200" className="text-charcoal font-light hover:text-sage transition-colors duration-300">
                  (503) 946-7200
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-1">Hours</p>
                <p className="text-charcoal font-light">Monday – Friday, 9am – 5pm</p>
                <p className="text-warm-gray font-light text-sm">By appointment on weekends</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal flex gap-6 mt-10">
              {['Instagram', 'Pinterest', 'Houzz'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-[0.2em] uppercase text-warm-gray hover:text-sage transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="reveal">
              {submitted ? (
                <div className="bg-cream rounded-sm p-10 md:p-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-charcoal mb-3">Thank you</h3>
                  <p className="text-warm-gray font-light">
                    We'll be in touch within 48 hours. We're looking forward to learning about your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-warm-gray block mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-charcoal font-light focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-charcoal/30"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-warm-gray block mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-charcoal font-light focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-charcoal/30"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-warm-gray block mb-3">
                      Project Type
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-charcoal font-light focus:outline-none focus:border-sage transition-colors duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="full-home">Full Home Design</option>
                      <option value="room-refresh">Room Refresh</option>
                      <option value="kitchen-bath">Kitchen & Bath</option>
                      <option value="advisory">Design Advisory</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-warm-gray block mb-3">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-charcoal font-light focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-charcoal/30 resize-none"
                      placeholder="What's the scope? What inspires you? Any timeline in mind?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm tracking-[0.2em] uppercase hover:bg-sage-dark transition-all duration-500"
                  >
                    Send Inquiry
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
