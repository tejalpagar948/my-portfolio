import React from 'react';
import Image from 'next/image'; 
import PhoneIcon from '../public/assets/icons/phone.svg'; 


interface SiteNavProps {}

const SiteNav: React.FC<SiteNavProps> = () => {
 
  const navItems = [
    {
      label: "Home",
      href: "/",
      title: "Home",
    },
    {
      label: "About",
      href: "#FIXME",
      title: "About",
    },
    {
      label: "Resume",
      href: "#FIXME",
      title: "Resume",
    },
    {
      label: "Portfolio",
      href: "#FIXME",
      title: "Portfolio",
    },
    {
      label: "Contact",
      href: "#FIXME",
      title: "Contact",
    },
    {
      label: "+1 971 234 1508",
      href: "tel:+19712341508",
      title: "Phone Number",
      icon: PhoneIcon,
    }
  ];  
  
  return (
    <nav className=''>
      <ul className="gap-6 items-center hidden md:flex">
      {navItems.map((item, index) => (
          <li key={index} className={item.icon ? "phone-number relative flex items-center pl-7 " : ""}>
            {item.icon && (
              <Image
                src={item.icon}
                alt="Phone Icon"
                width={25}
                height={25}
              />
            )}  
          <a href={item.href} title={item.title} className={`uppercase p-2.5  ${item.icon ? 'text-[#fec544]' : 'text-white'}`}>
          {item.label}
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
};

export default SiteNav;