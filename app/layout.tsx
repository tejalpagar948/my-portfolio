<<<<<<< HEAD
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-elmessiri">{children}</body>
=======
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientLayout from './client-layout';
import AOSProvider from '@/components/animation/aosProvider';
import { getHeader } from '@/sanity/lib/queries';
import { getFooter } from '@/sanity/lib/queries';
import { getSiteConfig } from '@/sanity/lib/queries';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Fetch here (SERVER component)
  const header = await getHeader();
  const footer = await getFooter();
  if (!footer?.content) return null;

  const siteConfig = await getSiteConfig();
  if (!siteConfig) return null;

  return (
    <html lang="en">
      <body className="text-custom-white">
        <AOSProvider />
        <ClientLayout header={header} footer={footer} siteConfig={siteConfig}>
          {children}
        </ClientLayout>
      </body>
>>>>>>> 8c5257b627f2e18cf7d28436007025e415a44ec9
    </html>
  );
}
