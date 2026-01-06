'use client';

import { Sling as Hamburger } from 'hamburger-react';
import { useState, useEffect, FC } from 'react';

const HamburgerMenu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', title: 'Home' },
    { label: 'About', href: '#about', title: 'About' },
    { label: 'Resume', href: '#resume', title: 'Resume' },
    { label: 'Project', href: '#project', title: 'Project' },
    { label: 'Contact', href: '#contact', title: 'Contact' },
  ];

  return (
    <div className="relative xl:hidden">
      {/* Hamburger */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.8} />

      {/* Fullscreen Sliding Menu */}
      <div
        className={`
          fixed right-0 top-[88px]
          w-full h-[calc(100vh-88px)]
          bg-custom-blue backdrop-blur-xl
          z-40
          flex justify-center items-center
          overflow-hidden
          transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
        <nav className="flex flex-col gap-6 text-center overflow-hidden">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              title={item.title}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${index * 0.1}s` }}
              className={`
                text-white text-[22px]
                transition-all duration-300
                ${
                  isOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-6'
                }
              `}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
