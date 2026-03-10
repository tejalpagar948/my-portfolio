'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      easing: 'ease-out-cubic',
      mirror: true,
    });

    // Ensure AOS picks up elements rendered on first paint.
    AOS.refreshHard();
  }, []);

  useEffect(() => {
    // Re-scan DOM after route changes / client-side content updates.
    AOS.refreshHard();
  }, [pathname]);

  return null;
}
