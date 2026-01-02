
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Consultant } from './components/Consultant';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Noise/Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <BentoGrid />
        <Consultant />
        
        <section id="portfolio" className="py-24">
          <Portfolio />
        </section>

        <section id="contact" className="py-24 border-t border-white/5">
          <Contact />
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default App;
