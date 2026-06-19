'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { parallax } from '@/tokens/tokens';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: keyof typeof parallax;
  className?: string;
}

export function ParallaxLayer({ children, speed = 'slow', className }: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${parallax[speed] * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
