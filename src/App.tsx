import { useEffect } from 'react';
import Lenis from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';

export default function App() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Lenis root options={{ autoRaf: true, wheelMultiplier: 1, smoothWheel: !prefersReduced }}>
      <div id="app">
        <div className="bg-blur" aria-hidden="true" />
        <div className="lines-texture" aria-hidden="true" />
        <span id="top" aria-hidden="true" />

        <Hero />
        <About />
        <Work />
        <GithubSection />
        <Contact />
      </div>
    </Lenis>
  );
}
