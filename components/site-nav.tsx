import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Header } from '@/sanity.types';

interface NavItem {
  title?: string;
  url?: string;
}

interface CtaItem {
  label?: string;
  url?: string;
  icon?: {
    url?: any;
  };
}

interface SiteNavProps {
  header: Header;
}

const SiteNav: React.FC<SiteNavProps> = ({ header }) => {
  const nav = header?.nav as NavItem[] | undefined;
  const cta = header?.cta as CtaItem[] | undefined;

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (!nav) return;

      let currentSection = '';
      nav.forEach((item) => {
        if (item.url) {
          const section = document.getElementById(item.url);
          if (section) {
            const top = section.offsetTop - 100; // offset for navbar height
            const bottom = top + section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < bottom) {
              currentSection = item.url;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize active section on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nav]);

  return (
    <nav>
      <ul className="gap-6 items-center hidden xl:flex">
        {nav &&
          nav.map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item.url ? `#${item.url}` : '/'}
                title={item?.title}
                className={`uppercase p-2.5 ${
                  activeSection === item.url
                    ? 'text-[#fec544]'
                    : 'text-white group-hover:text-[#fec544]'
                }`}>
                {item?.title}
              </Link>
            </li>
          ))}

        {cta &&
          cta.map((item, index) => (
            <li
              key={index}
              className={
                item.icon ? 'phone-number relative flex items-center pl-7 ' : ''
              }>
              {item.icon && (
                <Image
                  src={urlFor(item.icon.url).url()}
                  alt={item.label || `Phone Icon`}
                  priority
                  unoptimized
                  width={25}
                  height={25}
                />
              )}
              <Link
                href={item?.url || '/'}
                title={item.label}
                className={`uppercase p-2.5 text-[#fec544]`}>
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
