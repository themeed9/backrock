'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Shield, Car, Home, Briefcase, ArrowRight } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';

const products = [
  {
    icon: Heart,
    title: 'Life Insurance',
    tagline: 'Income protection for the people who depend on you',
    href: '/products/life',
    accent: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
  },
  {
    icon: Shield,
    title: 'Health Insurance',
    tagline: 'Medical cover from consultation to surgery',
    href: '/products/health',
    accent: '#3DBFA0',
    bg: 'rgba(61,191,160,0.08)',
  },
  {
    icon: Car,
    title: 'Auto Insurance',
    tagline: 'Comprehensive cover for every road ahead',
    href: '/products/auto',
    accent: '#5B8DEF',
    bg: 'rgba(91,141,239,0.08)',
  },
  {
    icon: Home,
    title: 'Property Insurance',
    tagline: 'Protect your home and assets from the unexpected',
    href: '/products/property',
    accent: '#E8A838',
    bg: 'rgba(232,168,56,0.08)',
  },
  {
    icon: Briefcase,
    title: 'Business Cover',
    tagline: 'Liability, fire, and operational risk — handled',
    href: '/products/business',
    accent: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
  },
];

export function ProductsGrid() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dlfax4vpr/image/upload/q_auto/f_auto/v1781881626/AI_Bg_013_uvqfqq.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.10) 100%)' }} />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeRise>
            <h2 className="font-display font-light text-black mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Every risk covered,<br />every future secured.
            </h2>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p className="text-black/60 max-w-xl mx-auto" style={{ fontSize: '18px', lineHeight: 1.7 }}>
              Choose from our full suite of insurance products, each tailored to Nigerian lives and businesses.
            </p>
          </FadeRise>
        </div>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <StaggerChild key={product.href}>
                <motion.div
                  className="bg-black-mid border border-white/10 p-7 flex flex-col gap-4 group cursor-pointer h-full"
                  whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ background: product.bg }}
                  >
                    <Icon size={22} style={{ color: product.accent }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{product.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{product.tagline}</p>
                  </div>

                  {/* Link */}
                  <Link
                    href={product.href}
                    className="flex items-center gap-1 text-gold text-sm font-medium hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </StaggerChild>
            );
          })}

          {/* CTA card */}
          <StaggerChild>
            <motion.div
              className="p-7 flex flex-col justify-center items-center text-center gap-4 cursor-pointer h-full"
              style={{ border: '1px solid rgba(201,168,76,0.2)', background: '#111' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-gold font-semibold text-lg">Not sure which plan?</p>
              <p className="text-mist text-sm">Let our advisors match you with the right cover for free.</p>
              <Link
                href="/contact"
                className="text-gold text-sm font-medium border border-gold/40 px-5 py-2 hover:bg-gold/10 transition-colors"
              >
                Get Matched →
              </Link>
            </motion.div>
          </StaggerChild>
        </StaggerChildren>
      </div>
    </section>
  );
}
