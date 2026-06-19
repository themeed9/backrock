'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown, Users, Shield, TrendingUp } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';
import { motionVariants } from '@/tokens/tokens';

const coverage = [
  { title: 'Death Benefit', desc: 'Lump-sum payout to your beneficiaries upon passing.' },
  { title: 'Critical Illness Rider', desc: 'Early payout if diagnosed with a covered critical illness.' },
  { title: 'Disability Cover', desc: 'Waives premiums and provides income if you become disabled.' },
  { title: 'Education Endowment', desc: 'Builds savings for your children\'s education over time.' },
  { title: 'Mortgage Protection', desc: 'Ensures your home loan is cleared if something happens to you.' },
];

const personas = [
  { icon: Users, title: 'Young Professionals', desc: 'Lock in low premiums early and build lifelong cover.' },
  { icon: Shield, title: 'Parents & Families', desc: 'Secure your children\'s future and your spouse\'s stability.' },
  { icon: TrendingUp, title: 'Business Owners', desc: 'Key-person insurance and succession planning.' },
];

export default function LifeInsurancePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [sliderValue, setSliderValue] = useState(50);

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
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(201,168,76,0.12)' }}>
              <Heart size={28} className="text-gold" />
            </div>
          </FadeRise>
          <FadeRise delay={0.1}>
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Life Insurance</span>
          </FadeRise>
          <FadeRise delay={0.2}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Income protection for the<br />people who depend on you.
            </h1>
          </FadeRise>
          <FadeRise delay={0.35}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Our life insurance plans replace your income, clear your debts, and fund your family&apos;s future — no matter what happens.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* What's Covered — Accordion */}
      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Coverage</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              What&apos;s covered.
            </h2>
          </FadeRise>

          <div className="max-w-2xl mx-auto space-y-3">
            {coverage.map((item, i) => (
              <StaggerChild key={item.title}>
                <motion.div
                  className="bg-black-mid border border-white/10 overflow-hidden"
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                    aria-expanded={openSection === i}
                  >
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <motion.div animate={{ rotate: openSection === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                      <ChevronDown size={18} className="text-gold" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openSection === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-5 text-mist text-sm leading-relaxed border-t border-white/5 pt-4">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      {/* Cost estimate — slider */}
      <section className="section" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              How much does it cost?
            </h2>
          </FadeRise>

          <div className="max-w-lg mx-auto bg-black-mid border border-white/10 p-8 text-center">
            <p className="text-mist text-sm mb-6">Monthly premium estimate based on cover amount</p>
            <div className="text-gold font-display text-4xl font-semibold mb-2">₦{(sliderValue * 1000).toLocaleString()}/mo</div>
            <p className="text-white/50 text-xs mb-8">For a cover of ₦{(sliderValue * 1000000).toLocaleString()}</p>
            <input
              type="range"
              min="10"
              max="200"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full accent-gold"
              style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }}
            />
            <div className="flex justify-between text-fog text-xs mt-2">
              <span>₦10M</span>
              <span>₦200M</span>
            </div>
            <p className="text-mist text-xs mt-6">*Rates are indicative. Actual premium depends on age, health, and underwriting.</p>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Who Needs It</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Who is this for?
            </h2>
          </FadeRise>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerChild key={p.title}>
                  <motion.div
                    className="bg-black-mid border border-white/10 p-7 text-center"
                    whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,255,255,0.05)', borderColor: 'rgba(201,168,76,0.3)' }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(201,168,76,0.1)' }}>
                      <Icon size={26} className="text-gold" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">{p.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                </StaggerChild>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4 text-center">
          <FadeRise>
            <h3 className="text-white font-semibold text-xl mb-4">Ready to protect your family?</h3>
            <p className="text-mist mb-8 text-sm">Get a personalised life insurance quote in under 5 minutes.</p>
            <Button href="/contact" size="lg">
              Get This Plan
            </Button>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
