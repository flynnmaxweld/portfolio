import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import AnimatedSplit from './motion/AnimatedSplit';
import Navbar from './Navbar';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pastHero, setPastHero] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.92]);
  const heroRadius = useTransform(scrollYProgress, [0, 0.75], ['0px', '48px']);
  const heroBorderOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 0.12]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ['0px', '-50px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Back to top observer
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries[0].isIntersecting;
        setPastHero(!intersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Outer Framed Wrapper for Hero Scroll Effect */}
      <div ref={containerRef} className="lassie-hero-outer">
        <motion.section
          ref={heroRef}
          className="lassie-hero-section"
          style={{
            scale: heroScale,
            borderRadius: heroRadius,
            borderColor: useTransform(heroBorderOpacity, (v) => `rgba(239, 236, 230, ${v})`),
          }}
        >
          {/* Background Atmospheric Layer */}
          <div className="lassie-hero-bg" />
          <div className="lassie-hero-overlay" />

          <motion.div
            className="lassie-hero-content"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="hero-eyebrow-wrapper">
              <motion.span
                className="hero-eyebrow"
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                CS &amp; AI/ML ENGINEER
              </motion.span>
            </div>

            <AnimatedSplit
              as="h1"
              className="lassie-hero-headline"
              inView={false}
              delay={0.6}
              stagger={0.3}
              duration={0.95}
              lines={[
                { text: 'Learning how systems work.' },
                { text: 'Designing how they feel.', italic: true },
              ]}
            />
          </motion.div>

          {/* Luke Baffait style bottom navigation bar anchored inside Hero */}
          <Navbar />
        </motion.section>
      </div>

      <a
        href="#top"
        className={`back-top${pastHero ? ' back-top--visible' : ''}`}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="visually-hidden">Back to top</span>
      </a>
    </>
  );
}

