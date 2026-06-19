'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverVariants } from '@/tokens/tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
  const classes = cn(
    'overflow-hidden bg-black-light border border-white/10',
    className
  );

  if (hoverable) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
