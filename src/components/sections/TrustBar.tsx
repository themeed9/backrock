'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { motionVariants } from '@/tokens/tokens';

const stats = [
  { value: 22, suffix: '+', label: 'Years\nBrokering' },
  { value: 50000, suffix: '+', label: 'Clients\nProtected', format: 'compact' },
  { value: 2.8, suffix: 'B+', label: 'Claims Paid\nAnnually', prefix: '₦' },
  { value: 98, suffix: '%', label: 'Renewal\nRate' },
];

function CountUp({ target, suffix = '', prefix = '', format }: { target: number; suffix?: string; prefix?: string; format?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = format === 'compact'
    ? count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count.toString()
    : target < 100 ? count.toFixed(target % 1 !== 0 ? 1 : 0) : count.toString();

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export function TrustBar() {
  return (
    <section style={{ background: '#111111' }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              variants={motionVariants.countUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
            >
              {/* Divider */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />
              )}

              <div className="text-gold font-display font-light mb-2" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1 }}>
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  format={stat.format}
                />
              </div>
              <div className="text-mist text-sm whitespace-pre-line leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
