'use client';

import React from 'react';

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative h-12 w-12 "
      aria-label="Toggle menu">
      {/* LINE 1 */}
      <span
        className={`absolute left-1/2 top-4 h-[2px] w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300
          ${open ? 'rotate-45 top-6' : ''}
        `}
      />

      {/* LINE 2 */}
      <span
        className={`absolute left-1/2 top-6 h-[2px] w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300
          ${open ? 'opacity-0' : ''}
        `}
      />

      {/* LINE 3 */}
      <span
        className={`absolute left-1/2 top-8 h-[2px] w-6 -translate-x-1/2 rounded-full bg-white transition-all duration-300
          ${open ? '-rotate-45 top-6' : ''}
        `}
      />
    </button>
  );
};

export default Hamburger;
