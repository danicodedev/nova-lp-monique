import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import About from './components/About';
import InfographicSection from './components/InfographicSection';
import Specialties from './components/Specialties';
import Services from './components/Services';
import Process from './components/Process';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="selection:bg-blush-200 selection:text-ink-900">
      <Navbar />
      <main id="topo">
        <Hero />
        <ProblemSection />
        <About />
        <InfographicSection />
        <Specialties />
        <Services />
        <Process />
        <Content />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
