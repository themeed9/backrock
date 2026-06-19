'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { motionVariants } from '@/tokens/tokens';

export function CTABanner() {
  return (
    <section className="py-20" style={{ background: '#FFFFFF' }}>
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="font-display font-semibold text-black mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          variants={motionVariants.fadeRise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          Your protection gap is costing you<br className="hidden sm:block" /> more than a policy would.
        </motion.h2>

        <motion.p
          className="text-black/75 mb-10 max-w-lg mx-auto text-lg"
          variants={motionVariants.fadeRise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
        >
          Get a free 15-minute coverage review. No commitment, no pressure.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={motionVariants.fadeRise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Book a Free Review
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="bg-transparent text-black hover:bg-black/10 shadow-none"
          >
            Speak to an Advisor
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
