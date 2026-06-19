'use client';
import { motion } from 'framer-motion';
import { motionVariants } from '@/tokens/tokens';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function StaggerChildren({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={reduced ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      } : motionVariants.staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={motionVariants.staggerChild}>
      {children}
    </motion.div>
  );
}
