'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, ChevronDown, Users, Building2, MapPin } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';

const coverage = [
  { title: 'Comprehensive Cover', desc: 'Covers damage to your vehicle, third-party liability, fire, and theft.' },
  { title: 'Third-Party Only', desc: 'Covers damage and injury caused to others and their property.' },
  { title: 'Fire & Theft', desc: 'Protection if your vehicle is stolen or damaged by fire.' },
  { title: 'Roadside Assistance', desc: '24/7 emergency breakdown support across all major Nigerian routes.' },
  { title: 'Courtesy Car', desc: 'A replacement vehicle while yours is being repaired after an accident.' },
];

const personas = [
  { icon: Users, title: 'Private Drivers', desc: 'Comprehensive cover for personal vehicles, from saloons to SUVs.' },
  { icon: Building2, title: 'Fleet Operators', desc: 'Discounted multi-vehicle policies for businesses with 5+ vehicles.' },
  { icon: MapPin, title: 'Commercial Transport', desc: 'Specialised cover for taxis, buses, and logistics vehicles.' },
];

export default function AutoInsurancePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <section
        className="py-32 px-4 text-center"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://res.cloudinary.com/dlfax4vpr/image/upload/q_auto/f_auto/v1782033825/photo-1485291571150-772bcfc10da5_rxc5y9.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <FadeRise><div className="w-14 h-14 flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(91,141,239,0.12)' }}><Car size={28} style={{ color: '#5B8DEF' }} /></div></FadeRise>
          <FadeRise delay={0.1}><span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#5B8DEF' }}>Auto Insurance</span></FadeRise>
          <FadeRise delay={0.2}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Comprehensive cover for<br />every road ahead.
            </h1>
          </FadeRise>
          <FadeRise delay={0.35}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Whether you drive a saloon, SUV, or run a fleet — we&apos;ll keep you moving with fast claims and reliable roadside support.
            </p>
          </FadeRise>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#5B8DEF' }}>Coverage</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>What&apos;s covered.</h2>
          </FadeRise>
          <div className="max-w-2xl mx-auto space-y-3">
            {coverage.map((item, i) => (
              <StaggerChild key={item.title}>
                <motion.div className="bg-black-mid border border-white/10 overflow-hidden" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenSection(openSection === i ? null : i)} aria-expanded={openSection === i}>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <motion.div animate={{ rotate: openSection === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                      <ChevronDown size={18} style={{ color: '#5B8DEF' }} />
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

      <section
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://res.cloudinary.com/dlfax4vpr/image/upload/q_auto/f_auto/v1782030094/katja-ano-q1KZ2NrewQM-unsplash_objcyc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#5B8DEF' }}>Pricing</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>How much does it cost?</h2>
          </FadeRise>
          <div className="max-w-lg mx-auto bg-black-mid border border-white/10 p-8 text-center">
            <p className="text-mist text-sm mb-6">Annual premium for comprehensive cover</p>
            <div className="font-display text-4xl font-semibold mb-2" style={{ color: '#5B8DEF' }}>₦{(sliderValue * 75000).toLocaleString()}/yr</div>
            <p className="text-white/50 text-xs mb-8">For vehicle valued at ₦{(sliderValue * 5000000).toLocaleString()}</p>
            <input type="range" min="1" max="20" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="w-full" style={{ accentColor: '#5B8DEF', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }} />
            <div className="flex justify-between text-fog text-xs mt-2"><span>₦5M</span><span>₦100M</span></div>
            <p className="text-mist text-xs mt-6">*Rates are indicative. Final premium depends on vehicle make, model, and year.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#5B8DEF' }}>Who Needs It</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Who is this for?</h2>
          </FadeRise>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerChild key={p.title}>
                  <motion.div className="bg-black-mid border border-white/10 p-7 text-center" whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,255,255,0.05)', borderColor: 'rgba(201,168,76,0.3)' }} transition={{ duration: 0.25 }}>
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(91,141,239,0.1)' }}><Icon size={26} style={{ color: '#5B8DEF' }} /></div>
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
            <h3 className="text-white font-semibold text-xl mb-4">Hit the road with confidence.</h3>
            <p className="text-mist mb-8 text-sm">Get your auto insurance quote in minutes.</p>
            <Button href="/contact" size="lg">Get This Plan</Button>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
