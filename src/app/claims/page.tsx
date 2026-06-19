'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { ClaimsProcess } from '@/components/sections/ClaimsProcess';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';
import { motionVariants } from '@/tokens/tokens';

const claimTypes = [
  'Select claim type',
  'Auto Accident',
  'Health / Medical',
  'Life / Death Claim',
  'Property Damage',
  'Business Interruption',
  'Other',
];

export default function ClaimsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    policy: '',
    date: '',
    type: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Claims</span>
          </FadeRise>
          <FadeRise delay={0.15}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              File a claim.<br />We take it from here.
            </h1>
          </FadeRise>
          <FadeRise delay={0.3}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Our claims team works directly with your underwriter so you don&apos;t have to chase anyone.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* Claims Process */}
      <ClaimsProcess />

      {/* Claim Form */}
      <section className="section" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4">
          <FadeRise className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Start Your Claim</p>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Tell us what happened.
            </h2>
          </FadeRise>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="max-w-md mx-auto text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(61,170,114,0.15)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle2 size={40} className="text-success" />
                </motion.div>
                <h3 className="text-white font-semibold text-2xl mb-3">Claim Submitted</h3>
                <p className="text-mist mb-8">
                  Your claim has been received. A handler will contact you within 2 hours at the phone number on file.
                </p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setFormData({ name: '', policy: '', date: '', type: '', description: '' }); }}>
                  Submit Another Claim
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <StaggerChildren className="space-y-5">
                  <StaggerChild>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm"
                        />
                      </StaggerChild>

                      <StaggerChild>
                        <input
                          type="text"
                          placeholder="Policy Number"
                      required
                      value={formData.policy}
                      onChange={(e) => setFormData({ ...formData, policy: e.target.value })}
                      className="w-full liquid-glass rounded-xl px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm"
                    />
                  </StaggerChild>

                  <StaggerChild>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm [color-scheme:dark]"
                    />
                  </StaggerChild>

                  <StaggerChild>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white bg-transparent outline-none text-sm appearance-none"
                      style={{ color: formData.type ? 'white' : 'rgba(255,255,255,0.4)' }}
                    >
                      {claimTypes.map((t) => (
                        <option key={t} value={t === 'Select claim type' ? '' : t} className="bg-black text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </StaggerChild>

                  <StaggerChild>
                    <textarea
                      placeholder="Describe the incident"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm resize-none"
                    />
                  </StaggerChild>

                  <StaggerChild>
                    <motion.div
                      variants={motionVariants.scaleUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Button type="submit" size="lg" fullWidth>
                        Submit Claim
                      </Button>
                    </motion.div>
                  </StaggerChild>
                </StaggerChildren>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section-sm" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4 text-center">
          <FadeRise>
            <h3 className="text-white font-semibold text-xl mb-4">Need immediate assistance?</h3>
            <p className="text-mist mb-6">Call us 24/7 for urgent claim reporting.</p>
            <a
              href="tel:08123456789"
              className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:gap-3 transition-all"
            >
              08123456789 <ArrowRight size={18} />
            </a>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
