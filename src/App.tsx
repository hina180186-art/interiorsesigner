import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Marquee from './Marquee';
import Portfolio from './Portfolio';
import Process from './Process';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Marquee />
      <Portfolio />
      <Process />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
