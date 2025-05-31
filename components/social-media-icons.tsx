import React from 'react'
import Image from 'next/image'; 

interface SocialMediaIconsProps{
}
const SocialMediaIcons : React.FC<SocialMediaIconsProps>=({
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
    <ul className="social-media-icons absolute bottom-[4.2%] translate-x-[-360px] w-auto flex gap-4.5 bg-custom-navy-blue rounded-bl-[50px] rounded-tl-[50px] p-4 border border-custom-dark-gray border-r-0 -z-10">
    { socialLinks.map((item ,index) => (
         <li  key={index} className="social-media-icons-items w-[12%] overflow-hidden flex rounded-[42px] borde-custom-white bg-[#070d1b] px-4 py-3 gap-4 border border-[0.5px] border-custom-dark-gray">
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