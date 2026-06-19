import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gold' | 'success' | 'mist';
}

const variantClasses = {
  default: 'bg-white/10 text-white',
  gold:    'bg-gold/20 text-gold border border-gold/20',
  success: 'bg-green-500/20 text-green-400',
  mist:    'bg-mist/10 text-mist',
};

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide uppercase',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );
}
