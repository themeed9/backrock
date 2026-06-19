'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, AtSign, Hash } from 'lucide-react';
import { motionVariants } from '@/tokens/tokens';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '#' },
    { label: 'News', href: '#' },
  ],
  Products: [
    { label: 'Life Insurance', href: '/products/life' },
    { label: 'Health Insurance', href: '/products/health' },
    { label: 'Auto Insurance', href: '/products/auto' },
    { label: 'Property Cover', href: '/products/property' },
    { label: 'Business Shield', href: '/products/business' },
  ],
  Support: [
    { label: 'File a Claim', href: '/claims' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Advisor Login', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'NAICOM License', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: '#000000' }} className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <FadeRise className="col-span-2 md:col-span-3 lg:col-span-1 mb-4">
            <Link href="/" className="flex items-center gap-4 mb-4">
              <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="14" width="16" height="3" rx="1" fill="white" opacity="0.9"/>
                <rect x="4" y="10" width="12" height="3" rx="1" fill="white" opacity="0.7"/>
                <rect x="6" y="6" width="8" height="3" rx="1" fill="white" opacity="0.5"/>
                <rect x="8" y="2" width="4" height="3" rx="1" fill="white" opacity="0.3"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-white text-lg tracking-tight">BackRock</span>
                <span className="text-white text-[10px] tracking-widest uppercase">Insurance</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Protecting Nigerian futures since 2002. Licensed by NAICOM.
            </p>
          </FadeRise>

          {/* Link columns */}
          <StaggerChildren className="contents">
            {Object.entries(footerLinks).map(([category, links]) => (
              <StaggerChild key={category}>
                <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/85 text-sm hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>

        {/* Bottom bar */}
        <FadeRise className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/60 text-xs text-center sm:text-left">
            © 2024 BackRock Insurance Brokers Limited. Licensed by NAICOM.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: ExternalLink, href: '#', label: 'LinkedIn' },
              { icon: AtSign, href: '#', label: 'Twitter' },
              { icon: Hash, href: '#', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </FadeRise>
      </div>
    </footer>
  );
}
