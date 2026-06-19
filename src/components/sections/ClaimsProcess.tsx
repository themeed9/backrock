'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { motionVariants } from '@/tokens/tokens';

const steps = [
  {
    num: 1,
    title: 'Report your incident',
    desc: 'Call us on 08123456789 or fill the claims form below. Available 24/7.',
  },
  {
    num: 2,
    title: 'Handler assigned within 2 hours',
    desc: 'A dedicated claims handler contacts you and takes ownership of your case.',
  },
  {
    num: 3,
    title: 'Documentation collected',
    desc: "We guide you through every document needed — you won't chase anyone.",
  },
  {
    num: 4,
    title: 'Underwriter review',
    desc: 'We advocate on your behalf with the underwriter to ensure fair assessment.',
  },
  {
    num: 5,
    title: 'Settlement',
    desc: 'Average resolution: 14 business days. Funds transferred directly to you.',
  },
];

export function ClaimsProcess() {
  return (
    <section className="section" style={{ background: '#000000' }}>
      <div className="container mx-auto px-4">
        <FadeRise className="text-center mb-16">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">The Process</p>
          <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            We handle it — start to finish.
          </h2>
          <p className="text-mist max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Our claims team works directly with your underwriter so you don&apos;t have to chase anyone.
          </p>
        </FadeRise>

        <div className="max-w-2xl mx-auto">
          <StaggerChildren className="space-y-0">
            {steps.map((step, i) => (
              <StaggerChild key={step.num}>
                <div className="flex gap-5">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center shrink-0 font-semibold text-black text-sm"
                      style={{ background: '#C9A84C' }}
                      whileInView={{ scale: [0.5, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    >
                      {step.num}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div
                        className="w-px flex-1 mt-2"
                        style={{ minHeight: '40px', background: 'rgba(201,168,76,0.25)' }}
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10">
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
