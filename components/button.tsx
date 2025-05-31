import React from 'react';

interface ButtonProps {
  className?: string; 
  title?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  title = 'Hire Me',
  href = '#FIXME',
}) => {
  return (
    <div className={`button mt-8 ${className}`}>
      <a
        href={href}
        target="_self"
        title={title}
        className={`capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl`}
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
