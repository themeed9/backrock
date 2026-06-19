'use client';
import { motion } from 'framer-motion';
import { motionVariants } from '@/tokens/tokens';
import { FadeRise } from '@/components/motion/FadeRise';

const milestones = [
  { year: '2002', text: 'Founded in Lagos with 3 staff and a single product line.' },
  { year: '2007', text: 'Expanded to Abuja and Port Harcourt, tripling our client base.' },
  { year: '2012', text: 'Crossed 10,000 active clients — a landmark for Nigerian brokerage.' },
  { year: '2016', text: 'Launched our SME Business Cover suite, serving 500+ companies.' },
  { year: '2020', text: 'Digital-first claims portal launched, cutting resolution time by 40%.' },
  { year: '2024', text: '₦2.8B in claims paid annually, 50,000+ clients protected across Nigeria.' },
];

export function AboutTimeline() {
  return (
    <section className="section" style={{ background: '#111111' }}>
      <div className="container mx-auto px-4">
        <FadeRise className="text-center mb-16">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Our Journey</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            22 years in the making.
          </h2>
        </FadeRise>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'rgba(201,168,76,0.2)', transform: 'translateX(-50%)' }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative flex gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                variants={i % 2 === 0 ? motionVariants.slideLeft : motionVariants.slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i * 0.1}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 shrink-0 z-10"
                  style={{ background: '#C9A84C', transform: 'translate(-50%, 0)', boxShadow: '0 0 12px rgba(201,168,76,0.5)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.1 + 0.2 }}
                />

                <div className={`ml-16 md:ml-0 bg-black-mid border border-white/10 p-5 ${i % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'} flex-1`}>
                  <div className="text-gold font-display font-semibold text-2xl mb-1">{m.year}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
