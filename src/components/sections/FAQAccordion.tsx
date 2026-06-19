'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';

const faqs = [
  {
    q: 'How do I file a claim?',
    a: 'You can file a claim by calling 08123456789, emailing hello@backrockinsurance.com, or using the claim form on our Claims page. A handler is assigned within 2 hours.',
  },
  {
    q: 'How long does a claim take to settle?',
    a: 'Our average claims resolution time is 14 business days. Complex cases may take longer, but we keep you updated every step of the way.',
  },
  {
    q: 'Can I get coverage for pre-existing conditions?',
    a: 'Yes, some of our health plans cover pre-existing conditions after a waiting period. Our advisors will help you find the best plan for your specific needs.',
  },
  {
    q: 'Do you work with all insurance underwriters in Nigeria?',
    a: 'We are licensed brokers working with NAICOM-regulated underwriters across Nigeria. This means we can compare and find the best options for you across the market.',
  },
  {
    q: 'What is the minimum age to get life insurance?',
    a: 'Life insurance plans are available from age 18 upwards. For children, we offer endowment plans that can be purchased by parents or guardians.',
  },
  {
    q: 'How do I renew my policy?',
    a: "You'll receive a renewal notice 30 days before expiry. You can renew online, by phone, or by visiting our Victoria Island office. We make it seamless.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" style={{ background: '#111111' }}>
      <div className="container mx-auto px-4">
        <FadeRise className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">FAQs</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Common questions,<br />clear answers.
          </h2>
        </FadeRise>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-black-mid border border-white/10"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-${i}`}
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <ChevronDown size={18} className="text-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-5 text-mist text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
