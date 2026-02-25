'use client';

import { Sling as Hamburger } from 'hamburger-react';
import { useState, FC } from 'react';

const HamburgerMenu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const navItems = [
    { label: 'Home', href: '/', title: 'Home' },
    { label: 'About', href: '#about', title: 'About' },
    { label: 'Resume', href: '#resume', title: 'Resume' },
    { label: 'Project', href: '#project', title: 'Project' },
    { label: 'Contact', href: '#contact', title: 'Contact' },
  ];

  return (
    <div className="relative xl:hidden">
      {/* Hamburger Icon */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.8} />

      {/* Fullscreen Sliding Menu below header */}
      <div
        className={`
          fixed top-[88px] left-0 right-0 bottom-0
          bg-custom-blue backdrop-blur-xl
          z-40
          flex justify-center items-center
          overflow-hidden
          transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
        {/* Centered Nav Links */}
        <nav className="flex flex-col gap-6 text-center">
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
