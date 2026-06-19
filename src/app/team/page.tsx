'use client';
import { motion } from 'framer-motion';
import { FadeRise } from '@/components/motion/FadeRise';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { CTABanner } from '@/components/sections/CTABanner';

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero */}
      <section
        className="py-32 px-4 text-center"
        style={{
          background: 'linear-gradient(to bottom, #000000, #111111)',
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="container mx-auto">
          <FadeRise>
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Our Team</span>
          </FadeRise>
          <FadeRise delay={0.15}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              The people behind<br />your protection.
            </h1>
          </FadeRise>
          <FadeRise delay={0.3}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Meet the team that makes BackRock Nigeria&apos;s most trusted insurance brokerage.
            </p>
          </FadeRise>
        </div>
      </section>

      <TeamGrid />

      <section className="section-sm" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4 text-center">
          <FadeRise>
            <h2 className="text-white font-semibold text-2xl mb-4">Join our team</h2>
            <p className="text-mist max-w-md mx-auto mb-6 text-sm leading-relaxed">
              We&apos;re always looking for talented brokers, claims specialists, and operations professionals who share our commitment to client advocacy.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm"
            >
              View open positions &rarr;
            </a>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
