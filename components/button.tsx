'use client';

import React from 'react';

interface ButtonProps {
  className?: string;
  title?: string;
  href?: string;
  download?: boolean;
  target?: '_self' | '_blank';
  onClick?: () => void | Promise<void>;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  title = 'Hire Me',
  href,
  download = false,
  target = '_self',
  onClick,
}) => {
  const commonClasses =
    'bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl';

  // ✅ ACTION BUTTON (download, submit, etc.)
  if (onClick) {
    return (
      <div className={`button mt-8 ${className}`}>
        <button type="button" onClick={onClick} className={commonClasses}>
          {title}
        </button>
      </div>
    );
  }

  // ✅ LINK BUTTON
  if (href) {
    return (
      <div className={`button mt-8 ${className}`}>
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={commonClasses}
          {...(download ? { download: true } : {})}>
          {title}
        </a>
      </div>
    );
  }

  return null;
};

export default Button;
