import { cn } from '@/lib/utils';

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function LiquidGlass({ children, className, as: Component = 'div' }: LiquidGlassProps) {
  return (
    <Component className={cn('bg-black-light border border-white/10', className)}>
      {children}
    </Component>
  );
}
