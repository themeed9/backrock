'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverVariants, colors } from '@/tokens/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-gold text-black font-semibold hover:bg-gold-light shadow-lg shadow-gold/20',
  secondary: 'bg-white text-black font-semibold hover:bg-off-white',
  ghost:     'bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5',
  outline:   'bg-transparent text-gold border border-gold hover:bg-gold/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-base',
  lg:  'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  fullWidth,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={hoverVariants.scale}
        whileTap={hoverVariants.press}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={hoverVariants.scale}
      whileTap={hoverVariants.press}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
