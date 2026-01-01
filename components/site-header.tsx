import React from 'react';
import SiteNav from '../components/site-nav';
import Logo from '../public/assets/images/tejal-logo.png';
import Image from 'next/image';
import HamburgerMenu from '@/components/hamburgerMenu';
import Link from 'next/link';

interface SiteHeaderProps {}
const SiteHeader: React.FC<SiteHeaderProps> = ({}) => {
  return (
    <>
      {/* <!--header section start--> */}
      <header className="bg-custom-blue w-full top-0 left-0  sticky z-200">
        <div className="wrapper mx-auto flex justify-between py-5 items-center">
          <Link href="/" title="Home" target="_self">
            <Image src={Logo} alt="Logo" className="w-[135px]" />
          </Link>
          <SiteNav />
          <HamburgerMenu />
        </div>
      </header>
      {/* <!--header section start-->    */}
    </>
  );
};
export default SiteHeader;
