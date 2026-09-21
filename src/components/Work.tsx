import { useState, useCallback, useEffect, useRef } from 'react';
import AnimatedSplit from './motion/AnimatedSplit';

export interface Project {
  num: string;
  title: string;
  headline: string;
  teaser: string;
  desc: string;
  category: string;
  stack: string;
  image?: string;
  href?: string;
  note?: string;
  widgetText: string;
  widgetTask: string;
  widgetStatus: string;
  cardTheme: string;
  metrics?: string;
  challenge?: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'VOID',
    headline: 'VOID handles your heavy lifting',
    teaser: 'Handling research, local LLM inference, and multi-file summaries automatically, without leaving your machine.',
    desc: 'An AI-powered workspace assistant designed for privacy-first productivity. Built to orchestrate multi-file document analysis, vector semantic search, and context extraction locally using quantized ONNX / local LLMs.',
    category: 'Extension',
    stack: 'Python · Local LLMs · Vector DB · Automation',
    image: '/images/void_bg.png',
    href: 'https://github.com/flynnmaxweld/void-ai-workspace-manager',
    metrics: '<35ms Local Query Latency · 0 Data Sent Cloud · 100% Offline Capable',
    challenge: 'Achieving sub-50ms vector similarity lookup while running 4-bit quantized local models on consumer hardware without memory leaks or UI thread blocking.',
    widgetText: 'VOID working...',
    widgetTask: 'Parse & index workspace documentation',
    widgetStatus: 'Context ready',
    cardTheme: 'theme-gold-blue',
  },
  {
    num: '02',
    title: 'A.R.I.S.',
    headline: 'A.R.I.S. perceives your environment',
    teaser: 'Translating raw sensor data and camera streams into real-world autonomous decisions in real time.',
    desc: 'Autonomous Robotics Intelligence System. A high-concurrency perception platform combining multi-camera spatial vector synthesis, object tracking, and decision engines for dynamic environmental navigation.',
    category: 'Artificial Intelligence',
    stack: 'Computer Vision · OpenCV · PyTorch · C++ / Python',
    image: '/images/aris_bg.png',
    note: 'In development — source code coming soon.',
    metrics: '60 FPS Sensor Pipeline · 98.4% Object Detection Precision · <12ms Frame Processing',
    challenge: 'Fusing asynchronous multi-lens video feeds into a unified spatial coordinate map without dropping frames during high-motion tracking.',
    widgetText: 'A.R.I.S. analyzing...',
    widgetTask: 'Synthesize multi-camera spatial vectors',
    widgetStatus: 'Stream active',
    cardTheme: 'theme-sage-amber',
  },
  {
    num: '03',
    title: 'Smart File Organizer',
    headline: 'Organizer cleans your filesystem',
    teaser: 'Learning your workflow patterns, categorizing files, and maintaining clean folder structures automatically.',
    desc: 'An automated background daemon that monitors file system events, extracts metadata, and categorizes unstructured download directories using rule heuristics and natural language classification.',
    category: 'Automation',
    stack: 'Python · OS File Hooks · NLP Heuristics',
    image: '/images/organizer_bg.png',
    href: 'https://github.com/flynnmaxweld/smart-file-organizer',
    metrics: '1,500+ Files Processed/sec · 0.01% CPU Idle Usage · 0 Manual Cleanup Needed',
    challenge: 'Preventing race conditions when handling simultaneous batch file downloads across locked OS file descriptors.',
    widgetText: 'Organizer sorting...',
    widgetTask: 'Relocate 148 untracked downloads',
    widgetStatus: 'Rule applied',
    cardTheme: 'theme-sand-indigo',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [modalProjectIndex, setModalProjectIndex] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const categories = ['ALL', 'Artificial Intelligence', 'Automation', 'Extension'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  // IntersectionObserver to sync active card with left sticky info on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current = cardRefs.current.slice(0, filteredProjects.length);

    cardRefs.current.forEach((cardEl, idx) => {
      if (!cardEl) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
              setActiveCardIndex(idx);
            }
          });
        },
        { threshold: [0.4, 0.7] }
      );
      observer.observe(cardEl);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [filteredProjects]);

  const openModal = useCallback((index: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setModalProjectIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setModalProjectIndex(null);
    // Restore focus to the triggering element
    setTimeout(() => {
      lastFocusedRef.current?.focus();
    }, 0);
  }, []);

  // Body scroll lock while detail modal is open
  useEffect(() => {
    if (modalProjectIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [modalProjectIndex]);

  // Modal ESC key listener
  useEffect(() => {
    if (modalProjectIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      
      // Focus trap: keep Tab cycling within modal
      if (e.key === 'Tab' && overlayRef.current) {
        const focusableElements = overlayRef.current.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements) as HTMLElement[];
        
        if (focusableArray.length === 0) return;
        
        const currentFocus = document.activeElement;
        const firstElement = focusableArray[0];
        const lastElement = focusableArray[focusableArray.length - 1];
        
        if (e.shiftKey) {
          // Shift+Tab on first element → focus last
          if (currentFocus === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab on last element → focus first
          if (currentFocus === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // Move focus into modal when it opens
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalProjectIndex, closeModal]);

  const currentActiveProject = filteredProjects[activeCardIndex] || filteredProjects[0];
  const modalProject = modalProjectIndex !== null ? filteredProjects[modalProjectIndex] : null;

  return (
    <>
      <section id="work" className="lassie-work-section" inert={modalProjectIndex !== null}>
        <div className="lassie-work-container">
          
          {/* Header & Filter Controls */}
          <div className="lassie-work-head">
            <div>
              <AnimatedSplit
                delay={0.1}
                as="h2"
                className="lassie-work-title"
                lines={[{ text: 'Selected work.' }]}
              />
              <p className="lassie-work-sub">
                Intelligent systems, automated workflows, and quiet back-end tools built for execution.
              </p>
            </div>

            <div className="lassie-work-filters" role="tablist" aria-label="Project Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`lassie-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveCardIndex(0);
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Lassie Layout: Left Sticky Info + Right Card Stack */}
          <div className="lassie-work-body">
            
            {/* Left Sticky Info Column */}
            <div className="lassie-info-col">
              <div className="lassie-sticky-info">
                <div className="lassie-meta-tag">
                  <span className="lassie-num-badge">
                    {currentActiveProject ? currentActiveProject.num : '01'} / {String(filteredProjects.length).padStart(2, '0')}
                  </span>
                  <span className="lassie-cat-badge">
                    {currentActiveProject ? currentActiveProject.category : ''}
                  </span>
                </div>

                <h3 className="lassie-headline">
                  {currentActiveProject ? currentActiveProject.headline : ''}
                </h3>

                <p className="lassie-teaser">
                  {currentActiveProject ? currentActiveProject.teaser : ''}
                </p>

                <div className="lassie-info-footer">
                  <span className="lassie-stack-text">
                    {currentActiveProject ? currentActiveProject.stack : ''}
                  </span>

                  {currentActiveProject?.href ? (
                    <a
                      href={currentActiveProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lassie-cta-btn"
                    >
                      Inspect Source
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : (
                    <span className="lassie-note-tag">{currentActiveProject?.note}</span>
                  )}

                  <button
                    type="button"
                    className="lassie-details-btn"
                    onClick={() => openModal(activeCardIndex)}
                  >
                    Case Study Details →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card Stack Column */}
            <div className="lassie-cards-col">
              {filteredProjects.map((project, idx) => (
                <button
                  key={project.num}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className={`lassie-card-wrapper ${project.cardTheme}`}
                  style={{ top: `calc(100px + ${idx * 28}px)`, zIndex: idx + 1 }}
                  onClick={() => openModal(idx)}
                  aria-label={`View details for ${project.title}`}
                  type="button"
                >
                  <div className="lassie-card-canvas">
                    {/* Full Card Background Image */}
                    <img
                      className="lassie-card-img"
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />

                    {/* Normal Glassmorphic Overlay showing only Project Name (fades out on hover for clean image) */}
                    <div className="lassie-card-overlay">
                      <h4 className="lassie-card-title">{project.title}</h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Case Study Modal Overlay */}
      {modalProject && (
        <div
          ref={overlayRef}
          className="work-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} details`}
          data-lenis-prevent
        >
          <div className="work-overlay-backdrop" onClick={closeModal} />
          <div className="work-overlay-panel" data-lenis-prevent>
            <div className="work-overlay-close-wrap">
              <button
                ref={closeBtnRef}
                type="button"
                className="work-overlay-close"
                onClick={closeModal}
                aria-label="Close details"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="work-overlay-header-block">
              <span className="work-overlay-cat">{modalProject.category} // {modalProject.num}</span>
              <h3 className="work-overlay-title">{modalProject.title}</h3>
              <p className="work-overlay-teaser">{modalProject.headline}</p>
            </div>

            <div className="work-overlay-grid">
              <div className="work-overlay-media">
                <img src={modalProject.image} alt={`${modalProject.title} interface preview`} />
              </div>

              <div className="work-overlay-meta-col">
                <div className="overlay-meta-box">
                  <span className="meta-box-label">Category</span>
                  <span className="meta-box-val">{modalProject.category}</span>
                </div>

                <div className="overlay-meta-box">
                  <span className="meta-box-label">Core Tech Stack</span>
                  <p className="meta-box-val">{modalProject.stack}</p>
                </div>

                {modalProject.metrics && (
                  <div className="overlay-meta-box">
                    <span className="meta-box-label">Engineering Performance &amp; Metrics</span>
                    <p className="meta-box-val" style={{ color: '#E05A47', fontWeight: 600 }}>
                      {modalProject.metrics}
                    </p>
                  </div>
                )}

                <div className="overlay-meta-box">
                  <span className="meta-box-label">Architecture &amp; Scope</span>
                  <p className="meta-box-desc">{modalProject.desc}</p>
                </div>

                {modalProject.challenge && (
                  <div className="overlay-meta-box">
                    <span className="meta-box-label">Technical Challenge &amp; Solution</span>
                    <p className="meta-box-desc">{modalProject.challenge}</p>
                  </div>
                )}

                <div className="work-overlay-foot">
                  {modalProject.href ? (
                    <a
                      className="work-overlay-link"
                      href={modalProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inspect Source Code
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : (
                    modalProject.note && (
                      <span className="work-overlay-note" role="note">{modalProject.note}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

