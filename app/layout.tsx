"use client";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");
  return (
    <html lang="en">
      <body
        className={`text-custom-white`}
      >
      {!isStudioRoute && <SiteHeader />}
      <main className="bg-custom-blue">{children}</main>
      {!isStudioRoute && <SiteFooter />}
      </body>
    </html>
  );
}
