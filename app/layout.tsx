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
    </html>
  );
}
