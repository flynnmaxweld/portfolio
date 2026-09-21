import { useEffect, useState } from 'react';
import { playKeyClick } from '../utils/audio';

interface CharHoverProps {
  text: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  disableHoverEffect?: boolean;
}

function CharHover({
  text,
  href,
  target,
  rel,
  onClick,
  className = '',
  disableHoverEffect = false,
}: CharHoverProps) {
  const chars = Array.from(text);

  const content = (
    <span className={`chr-hover ${disableHoverEffect ? 'no-hover' : ''} ${className}`}>
      {chars.map((char, i) => (
        <span key={i} className="ch-wrap">
          <span className="ch-top" style={{ '--i': i } as React.CSSProperties}>
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span className="ch-bot" style={{ '--i': i } as React.CSSProperties}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={(e) => {
          playKeyClick(720, 0.018);
          if (onClick) onClick(e);
        }}
        onMouseEnter={() => playKeyClick(680, 0.012)}
        className="chr-hover-link"
      >
        {content}
      </a>
    );
  }

  return (
    <span onMouseEnter={() => playKeyClick(640, 0.01)} className="chr-hover-span">
      {content}
    </span>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Luke Baffait style horizontal line above bottom bar */}
      <div className="hero-line" id="hero-line" aria-hidden="true" />

      {/* Luke Baffait style bottom navigation bar */}
      <div className="hero-bar" id="hero-bar" role="navigation" aria-label="Main Navigation">
        {/* Left: Version / Status Badge */}
        <div className="hero-bar-left">
          <CharHover text="🡺V3.0" disableHoverEffect />
        </div>

        {/* Center: Social Networks */}
        <nav className="hero-bar-center" aria-label="Social links">
          <CharHover text="Behance" href="https://www.behance.net" target="_blank" rel="noopener noreferrer" />
          <span className="sep" aria-hidden="true">/</span>
          <CharHover text="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" />
          <span className="sep" aria-hidden="true">/</span>
          <CharHover text="GitHub" href="https://github.com" target="_blank" rel="noopener noreferrer" />
        </nav>

        {/* Right: Page Navigation Links */}
        <nav className="hero-bar-right" aria-label="Main pages">
          <CharHover text="Work" href="#work" />
          <CharHover text="Story" href="#about" />
          <CharHover text="Lab" href="#github" />
          <CharHover text="Contact" href="#contact" />
        </nav>
      </div>
    </>
  );
}

