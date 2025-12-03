'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/button';
import SocialMediaIcons from '@/components/social-media-icons';

interface BannerProps {}
const Banner: React.FC<BannerProps> = ({}) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY) {
  //       setScrollDirection("down");
  //       console.log("Scrolling down ⬇️");
  //     } else if (currentScrollY < lastScrollY) {
  //       setScrollDirection("up");
  //       console.log("Scrolling up ⬆️");
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <>
      <section className="banner relative">
        <div className={`w-full mx-auto`}>
          <figure className="">
            <img
              src="./assets/images/banner-placeholder.svg"
              alt="Banner Image"
              className="h-full w-auto object-cover"
            />
          </figure>
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-[1920px] w-5/6 mx-auto ">
            <div className="banner-left w-full md:w-4/8 text-custom-white p-5">
              <span className="capitalize text-3xl text-custom-yellow">
                hello i'm
              </span>
              <h2 className="uppercase">tejal pagar</h2>
              <span className="capitalize text-custom-midium-gray text-4xl">
                software developer
              </span>
              <Button className={`mt-10`} title={`Hire Me`} href={`#FIXME`} />
            </div>
          </div>
          <div className="text-custom-white absolute top-0 right-0 z-40  w-[45%]">
            <figure className="overflow-hidden hidden md:block">
              <img
                src="./assets/images/person-img.jpg"
                alt="Tejal Pagar"
                className={`object-cover h-[659px] w-full transition-transform duration-500 ease-in-out ${
                  scrollDirection === 'down'
                    ? 'translate-x-[100px]'
                    : 'translate-x-0'
                }`}
              />
            </figure>
            <SocialMediaIcons
              className={
                'absolute bottom-[4.2%] translate-x-[-360px] bg-custom-navy-blue rounded-bl-[50px] rounded-tl-[50px] p-4 border border-custom-dark-gray border-r-0 -z-10'
              }
              childClassName={`w-[12%]`}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
