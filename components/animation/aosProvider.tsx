'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay init slightly to ensure all DOM elements exist
    const timeout = setTimeout(() => {
      AOS.init({
        duration: 800,
        offset: 120,
        easing: 'ease-out-cubic',
        once: false, // allow repeated animations
        mirror: true, // animate when scrolling back
      });
      AOS.refresh(); // detect all elements in the DOM
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Refresh AOS after route changes with small delay
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
