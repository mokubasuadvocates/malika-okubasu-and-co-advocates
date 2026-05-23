'use client';

import { ReactNode } from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { Footer } from './Footer';
import { ScrollToTopButton } from './ScrollToTopButton';
import { ScrollRestoration } from './ScrollRestoration';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <DesktopHeader />
      <MobileHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
