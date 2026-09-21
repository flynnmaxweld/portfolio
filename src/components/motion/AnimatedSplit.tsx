import { motion } from 'motion/react';

interface Line {
  text: string;
  italic?: boolean;
}

type SplitTag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'blockquote';

interface AnimatedSplitProps {
  lines: Line[];
  as?: SplitTag;
  className?: string;
  lineClassName?: string;
  /** Seconds before each line starts rising in. */
  delay?: number;
  /** Seconds between line reveals. Defaults to 0.09. */
  stagger?: number;
  /** Custom animation duration per line. Defaults to 0.9. */
  duration?: number;
  /** Animate on scroll into view (false = animate on mount). */
  inView?: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AnimatedSplit({
  lines,
  as: Tag = 'span',
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.09,
  duration = 0.9,
  inView = true,
}: AnimatedSplitProps) {
  return (
    <Tag className={className} aria-label={lines.map((l) => l.text).join(' ')}>
      {lines.map((line, i) => (
        <span key={i} className="split-line" aria-hidden="true">
          <motion.span
            className={`split-inner ${line.italic ? 'split-italic' : ''} ${lineClassName}`}
            initial={{ y: '115%', opacity: 0 }}
            {...(inView
              ? {
                  whileInView: { y: '0%', opacity: 1 },
                  viewport: { once: true, margin: '0px 0px -12% 0px' },
                }
              : { animate: { y: '0%', opacity: 1 } })}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
