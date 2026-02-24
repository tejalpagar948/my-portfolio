import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientLayout from './client-layout';
import AOSProvider from '@/components/animation/aosProvider';
import { getHeader } from '@/sanity/lib/queries';
import { getFooter } from '@/sanity/lib/queries';
import { getSiteConfig } from '@/sanity/lib/queries';
import Providers from './providers';

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
};

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
        <Providers>
          <AOSProvider />
          <ClientLayout header={header} footer={footer} siteConfig={siteConfig}>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
