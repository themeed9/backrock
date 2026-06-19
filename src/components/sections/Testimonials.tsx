'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { motionVariants } from '@/tokens/tokens';

const testimonials = [
  {
    quote: "BackRock handled my auto claim in 11 days. Other insurers kept me waiting for months. I'm a customer for life.",
    name: 'Adaeze O.',
    location: 'Port Harcourt',
    rating: 5,
  },
  {
    quote: "They reviewed our business policy and found ₦4.2M in uncovered gaps we didn't know about. Saved us from a potential disaster.",
    name: 'Emeka T.',
    location: 'CEO, Lagos',
    rating: 5,
  },
  {
    quote: "The health plan they recommended covers my whole family at half what I was paying before. Genuinely couldn't believe it.",
    name: 'Funmi A.',
    location: 'Abuja',
    rating: 5,
  },
  {
    quote: "Professional, transparent and fast. When my property flooded, they had a handler on site within 24 hours. Remarkable service.",
    name: 'Tunde B.',
    location: 'Ibadan',
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const constraintsRef = useRef(null);

  return (
    <section className="section" style={{ background: '#111111' }}>
      <div className="container mx-auto px-4">
        <FadeRise className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Client Stories</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            22 years of trust,<br />in their words.
          </h2>
        </FadeRise>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-black-mid border border-white/10 p-6 flex flex-col gap-4"
              variants={motionVariants.scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Quote size={24} className="text-gold opacity-60" />
              <p className="text-white/85 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="flex mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <div className="text-white font-medium text-sm">{t.name}</div>
                <div className="text-mist text-xs">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-hidden" ref={constraintsRef}>
          <motion.div
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            style={{ width: `${testimonials.length * 90}vw` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-black-mid border border-white/10 p-6 flex flex-col gap-4 shrink-0"
                style={{ width: '80vw' }}
              >
                <Quote size={24} className="text-gold opacity-60" />
                <p className="text-white/85 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="flex mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-mist text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
