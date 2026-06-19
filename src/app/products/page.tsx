import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { ArrowRight, Heart, Shield, Car, Home, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insurance Products',
  description: 'Explore BackRock\'s full range of insurance products: life, health, auto, property and business cover — all tailored to Nigerian needs.',
};

const products = [
  {
    icon: Heart,
    title: 'Life Insurance',
    href: '/products/life',
    accent: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    tag: 'Personal',
    desc: 'Secure your family\'s financial future. Our life insurance plans provide income replacement, mortgage protection, and education funding for your loved ones.',
    features: ['Death benefit payout', 'Critical illness rider', 'Disability cover', 'Flexible premiums'],
  },
  {
    icon: Shield,
    title: 'Health Insurance',
    href: '/products/health',
    accent: '#3DBFA0',
    bg: 'rgba(61,191,160,0.08)',
    tag: 'Personal',
    desc: 'Comprehensive medical cover for individuals and families. From routine consultations to major surgery — you\'re always protected.',
    features: ['Inpatient & outpatient cover', 'Specialist consultations', 'Maternity cover', 'Emergency evacuation'],
  },
  {
    icon: Car,
    title: 'Auto Insurance',
    href: '/products/auto',
    accent: '#5B8DEF',
    bg: 'rgba(91,141,239,0.08)',
    tag: 'Personal',
    desc: 'Comprehensive or third-party cover for every vehicle. We\'ll sort repairs, replacements, and liability if the worst happens on the road.',
    features: ['Comprehensive cover', 'Third-party liability', 'Fire & theft', 'Roadside assistance'],
  },
  {
    icon: Home,
    title: 'Property Insurance',
    href: '/products/property',
    accent: '#E8A838',
    bg: 'rgba(232,168,56,0.08)',
    tag: 'Personal',
    desc: 'Protect your home and its contents from fire, flood, theft, and structural damage. Cover for landlords and owner-occupiers.',
    features: ['Building & contents cover', 'Flood & fire protection', 'Landlord liability', 'Alternative accommodation'],
  },
  {
    icon: Briefcase,
    title: 'Business Cover',
    href: '/products/business',
    accent: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    tag: 'Business',
    desc: 'Complete business protection: liability, fire, equipment, stock, and operational continuity. Built for Nigerian SMEs and enterprises.',
    features: ['Employer liability', 'Fire & perils', 'Business interruption', 'Employee benefits'],
  },
];

export default function ProductsPage() {
  return (
    <>
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
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Insurance Products</span>
          </FadeRise>
          <FadeRise delay={0.15}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              One brokerage.<br />Every insurance you need.
            </h1>
          </FadeRise>
          <FadeRise delay={0.3}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Tailored coverage across five product lines — matched to your life, not a standard template.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <StaggerChild key={product.href}>
                  <Link href={product.href} className="block group">
                    <div
                      className="bg-black-mid border border-white/10 p-8 h-full flex flex-col gap-5 transition-all duration-300 group-hover:border-gold/30"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ background: product.bg }}>
                          <Icon size={22} style={{ color: product.accent }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-white font-semibold text-xl">{product.title}</h2>
                            <span className="text-xs px-2 py-0.5" style={{ background: product.bg, color: product.accent }}>{product.tag}</span>
                          </div>
                          <p className="text-mist text-sm leading-relaxed">{product.desc}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-1.5 h-1.5" style={{ background: product.accent }} />
                            {f}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium mt-auto" style={{ color: product.accent }}>
                        View details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerChild>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
