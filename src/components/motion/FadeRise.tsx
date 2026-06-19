'use client';
import { motion } from 'framer-motion';
import { motionVariants } from '@/tokens/tokens';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeRiseProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeRise({ children, delay = 0, className, once = true }: FadeRiseProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      custom={reduced ? 0 : delay}
      variants={reduced ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      } : motionVariants.fadeRise}
    >
      {children}
    </motion.div>
  );
}
