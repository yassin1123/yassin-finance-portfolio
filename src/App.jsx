import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function useScrollVisibility(threshold = 0.15) {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'experience', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold, rootMargin: '-50px 0px -50px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return visibleSections;
}

function App() {
  const visibleSections = useScrollVisibility(0.1);

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <Hero />
      <About isVisible={visibleSections.about} />
      <Projects isVisible={visibleSections.projects} />
      <Skills isVisible={visibleSections.skills} />
      <Experience isVisible={visibleSections.experience} />
      <Contact isVisible={visibleSections.contact} />
    </div>
  );
}

export default App;
