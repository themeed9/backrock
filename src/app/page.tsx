import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { WhyBackRock } from '@/components/sections/WhyBackRock';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner } from '@/components/sections/CTABanner';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BackRock Insurance — Nigeria\'s Trusted Broker',
  description: 'BackRock Insurance Brokers Limited. 22+ years protecting Nigerian families and businesses. Life, health, auto, property and business cover.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductsGrid />
      <WhyBackRock />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <FAQAccordion />
    </>
  );
}
