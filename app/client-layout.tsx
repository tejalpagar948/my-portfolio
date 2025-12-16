'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import LoadingCircleSpinner from '@/components/loading-circle-spinner';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isStudioRoute && loading) return <LoadingCircleSpinner />;

  return (
    <>
      {!isStudioRoute && <SiteHeader />}
      <main className="bg-custom-blue">{children}</main>
      {!isStudioRoute && <SiteFooter />}
    </>
  );
}
