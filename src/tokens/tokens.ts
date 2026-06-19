// src/tokens/tokens.ts
// BackRock Design System — Single Source of Truth

export const colors = {
  black:       '#000000',
  blackMid:    '#111111',
  blackLight:  '#1A1A1A',

  white:       '#FFFFFF',
  offWhite:    '#F5F5F5',
  mist:        '#999999',
  fog:         '#666666',
  border:      'rgba(255,255,255,0.10)',

  gold:        '#C9A84C',
  goldLight:   '#E2C47A',
  goldMuted:   '#8A6E30',

  success:     '#3DAA72',
  warning:     '#E8A838',
  danger:      '#D95040',
} as const;

export const typography = {
  fontDisplay: '"Inter Display", "Inter", system-ui, sans-serif',
  fontBody:    '"Inter", system-ui, sans-serif',
  fontMono:    '"JetBrains Mono", "Fira Code", monospace',

  sizeXs:   11,
  sizeSm:   13,
  sizeBase: 16,
  sizeMd:   18,
  sizeLg:   22,
  sizeXl:   28,
  size2xl:  36,
  size3xl:  48,
  size4xl:  64,
  size5xl:  80,
  size6xl:  110,

  weightLight:   300,
  weightRegular: 400,
  weightMedium:  500,
  weightSemi:    600,

  leadingTight:  0.95,
  leadingSnug:   1.15,
  leadingNormal: 1.5,
  leadingRelaxed: 1.7,

  trackingTight:  '-0.04em',
  trackingSnug:   '-0.02em',
  trackingNormal: '0em',
  trackingWide:   '0.08em',
  trackingWidest: '0.20em',
} as const;

export const spacing = {
  xs:   4,
  sm:   8,
  md:   16,
  lg:   24,
  xl:   40,
  '2xl': 64,
  '3xl': 96,
  '4xl': 128,
  '5xl': 180,
} as const;

export const radius = {
  sm:   0,
  md:   0,
  lg:   0,
  xl:   0,
  full: 0,
} as const;

export const duration = {
  fast:   0.25,
  normal: 0.50,
  slow:   0.80,
  xslow:  1.20,
} as const;

export const ease = {
  out:      [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut:    [0.87, 0, 0.13, 1] as [number, number, number, number],
  spring:   { type: 'spring' as const, stiffness: 100, damping: 20 },
  springSnappy: { type: 'spring' as const, stiffness: 200, damping: 22 },
} as const;

export const motionVariants = {
  fadeRise: {
    hidden:  { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: duration.slow, ease: ease.out, delay },
    }),
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { duration: duration.normal, ease: ease.out, delay },
    }),
  },
  slideLeft: {
    hidden:  { opacity: 0, x: -40 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: duration.slow, ease: ease.out, delay },
    }),
  },
  slideRight: {
    hidden:  { opacity: 0, x: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: duration.slow, ease: ease.out, delay },
    }),
  },
  scaleUp: {
    hidden:  { opacity: 0, scale: 0.88 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: duration.slow, ease: ease.out, delay },
    }),
  },
  staggerContainer: {
    hidden:  {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  staggerChild: {
    hidden:  { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.slow, ease: ease.out },
    },
  },
  countUp: {
    hidden:  { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: duration.normal, ease: ease.out, delay },
    }),
  },
  lineDraw: {
    hidden:  { scaleX: 0, originX: 0 },
    visible: (delay = 0) => ({
      scaleX: 1,
      transition: { duration: duration.slow, ease: ease.out, delay },
    }),
  },
} as const;

export const hoverVariants = {
  lift:   { y: -4, transition: { duration: duration.fast, ease: ease.out } },
  glow:   { boxShadow: `0 0 32px rgba(201,168,76,0.30)` },
  scale:  { scale: 1.03, transition: { duration: duration.fast } },
  press:  { scale: 0.97, transition: { duration: 0.12 } },
} as const;

export const parallax = {
  slow:   0.15,
  normal: 0.30,
  fast:   0.50,
} as const;

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const;

export type ColorKey    = keyof typeof colors;
export type MotionKey   = keyof typeof motionVariants;
