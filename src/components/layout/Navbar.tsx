'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollY } from '@/hooks/useScrollProgress';
import { motionVariants, hoverVariants, colors } from '@/tokens/tokens';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Insurance Products',
    href: '/products',
    children: [
      { label: 'Life Insurance', href: '/products/life' },
      { label: 'Health Insurance', href: '/products/health' },
      { label: 'Auto Insurance', href: '/products/auto' },
      { label: 'Property Insurance', href: '/products/property' },
      { label: 'Business Cover', href: '/products/business' },
    ],
  },
  { label: 'Claims Support', href: '/claims' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const isScrolled = scrollY > 80;

  return (
    <>
      {/* Top info bar */}
      <motion.div
        className="relative z-50 w-full py-2 px-4 text-xs"
        style={{ background: 'rgba(255,255,255,0.04)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-white/70 hidden sm:block">42A Adeola Odeku Street, Victoria Island, Lagos</span>
          <div className="flex items-center gap-4 text-white/70 ml-auto">
            <span>📞 08123456789</span>
            <span className="hidden sm:block">✉ hello@backrockinsurance.com</span>
            <span className="hidden md:block">🌐 backrockinsurance.com</span>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${isScrolled ? 'bg-black-mid shadow-lg' : 'bg-transparent'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
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

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors hover:bg-white/5"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    {link.label} <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 w-52 bg-black-mid border border-white/10"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setProductsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button href="/contact" variant="secondary" size="sm" className="hidden lg:inline-flex">
              Get a Quote
            </Button>
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.97)', paddingTop: '80px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col p-6 gap-1"
              initial="hidden"
              animate="visible"
              variants={motionVariants.staggerContainer}
            >
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={motionVariants.staggerChild}>
                  {link.children ? (
                    <div>
                      <div className="px-4 py-3 text-white/50 text-xs uppercase tracking-widest">{link.label}</div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-2 text-white/80 hover:text-white transition-colors text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-lg text-white hover:text-white transition-colors font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div variants={motionVariants.staggerChild} className="mt-6">
                <Button href="/contact" variant="secondary" fullWidth size="lg">
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
