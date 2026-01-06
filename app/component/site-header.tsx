'use client';
import React, { useState } from 'react';
import Navbar from './navBar';
import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '../../public/assets/images/matour-logo_1.png';
import Hamburger from './hamburger';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 z-20 w-full py-4">
      <div className="flex items-center justify-between wrapper">
        {/* Logo */}
        <h1>
          <Link href="/" className="text-3xl font-bold text-white">
            <Image
              src={LogoWhite.src}
              alt="NoBT World Logo"
              width={150}
              height={50}
              unoptimized
              priority
            />
          </Link>
        </h1>
        {/* Desktop Navigation */}
        <Navbar />

        {/* Mobile Menu Icon */}
        <Hamburger open={open} onClick={() => setOpen(!open)} />
      </div>
    </header>
  );
};

export default Header;
