'use client';

import { MessageSquare, Search, ShieldCheck } from 'lucide-react';
import { colors, typography, spacing } from '@/tokens/tokens';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden" style={{ padding: `${spacing['3xl']}px 0` }}>
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dlfax4vpr/image/upload/q_auto/f_auto/v1781886444/nopparuj-lamaikul-Ja9IiBDwrLM-unsplash_cgojpa.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.30) 100%)' }} />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16">
          <FadeRise>
            <h2
              style={{
                fontFamily: typography.fontDisplay,
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: colors.white,
                maxWidth: 520,
              }}
            >
              How Getting Covered<br />Works at BackRock
            </h2>
          </FadeRise>
          <FadeRise delay={0.15}>
            <p
              className="text-white/80"
              style={{
                fontSize: typography.sizeMd,
                marginTop: spacing.lg,
                maxWidth: 500,
                lineHeight: 1.7,
              }}
            >
              Tell us what you need, we match the right policy, and you&apos;re protected — without the paperwork maze.
            </p>
          </FadeRise>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggerChild className="flex">
            <div
              className="flex flex-col h-full"
              style={{
                background: colors.blackLight,
                padding: `${spacing['2xl']}px`,
                border: `1px solid ${colors.border}`,
                flex: 1,
              }}
            >
              <MessageSquare size={24} color={colors.gold} style={{ marginBottom: spacing.md }} />
              <h3
                style={{
                  fontFamily: typography.fontDisplay,
                  fontSize: typography.sizeLg,
                  fontWeight: 500,
                  color: colors.white,
                  marginTop: spacing.lg,
                }}
              >
                Tell Us Your Needs
              </h3>
              <p
                className="text-white/50"
                style={{
                  fontFamily: typography.fontBody,
                  fontSize: typography.sizeSm,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  marginTop: spacing.sm,
                }}
              >
                Describe what you want to protect — home, health, car, or your business. No jargon, no forms, just plain language.
              </p>
            </div>
          </StaggerChild>

          <StaggerChild className="flex">
            <div
              className="flex flex-col h-full"
              style={{
                background: colors.blackLight,
                padding: `${spacing['2xl']}px`,
                border: `1px solid ${colors.border}`,
                flex: 1,
              }}
            >
              <Search size={24} color={colors.gold} style={{ marginBottom: spacing.md }} />
              <h3
                style={{
                  fontFamily: typography.fontDisplay,
                  fontSize: typography.sizeLg,
                  fontWeight: 500,
                  color: colors.white,
                  marginTop: spacing.lg,
                }}
              >
                We Match &amp; Review
              </h3>
              <p
                className="text-white/50"
                style={{
                  fontFamily: typography.fontBody,
                  fontSize: typography.sizeSm,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  marginTop: spacing.sm,
                }}
              >
                Our advisors analyse your risk profile and compare policies from Nigeria&apos;s top underwriters — in real time.
              </p>
            </div>
          </StaggerChild>

          <StaggerChild className="flex">
            <div
              className="flex flex-col h-full"
              style={{
                background: colors.blackLight,
                padding: `${spacing['2xl']}px`,
                border: `1px solid ${colors.border}`,
                flex: 1,
              }}
            >
              <ShieldCheck size={24} color={colors.gold} style={{ marginBottom: spacing.md }} />
              <h3
                style={{
                  fontFamily: typography.fontDisplay,
                  fontSize: typography.sizeLg,
                  fontWeight: 500,
                  color: colors.white,
                  marginTop: spacing.lg,
                }}
              >
                You&apos;re Covered
              </h3>
              <p
                className="text-white/50"
                style={{
                  fontFamily: typography.fontBody,
                  fontSize: typography.sizeSm,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  marginTop: spacing.sm,
                }}
              >
                Receive your policy documents, confirm your cover, and get protected in under 24 hours. We handle the underwriter so you don&apos;t have to.
              </p>
            </div>
          </StaggerChild>
        </StaggerChildren>
      </div>
    </section>
  );
}
