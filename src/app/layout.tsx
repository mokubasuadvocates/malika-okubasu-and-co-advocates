import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Layout } from './components/Layout';

export const metadata: Metadata = {
  title: {
    default: 'Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya',
    template: '%s | Malika Okubasu & Company Advocates',
  },
  description:
    'Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.',
  metadataBase: new URL('https://mokubasuadvocates.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya',
    description:
      'Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.',
    url: 'https://mokubasuadvocates.com',
    siteName: 'Malika Okubasu & Company Advocates',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Malika Okubasu & Company Advocates',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya',
    description:
      'Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M6PBWZL7" />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
