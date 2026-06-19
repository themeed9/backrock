import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { default: 'BackRock Insurance', template: '%s | BackRock' },
  description: "Nigeria's trusted insurance broker. 22+ years protecting individuals and businesses.",
  keywords: ['insurance', 'Nigeria', 'broker', 'life insurance', 'health insurance', 'BackRock'],
  openGraph: {
    siteName: 'BackRock Insurance Brokers Limited',
    locale: 'en_NG',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
