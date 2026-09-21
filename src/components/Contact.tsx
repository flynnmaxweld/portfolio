import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('flynnmaxweld@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="lassie-footer-section">
      {/* Background Engineering Blueprint Grid */}
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="contact-grid-ticks" aria-hidden="true">
        <span className="grid-tick tick-tl">+</span>
        <span className="grid-tick tick-tr">+</span>
        <span className="grid-tick tick-bl">+</span>
        <span className="grid-tick tick-br">+</span>
      </div>

      <div className="lassie-footer-container">
        
        {/* Editorial Minimalist Main Block */}
        <motion.div
          className="contact-editorial-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-kicker">GET IN TOUCH</span>
          
          <h2 className="contact-main-headline">
            A breath of fresh air for your <em>projects.</em>
          </h2>

          <p className="contact-sub-text">
            AI & systems that run your software. Available for engineering roles, technical collaboration, and system design.
          </p>

          {/* Action Pills */}
          <div className="contact-actions-row">
            <a
              href="mailto:flynnmaxweld@gmail.com"
              className="lassie-footer-cta-pill"
            >
              Get in touch →
            </a>

            <button
              type="button"
              className="contact-copy-pill"
              onClick={handleCopyEmail}
            >
              {copied ? '✓ Email copied!' : 'Copy email address'}
            </button>
          </div>
        </motion.div>

        {/* Social Links Row */}
        <div className="contact-socials-bar">
          <span className="contact-socials-label">Socials</span>
          <div className="contact-socials-links">
            <a href="https://github.com/flynnmaxweld" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/flynn-maxwel/" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
              X (Twitter)
            </a>
          </div>
        </div>

        {/* Copyright Footer (No Watermark) */}
        <div className="lassie-footer-bottom">
          <p className="lassie-copyright-text">
            © {year} Flynn Maxwel D. All rights reserved. Designed with precision.
          </p>
        </div>

      </div>
    </section>
  );
}
