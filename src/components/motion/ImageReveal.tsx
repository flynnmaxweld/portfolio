import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
  duration = 1.1,
}: ImageRevealProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
