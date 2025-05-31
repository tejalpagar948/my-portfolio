import React from 'react';
import SiteNav from "../components/site-nav";
import Logo from '../public/assets/images/logo.png'; 
import Image from 'next/image';

interface SiteHeaderProps{
}
const SiteHeader : React.FC<SiteHeaderProps>=({
})=>{
  return(
    <>
      {/* <!--header section start--> */}
      <header className="bg-custom-blue w-full top-0 left-0 z-50 sticky">
        <div className="wrapper mx-auto flex justify-between p-5">
          <figure>
            <a href="/" title="Home" target="_self">
              <Image src={Logo} alt="Logo" />
            </a>
          </figure>
          <SiteNav/>
          </div>
      </header>
    {/* <!--header section start-->    */}
    </>
  )
}
export default SiteHeader ;