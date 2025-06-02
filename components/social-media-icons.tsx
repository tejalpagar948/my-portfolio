import React from 'react'
import Image from 'next/image'; 

interface SocialMediaIconsProps{
  className?: string; 
  childClassName?: string;
}
const SocialMediaIcons : React.FC<SocialMediaIconsProps>=({
  className = '',
  childClassName = '',
})=>{
  const socialLinks = [
    {
      platform: "LinkedIN",
      icon: "./assets/icons/linkedin.svg",
      title: "LinkedIN",
      link: "#FIXME",
      target:"_blank"
    },
    {
      platform: "Twitter",
      icon: "./assets/icons/twitter.svg",
      title: "Twitter",
      link: "#FIXME",
      target:"_blank"
    },
    {
      platform: "Instagram",
      icon: "./assets/icons/instagram.svg",
      title: "Instagram",
      link: "#FIXME",
      target:"_blank"
    }
  ];

  return(
    <>
    <ul className={`social-media-icons w-auto flex gap-4.5 ${className}`}>
    {socialLinks.map((item ,index) => (
         <li  key={index} className={`social-media-icons-items overflow-hidden flex rounded-[42px] borde-custom-white bg-[#070d1b] px-4 py-3 gap-4 border border-[0.5px] border-custom-dark-gray ${childClassName}`}>
         <Image
           src={item.icon}
           alt=""
           width="20"
           height="20"
         />
         <a
           href={item.link}
           title={item.platform}
           target={item.target}
           rel="noopener noreferrer"
           className='text-custom-white font-bold leading-6'
           >{item.title}</a>
       </li>
    ))}
    </ul>
    </>
  )
}
export default SocialMediaIcons ;