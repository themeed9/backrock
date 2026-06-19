import type { Metadata } from 'next';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { AboutTimeline } from '@/components/sections/AboutTimeline';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'BackRock Insurance Brokers Limited — 22 years of trust, transparency and protection across Nigeria.',
};

const values = [
  {
    icon: '🔍',
    title: 'Transparency',
    desc: "We explain every clause, every exclusion, and every cost in plain language. You deserve to know exactly what you're paying for.",
  },
  {
    icon: '⚡',
    title: 'Speed',
    desc: 'From policy issuance to claim settlement — we move fast. Our average claims resolution is 14 days, industry-leading in Nigeria.',
  },
  {
    icon: '🤝',
    title: 'Advocacy',
    desc: "We negotiate with underwriters on your behalf. When things go wrong, we're not neutral — we're on your side.",
  },
];

const partners = [
  'NAICOM', 'Leadway Assurance', 'AIICO Insurance', 'AXA Mansard', 'NEM Insurance', 'Sovereign Trust',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 px-4"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)',
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="container mx-auto text-center">
          <FadeRise>
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Our Story</span>
          </FadeRise>
          <FadeRise delay={0.15}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Built on trust.<br />Refined by 22 years<br />of experience.
            </h1>
          </FadeRise>
          <FadeRise delay={0.3}>
            <p className="text-mist max-w-2xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              BackRock was founded to make insurance accessible, transparent, and human — at a time when most Nigerians were underinsured and underserved.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* Timeline */}
      <AboutTimeline />

      {/* Values */}
      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">What We Stand For</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Our values drive every decision.
            </h2>
          </FadeRise>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map((v) => (
              <StaggerChild key={v.title}>
                <div className="bg-black-mid border border-white/10 p-8 text-center">
                  <div className="text-5xl mb-5">{v.icon}</div>
                  <h3 className="text-white font-semibold text-xl mb-3">{v.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{v.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Partners */}
      <section className="section-sm" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-10">
            <h2 className="text-white font-semibold text-2xl mb-2">Licensed. Regulated. Trusted.</h2>
            <p className="text-mist text-sm">We work with Nigeria&apos;s most reputable underwriters.</p>
          </FadeRise>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, i) => (
              <FadeRise key={partner} delay={i * 0.08}>
                <div className="bg-black-mid border border-white/10 px-6 py-3 text-mist text-sm font-medium">{partner}</div>
              </FadeRise>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
