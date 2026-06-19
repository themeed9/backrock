'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { motionVariants } from '@/tokens/tokens';
import { Button } from '@/components/ui/Button';

const quickLinks = [
  { label: 'Life Cover', href: '/products/life' },
  { label: 'Health Plans', href: '/products/health' },
  { label: 'Business Shield', href: '/products/business' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ marginTop: '-1px' }}>
      {/* Video background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dlfax4vpr/video/upload/Family_members_put_hands_around_202606191824_gnzbje.mp4"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.10) 100%)',
          }}
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-6 pb-24">
        {/* Eyebrow */}
        <motion.p
          className="text-black/80 mb-6 font-medium"
          style={{ fontSize: '11px', letterSpacing: '0.20em', textTransform: 'uppercase' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          22+ years of trusted brokerage
        </motion.p>

        {/* H1 */}
        <motion.h1
          className="font-display font-semibold mb-6"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: '800px',
            backgroundImage: 'linear-gradient(135deg, #B8942E 0%, #D4AF37 25%, #F5E6A3 45%, #D4AF37 65%, #B8942E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          Protect what matters most.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-black/80 mb-10 max-w-xl mx-auto"
          style={{ fontSize: '15px', lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          BackRock helps families and businesses across Nigeria navigate insurance — so the right cover finds you before life asks for it.
        </motion.p>

        {/* Search bar */}
        <motion.div
          className="w-full max-w-lg mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          <div className="flex items-center border border-white/10 px-2 py-1.5 bg-black-mid">
            <input
              type="text"
              placeholder="What would you like to protect?"
              className="flex-1 bg-transparent text-white placeholder-white/40 px-4 py-2 text-sm outline-none"
            />
            <Button size="sm" className="shrink-0">
              <Search size={14} /> Search
            </Button>
          </div>
        </motion.div>

        {/* Quick chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
        >
          {quickLinks.map((chip, i) => (
            <motion.div
              key={chip.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={chip.href}
                className="px-5 py-2 border border-white/10 text-sm text-white/80 hover:text-white hover:border-white/30 transition-all bg-black-mid"
              >
                {chip.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10" style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }} />
    </section>
  );
}
