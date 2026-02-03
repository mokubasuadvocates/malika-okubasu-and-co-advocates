import './globals.css';
import type { ReactNode } from 'react';
import { Layout } from './components/Layout';

export const metadata = {
  title: 'Malika Okubasu & Company Advocates',
  description: 'Full-service law firm based in Nairobi, Kenya.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
