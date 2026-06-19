'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, Building2, Store, Factory } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';

const coverage = [
  { title: 'Employer Liability', desc: 'Covers claims from employees for workplace injuries or illness.' },
  { title: 'Fire & Perils', desc: 'Protection for your business premises, equipment, and stock against fire and natural disasters.' },
  { title: 'Business Interruption', desc: 'Replaces lost income and covers ongoing expenses if your business cannot operate.' },
  { title: 'Employee Benefits', desc: 'Group life, health, and pension schemes for your workforce.' },
  { title: 'Professional Indemnity', desc: 'Covers legal costs and damages from professional errors or negligence claims.' },
];

const personas = [
  { icon: Store, title: 'SMEs & Startups', desc: 'Affordable, scalable cover for small and growing businesses.' },
  { icon: Factory, title: 'Manufacturing & Industry', desc: 'Specialised cover for plant, machinery, and production risks.' },
  { icon: Building2, title: 'Corporate Enterprises', desc: 'Comprehensive multi-site, multi-risk corporate insurance programmes.' },
];

export default function BusinessCoverPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <section className="py-32 px-4 text-center" style={{ background: 'linear-gradient(to bottom, #000000, #111111)', backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)' }}>
        <div className="container mx-auto">
          <FadeRise><div className="w-14 h-14 flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(167,139,250,0.12)' }}><Briefcase size={28} style={{ color: '#A78BFA' }} /></div></FadeRise>
          <FadeRise delay={0.1}><span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#A78BFA' }}>Business Cover</span></FadeRise>
          <FadeRise delay={0.2}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Liability, fire, and operational<br />risk — handled.
            </h1>
          </FadeRise>
          <FadeRise delay={0.35}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Keep your business running no matter what. From employer liability to business interruption — we build cover that grows with you.
            </p>
          </FadeRise>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#A78BFA' }}>Coverage</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>What&apos;s covered.</h2>
          </FadeRise>
          <div className="max-w-2xl mx-auto space-y-3">
            {coverage.map((item, i) => (
              <StaggerChild key={item.title}>
                <motion.div className="bg-black-mid border border-white/10 overflow-hidden" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenSection(openSection === i ? null : i)} aria-expanded={openSection === i}>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <motion.div animate={{ rotate: openSection === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                      <ChevronDown size={18} style={{ color: '#A78BFA' }} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openSection === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                        <div className="px-6 pb-5 text-mist text-sm leading-relaxed border-t border-white/5 pt-4">{item.desc}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#A78BFA' }}>Pricing</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>How much does it cost?</h2>
          </FadeRise>
          <div className="max-w-lg mx-auto bg-black-mid border border-white/10 p-8 text-center">
            <p className="text-mist text-sm mb-6">Annual premium estimate based on turnover</p>
            <div className="font-display text-4xl font-semibold mb-2" style={{ color: '#A78BFA' }}>₦{(sliderValue * 350000).toLocaleString()}/yr</div>
            <p className="text-white/50 text-xs mb-8">For business with annual turnover of ₦{(sliderValue * 50000000).toLocaleString()}</p>
            <input type="range" min="1" max="50" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="w-full" style={{ accentColor: '#A78BFA', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }} />
            <div className="flex justify-between text-fog text-xs mt-2"><span>₦50M</span><span>₦2.5B</span></div>
            <p className="text-mist text-xs mt-6">*Rates are indicative. Final quote depends on industry, staff count, and risk profile.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#A78BFA' }}>Who Needs It</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Who is this for?</h2>
          </FadeRise>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerChild key={p.title}>
                  <motion.div className="bg-black-mid border border-white/10 p-7 text-center" whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,255,255,0.05)', borderColor: 'rgba(201,168,76,0.3)' }} transition={{ duration: 0.25 }}>
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(167,139,250,0.1)' }}><Icon size={26} style={{ color: '#A78BFA' }} /></div>
                    <h3 className="text-white font-semibold text-lg mb-3">{p.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                </StaggerChild>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4 text-center">
          <FadeRise>
            <h3 className="text-white font-semibold text-xl mb-4">Protect what you&apos;ve built.</h3>
            <p className="text-mist mb-8 text-sm">Talk to our business insurance specialists today.</p>
            <Button href="/contact" size="lg">Get This Plan</Button>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
