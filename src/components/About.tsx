import Reveal from './motion/Reveal';
import ImageReveal from './motion/ImageReveal';
import { PortraitFrame } from './ui/portrait-frame';
import { useEffect, useRef } from 'react';

const SKILLS = [
  'Python', 'Machine Learning', 'Computer Vision', 'React', 'Next.js',
  'TypeScript', 'FastAPI', 'Node.js', 'Docker', 'Linux', 'Git',
  'Local LLMs', 'Automation',
  'Metasploit', 'John the Ripper', 'Hydra', 'Nmap', 'Ollama', 'Claude Code',
];

const MARQUEE_ROW = [...SKILLS, ...SKILLS];

export default function About() {
  const marqueeRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const targetToObserve = marquee.parentElement || marquee;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            marquee.style.animationPlayState = 'running';
          } else {
            marquee.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(targetToObserve);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-page">
      <div className="about-inner">
        {/* Bio text + portrait frame */}
        <div className="about-top">
          <div className="about-bio">
            <Reveal>
              <p className="about-bio-name">
                I'm Flynn Maxwel D, a Computer Science Engineering student
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="about-bio-intro">
                I don't see computers as machines, but as complex systems shaped by
                structure and intent. What began as curiosity about what happens beneath
                the screen grew into a passion for building thoughtful systems that
                balance performance with human experience.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-bio-body">
                During periods of isolation, working with logic and machines gave me
                clarity and shaped the way I approach technology today. I learn by
                understanding how things work, building them, testing them, and
                sometimes breaking them.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="about-portrait">
            <ImageReveal delay={0.1}>
              <PortraitFrame src="/images/me.png" alt="Portrait visual of Flynn Maxwel D" />
            </ImageReveal>
          </Reveal>
        </div>

        {/* Skills — scrolling index marquee */}
        <Reveal delay={0.15}>
          <div className="about-skills">
            <span className="about-skills-label">Stack — {SKILLS.length} tools</span>
            <div className="about-skills-mask">
              <ul className="about-skills-track" ref={marqueeRef} aria-label="Technology stack">
                {MARQUEE_ROW.map((skill, i) => (
                  <li className="about-skill" key={`${skill}-${i}`}>
                    <i aria-hidden="true">{String((i % SKILLS.length) + 1).padStart(2, '0')}</i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
