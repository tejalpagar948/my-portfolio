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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 🔥 Lock body scroll when menu opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div className="relative lg:hidden">
      {/* Hamburger */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.8} />

      {/* Fullscreen Sliding Menu from Right */}
      <div
        className={`
          fixed right-0 
          bg-custom-blue backdrop-blur-xl z-40
          flex justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
          top-[88px] w-full h-[calc(100vh-88px)]
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
        <nav className="flex flex-col gap-6 text-center">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              title={item.title}
              onClick={() => setOpen(false)} // ✅ Close menu on click
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
