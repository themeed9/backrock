'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { motionVariants } from '@/tokens/tokens';

const claimSteps = [
  { step: 1, text: 'Report filed', done: true },
  { step: 2, text: 'Handler assigned', done: true },
  { step: 3, text: 'Docs collected', done: true },
  { step: 4, text: 'Underwriter review', done: false },
  { step: 5, text: 'Settlement', done: false },
];

function PolicyHealthCard() {
  return (
    <div className="bg-black-mid border border-white/10 p-6 max-w-xs mx-auto">
      <div className="text-white/60 text-xs font-medium mb-4 uppercase tracking-wider">Policy Health Score</div>
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <motion.circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              whileInView={{ strokeDashoffset: 251.2 * 0.18 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-gold font-display text-2xl font-semibold">82%</span>
            <span className="text-white/50 text-xs">Excellent</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {['Life cover', 'Health plan', 'Property'].map((item, i) => (
          <div key={item} className="flex items-center justify-between">
            <span className="text-white/70 text-xs">{item}</span>
            <div className="flex items-center gap-1">
              <div className="w-16 h-1.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="h-full" style={{ background: '#C9A84C', width: ['100%', '75%', '60%'][i] }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClaimTimeline() {
  return (
    <div className="bg-black-mid border border-white/10 p-6 max-w-xs mx-auto">
      <div className="text-white/60 text-xs font-medium mb-5 uppercase tracking-wider">Claim #BR-2024-0891</div>
      <div className="space-y-4">
        {claimSteps.map((step, i) => (
          <motion.div
            key={step.step}
            className="flex items-center gap-3"
            variants={motionVariants.staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className={`w-6 h-6 flex items-center justify-center shrink-0 ${step.done ? 'bg-gold' : 'bg-white/10 border border-white/20'}`}>
              {step.done ? <CheckCircle size={14} className="text-black" /> : <span className="text-white/40 text-xs">{step.step}</span>}
            </div>
            <div className="flex-1">
              <span className={`text-sm ${step.done ? 'text-white' : 'text-white/40'}`}>{step.text}</span>
              {i < claimSteps.length - 1 && (
                <div className="w-px h-3 ml-[2px] mt-1" style={{ background: step.done ? '#C9A84C' : 'rgba(255,255,255,0.1)' }} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="text-white/50 text-xs">Est. resolution in <span className="text-gold font-medium">3 days</span></div>
      </div>
    </div>
  );
}

export function WhyBackRock() {
  return (
    <section className="section" style={{ background: '#111111' }}>
      <div className="container mx-auto px-4">
        {/* Block 1: Text left, Visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            variants={motionVariants.slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Our Approach</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              We don't just sell policies. We build protection strategies.
            </h2>
            <p className="text-mist leading-relaxed mb-8" style={{ lineHeight: 1.7 }}>
              Our advisors audit your existing cover, identify gaps, and match you with underwriters who pay claims fast. No jargon. No fine-print surprises.
            </p>
            <Link href="/team" className="flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all">
              Meet our advisors <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={motionVariants.slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <PolicyHealthCard />
          </motion.div>
        </div>

        {/* Block 2: Visual left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={motionVariants.slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="order-2 lg:order-1"
          >
            <ClaimTimeline />
          </motion.div>

          <motion.div
            variants={motionVariants.slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Claims Support</p>
            <h2 className="font-display font-light text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Claims support that actually shows up.
            </h2>
            <p className="text-mist leading-relaxed mb-8" style={{ lineHeight: 1.7 }}>
              When the unexpected happens, our dedicated claims team walks every step with you — from filing to payout. Average claims resolution: <span className="text-white font-medium">14 days</span>.
            </p>
            <Link href="/claims" className="flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all">
              Learn about claims <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
