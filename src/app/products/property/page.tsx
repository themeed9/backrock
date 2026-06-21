'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronDown, Users, Building, Landmark } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';

const coverage = [
  { title: 'Building & Contents', desc: 'Covers structural damage and loss or damage to belongings inside your home.' },
  { title: 'Flood & Fire Protection', desc: 'Specialised cover against Nigeria&apos;s most common property perils.' },
  { title: 'Landlord Liability', desc: 'Protection against claims from tenants for injury or property damage.' },
  { title: 'Alternative Accommodation', desc: 'Cover for temporary housing costs if your home becomes uninhabitable.' },
  { title: 'Theft & Burglary', desc: 'Compensation for stolen items and damage caused during a break-in.' },
];

const personas = [
  { icon: Users, title: 'Homeowners', desc: 'Protect your biggest asset — your family home and everything in it.' },
  { icon: Building, title: 'Landlords', desc: 'Cover for rental properties, liability, and loss of rental income.' },
  { icon: Landmark, title: 'Property Investors', desc: 'Portfolio-level cover for multiple residential or commercial properties.' },
];

export default function PropertyInsurancePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [sliderValue, setSliderValue] = useState(25);

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
          backgroundImage: 'url(https://res.cloudinary.com/dlfax4vpr/image/upload/q_auto/f_auto/v1782032756/low-angle-shot-facade-white-modern-building-blue-clear-sky_iqwqvf.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <FadeRise><div className="w-14 h-14 flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(232,168,56,0.12)' }}><Home size={28} style={{ color: '#E8A838' }} /></div></FadeRise>
          <FadeRise delay={0.1}><span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#E8A838' }}>Property Insurance</span></FadeRise>
          <FadeRise delay={0.2}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Protect your home and assets<br />from the unexpected.
            </h1>
          </FadeRise>
          <FadeRise delay={0.35}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              From fire and flood to theft and liability — keep your property and everything in it safe with comprehensive cover.
            </p>
          </FadeRise>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#E8A838' }}>Coverage</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>What&apos;s covered.</h2>
          </FadeRise>
          <div className="max-w-2xl mx-auto space-y-3">
            {coverage.map((item, i) => (
              <StaggerChild key={item.title}>
                <motion.div className="bg-black-mid border border-white/10 overflow-hidden" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenSection(openSection === i ? null : i)} aria-expanded={openSection === i}>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <motion.div animate={{ rotate: openSection === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                      <ChevronDown size={18} style={{ color: '#E8A838' }} />
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
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#E8A838' }}>Pricing</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>How much does it cost?</h2>
          </FadeRise>
          <div className="max-w-lg mx-auto bg-black-mid border border-white/10 p-8 text-center">
            <p className="text-mist text-sm mb-6">Annual premium estimate</p>
            <div className="font-display text-4xl font-semibold mb-2" style={{ color: '#E8A838' }}>₦{(sliderValue * 20000).toLocaleString()}/yr</div>
            <p className="text-white/50 text-xs mb-8">For property valued at ₦{(sliderValue * 40000000).toLocaleString()}</p>
            <input type="range" min="5" max="100" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="w-full" style={{ accentColor: '#E8A838', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }} />
            <div className="flex justify-between text-fog text-xs mt-2"><span>₦200M</span><span>₦4B</span></div>
            <p className="text-mist text-xs mt-6">*Rates are indicative. Depends on property type, location, and construction.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#E8A838' }}>Who Needs It</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Who is this for?</h2>
          </FadeRise>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerChild key={p.title}>
                  <motion.div className="bg-black-mid border border-white/10 p-7 text-center" whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,255,255,0.05)', borderColor: 'rgba(201,168,76,0.3)' }} transition={{ duration: 0.25 }}>
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(232,168,56,0.1)' }}><Icon size={26} style={{ color: '#E8A838' }} /></div>
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
            <h3 className="text-white font-semibold text-xl mb-4">Your home deserves the best protection.</h3>
            <p className="text-mist mb-8 text-sm">Get a property insurance quote today.</p>
            <Button href="/contact" size="lg">Get This Plan</Button>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
