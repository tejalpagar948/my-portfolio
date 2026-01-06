import React from 'react';
import SiteNav from './site-nav';
import Image from 'next/image';
import HamburgerMenu from '@/components/hamburgerMenu';
import Link from 'next/link';
import { Header, SiteConfig } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';

interface SiteHeaderProps {
  header: Header;
  siteConfig: SiteConfig;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ header, siteConfig }) => {
  return (
    <header className="bg-custom-blue w-full top-0 left-0 sticky z-200">
      <div className="wrapper mx-auto flex justify-between py-5 items-center">
        <Link href="/" title="Home">
          {siteConfig?.logo && (
            <Image
              src={urlFor(siteConfig.logo).url()}
              alt={siteConfig.name || 'Logo'}
              width={180}
              height={60}
              className="w-[135px]"
              priority
              unoptimized
            />
          )}
        </Link>

        <SiteNav header={header} />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default SiteHeader;
