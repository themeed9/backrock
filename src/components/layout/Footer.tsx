'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  colors, typography, spacing, radius,
  hoverVariants, ease, duration,
} from '@/tokens/tokens';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 11v6" />
      <path d="M8 8v0" />
      <circle cx="8" cy="8" r="0" />
      <path d="M12 17v-4" />
      <path d="M16 17v-4a2 2 0 0 0-4 0" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon,  href: '#', label: 'Facebook'  },
  { icon: TwitterIcon,   href: '#', label: 'Twitter/X' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon,  href: '#', label: 'LinkedIn'  },
];

const contactDetails = [
  {
    label: 'Address',
    value: 'TrustBanc Place, 163, Sinari Daranijo Street, off Ligali Ayorinde Victoria Island, Lagos.',
  },
  {
    label: 'Phone',
    value: '08038400455 & 08023271268',
  },
  {
    label: 'Email',
    value: 'info@backrock.com',
    isEmail: true,
  },
  {
    label: 'Opening Hours',
    value: 'Mon \u2013 Fri: 8:00am \u2013 6:00pm WAT',
  },
];

const navLinks = [
  { label: 'Home',      href: '/'        },
  { label: 'About Us',  href: '/about'   },
  { label: 'Products',  href: '/products' },
  { label: 'Claims',    href: '/claims'   },
  { label: 'Our Team',  href: '/team'    },
  { label: 'Contact',   href: '/contact' },
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer style={{ background: colors.black }}>

      {/* ── ZONE 1 — Contact Band ───────────────────── */}
      <div
        style={{
          borderTop: `1px solid ${colors.border}`,
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['2xl'],
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16">

            {/* Left — Heading + CTA + Socials */}
            <div>
              <FadeRise delay={0}>
                <h2
                  style={{
                    fontFamily: typography.fontDisplay,
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    fontWeight: typography.weightLight,
                    lineHeight: typography.leadingSnug,
                    letterSpacing: typography.trackingSnug,
                    color: colors.white,
                    maxWidth: 340,
                  }}
                >
                  Any questions?<br />
                  Feel free to get in touch.
                </h2>
              </FadeRise>

              <FadeRise delay={0.15}>
                <motion.button
                  whileHover={{
                    background: colors.gold,
                    borderColor: colors.gold,
                    color: colors.black,
                  }}
                  whileTap={shouldReduceMotion ? {} : hoverVariants.press}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                    border: `1px solid ${colors.white}`,
                    borderRadius: radius.full,
                    padding: `${spacing.md}px ${spacing.xl}px`,
                    fontFamily: typography.fontBody,
                    fontSize: typography.sizeSm,
                    fontWeight: typography.weightMedium,
                    color: colors.white,
                    background: 'transparent',
                    cursor: 'pointer',
                    marginTop: spacing.xl,
                  }}
                  transition={{ duration: duration.fast, ease: ease.out }}
                >
                  Get a Free Quote
                  <ArrowRight size={16} />
                </motion.button>
              </FadeRise>

              <StaggerChildren className="flex gap-2 mt-6 justify-center lg:justify-start">
                {socials.map(({ icon: Icon, href, label }) => (
                  <StaggerChild key={label}>
                    <motion.a
                      href={href}
                      aria-label={label}
                      whileHover={
                        shouldReduceMotion
                          ? { background: colors.gold, borderColor: colors.gold }
                          : { background: colors.gold, borderColor: colors.gold, scale: 1.08 }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 38,
                        height: 38,
                        background: colors.border,
                        border: `1px solid ${colors.border}`,
                        borderRadius: radius.full,
                        color: colors.mist,
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                      transition={{ duration: duration.fast, ease: ease.out }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  </StaggerChild>
                ))}
              </StaggerChildren>
            </div>

            {/* Right — Contact Info 2x2 Grid */}
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactDetails.map(({ label, value, isEmail }) => (
                <StaggerChild key={label}>
                  <div>
                    <p
                      style={{
                        fontFamily: typography.fontBody,
                        fontSize: typography.sizeSm,
                        fontWeight: typography.weightMedium,
                        color: colors.white,
                        letterSpacing: typography.trackingWide,
                        textTransform: 'uppercase',
                        marginBottom: spacing.xs,
                      }}
                    >
                      {label}
                    </p>
                    {isEmail ? (
                      <motion.a
                        href={`mailto:${value}`}
                        whileHover={{ color: colors.gold }}
                        style={{
                          fontFamily: typography.fontBody,
                          fontSize: typography.sizeSm,
                          color: colors.mist,
                          lineHeight: typography.leadingRelaxed,
                          textDecoration: 'none',
                          display: 'block',
                        }}
                        transition={{ duration: duration.fast }}
                      >
                        {value}
                      </motion.a>
                    ) : (
                      <p
                        style={{
                          fontFamily: typography.fontBody,
                          fontSize: typography.sizeSm,
                          color: colors.mist,
                          lineHeight: typography.leadingRelaxed,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </StaggerChild>
              ))}
            </StaggerChildren>

          </div>
        </div>
      </div>

      {/* ── ZONE 2 — Brand Band ─────────────────────── */}
      <div
        style={{
          borderTop: `1px solid ${colors.border}`,
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://res.cloudinary.com/dlfax4vpr/image/upload/v1781945136/ChatGPT_Image_Jun_20_2026_09_45_09_AM_jmzohy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          minHeight: '65vh',
          paddingTop: spacing['2xl'],
          paddingBottom: spacing.lg,
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.2)',
          }}
        />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 items-center">

            {/* Logo */}
            <FadeRise delay={0}>
              <Link href="/" className="flex flex-col items-start gap-2" style={{ textDecoration: 'none' }}>
                <svg width="52" height="52" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="14" width="16" height="3" rx="1" fill={colors.white} opacity="0.9" />
                  <rect x="4" y="10" width="12" height="3" rx="1" fill={colors.white} opacity="0.7" />
                  <rect x="6" y="6" width="8" height="3" rx="1" fill={colors.white} opacity="0.5" />
                  <rect x="8" y="2" width="4" height="3" rx="1" fill={colors.white} opacity="0.3" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                  <span
                    style={{
                      fontFamily: typography.fontDisplay,
                      fontSize: typography.sizeXl,
                      fontWeight: typography.weightSemi,
                      color: colors.white,
                      letterSpacing: typography.trackingTight,
                    }}
                  >
                    BackRock
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontBody,
                      fontSize: typography.sizeXs,
                      color: '#b3b3b3',
                      letterSpacing: typography.trackingWidest,
                      textTransform: 'uppercase',
                    }}
                  >
                    Insurance Brokers Limited
                  </span>
                </div>
              </Link>
            </FadeRise>

          </div>

          {/* Bottom Bar — Copyright + Nav links */}
          <FadeRise delay={0.2}>
            <div
              style={{
                borderTop: `1px solid ${colors.border}40`,
                marginTop: spacing.xl,
                paddingTop: spacing.lg,
              }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
              <p
                style={{
                  fontFamily: typography.fontBody,
                  fontSize: typography.sizeXs,
                  color: '#b3b3b3',
                }}
              >
                Copyright &copy; 2024 BackRock Insurance Brokers Limited.
                Licensed by NAICOM. All rights reserved.
              </p>

              <nav className="flex gap-4 flex-wrap justify-center">
                {navLinks.map(({ label, href }) => (
                  <motion.div
                    key={label}
                    style={{ color: '#b3b3b3' }}
                    whileHover={shouldReduceMotion ? {} : { color: colors.white }}
                    transition={{ duration: duration.fast }}
                  >
                    <Link
                      href={href}
                      style={{
                        fontFamily: typography.fontBody,
                        fontSize: typography.sizeXs,
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </FadeRise>

        </div>
      </div>

    </footer>
  );
}
