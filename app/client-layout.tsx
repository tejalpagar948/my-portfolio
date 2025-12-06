'use client';

import { usePathname } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudioRoute && <SiteHeader />}
      <main className="bg-custom-blue">{children}</main>
      {!isStudioRoute && <SiteFooter />}
    </>
  );
}
