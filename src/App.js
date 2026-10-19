import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navLinks } from './data';
import './App.css';

// Section active = la dernière dont le haut a dépassé le premier tiers de l'écran
function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const update = () => {
      const limit = window.innerHeight / 3;
      let current = null;
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= limit) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = navLinks[navLinks.length - 1].id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return active;
}

export default function App() {
  const active = useActiveSection();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#a-propos">
        Aller au contenu
      </a>
      <Navbar active={active} />
      <Hero />
      <main>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
