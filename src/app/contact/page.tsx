'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';
import { CTABanner } from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/Button';
import { motionVariants } from '@/tokens/tokens';

const subjects = [
  'Select subject',
  'General Enquiry',
  'Get a Quote',
  'Claims',
  'Partnership',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
            <span className="text-gold text-xs font-medium tracking-widest uppercase">Contact</span>
          </FadeRise>
          <FadeRise delay={0.15}>
            <h1 className="font-display font-light text-white mt-4 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Let&apos;s find the right<br />cover for you.
            </h1>
          </FadeRise>
          <FadeRise delay={0.3}>
            <p className="text-mist max-w-xl mx-auto text-lg" style={{ lineHeight: 1.7 }}>
              Whether you&apos;re ready to get covered or just exploring options, we&apos;re here to help.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="section" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Form */}
            <motion.div
              variants={motionVariants.slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h2 className="text-white font-semibold text-2xl mb-6">Send us a message</h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  >
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(61,170,114,0.15)' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle2 size={32} className="text-success" />
                    </motion.div>
                    <h3 className="text-white font-semibold text-xl mb-2">Message Sent!</h3>
                    <p className="text-mist text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                    <Button variant="outline" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <StaggerChildren className="space-y-4">
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
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm"
                        />
                      </StaggerChild>

                      <StaggerChild>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white placeholder-white/40 bg-transparent outline-none text-sm"
                        />
                      </StaggerChild>

                      <StaggerChild>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-black-mid border border-white/10 px-5 py-4 text-white bg-transparent outline-none text-sm appearance-none"
                          style={{ color: formData.subject ? 'white' : 'rgba(255,255,255,0.4)' }}
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s === 'Select subject' ? '' : s} className="bg-black text-white">
                              {s}
                            </option>
                          ))}
                        </select>
                      </StaggerChild>

                      <StaggerChild>
                        <textarea
                          placeholder="Your message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                            Send Message
                          </Button>
                        </motion.div>
                      </StaggerChild>
                    </StaggerChildren>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right — Info */}
            <motion.div
              className="space-y-6"
              variants={motionVariants.slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h2 className="text-white font-semibold text-2xl">Visit or call us</h2>

              <div className="space-y-5">
                <div className="bg-black-mid border border-white/10 p-5 flex items-start gap-4">
                  <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Office Address</h4>
                    <p className="text-mist text-sm leading-relaxed">
                      42A Adeola Odeku Street, Victoria Island, Lagos.
                    </p>
                  </div>
                </div>

                <div className="bg-black-mid border border-white/10 p-5 flex items-start gap-4">
                  <Phone size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Phone</h4>
                    <a href="tel:08123456789" className="text-mist text-sm hover:text-gold transition-colors block">08123456789</a>
                    <a href="tel:09012345678" className="text-mist text-sm hover:text-gold transition-colors block">09012345678</a>
                  </div>
                </div>

                <div className="bg-black-mid border border-white/10 p-5 flex items-start gap-4">
                  <Mail size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Email</h4>
                    <a href="mailto:hello@backrockinsurance.com" className="text-mist text-sm hover:text-gold transition-colors">hello@backrockinsurance.com</a>
                  </div>
                </div>

                <div className="bg-black-mid border border-white/10 p-5 flex items-start gap-4">
                  <Clock size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Office Hours</h4>
                    <p className="text-mist text-sm">Mon – Fri, 8am – 6pm (WAT)</p>
                  </div>
                </div>
              </div>

              {/* Map with Directions */}
              <div className="bg-black-mid border border-white/10 overflow-hidden">
                <div className="p-3 border-b border-white/10 flex gap-2">
                  <input
                    id="map-origin"
                    type="text"
                    placeholder="Enter your location..."
                    className="flex-1 bg-black border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none text-sm"
                  />
                  <button
                    onClick={() => {
                      const origin = (document.getElementById('map-origin') as HTMLInputElement).value;
                      if (origin.trim()) {
                        window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=42A+Adeola+Odeku+Street+Victoria+Island+Lagos`, '_blank');
                      }
                    }}
                    className="shrink-0 px-4 py-2 text-sm font-medium cursor-pointer"
                    style={{ border: 0, background: '#C9A84C', color: '#000' }}
                  >
                    Go
                  </button>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=42A%20Adeola%20Odeku%20Street%20Victoria%20Island%20Lagos&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  title="BackRock Insurance — Victoria Island, Lagos"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="section-sm" style={{ background: '#111111' }}>
        <div className="container mx-auto px-4 text-center">
          <FadeRise>
            <h3 className="text-white font-semibold text-xl mb-4">Prefer to call?</h3>
            <p className="text-mist mb-6">Our advisors are available now.</p>
            <a
              href="tel:08123456789"
              className="inline-flex items-center gap-2 text-gold font-semibold text-2xl hover:gap-3 transition-all"
            >
              0803 840 0455 <ArrowRight size={22} />
            </a>
          </FadeRise>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
}
