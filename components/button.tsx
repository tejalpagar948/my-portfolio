import React from 'react';
// import React from '../public/assets/pdf/Tejal_Pagar_Resume.pdf';

interface ButtonProps {
  className?: string; 
  title?: string;
  href?: string;
  download?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  title = 'Hire Me',
  href = '#FIXME',
}) => {
  return (
    <div className={`button mt-8 ${className}`}>
      <a
        href="assets/pdf/Tejal_Pagar_Resume.pdf"
        target="_self"
        title={title}
        className={`capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl`}
        download
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
