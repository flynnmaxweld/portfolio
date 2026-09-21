import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function Reveal({ children, className = '', delay = 0, y = 20, duration = 0.8 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
