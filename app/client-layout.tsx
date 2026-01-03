'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import PortfolioLoader from '@/components/portfolio-loader';
import type { Footer, Header, SiteConfig } from '@/sanity.types';

interface ClientLayoutProps {
  children: React.ReactNode;
  header: Header | null;
  footer: Footer | null;
  siteConfig: SiteConfig | null;
}

export default function ClientLayout({
  children,
  header,
  footer,
  siteConfig,
}: ClientLayoutProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');
  const [loading, setLoading] = useState(!isStudioRoute);

  useEffect(() => {
    if (isStudioRoute) return;

    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [isStudioRoute]);

  if (!isStudioRoute && loading) {
    return <PortfolioLoader />;
  }

  return (
    <>
      {!isStudioRoute && header && siteConfig && (
        <SiteHeader header={header} siteConfig={siteConfig} />
      )}

      <main className="bg-custom-blue">{children}</main>

      {!isStudioRoute && footer && <SiteFooter value={footer} />}
    </>
  );
}
