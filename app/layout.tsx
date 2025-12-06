import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientLayout from './client-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-custom-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
