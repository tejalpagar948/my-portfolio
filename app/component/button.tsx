'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ButtonProps {
  title?: string;
  href: string;
  className?: string;
  target?: '_self' | '_blank';
  commonClasses?: string;
  icon?: string | StaticImageData;
}

const Button: React.FC<ButtonProps> = ({
  title,
  href,
  className = '',
  target = '_self',
  commonClasses = '',
  icon,
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`
        ${className}
        inline-flex
        items-center
        justify-center
        gap-2
        py-3.5
        px-8
        transition
        rounded-full
        bg-white
        text-black
        text-xs
        tracking-wider
        font-medium
        w-max
        hover:opacity-90
        ${commonClasses}
      `}>
      {/* Title */}
      {title && <span>{title}</span>}

      {/* Icon */}
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
    </Link>
  );
};

export default Button;
