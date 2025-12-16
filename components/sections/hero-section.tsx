'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/button';
import SocialMediaIcons from '@/components/social-media-icons';
import { motion } from 'framer-motion';
import type { Page } from '@/sanity.types';
import {
  PortableTextMarkComponentProps,
  PortableText,
  PortableTextComponents,
} from '@portabletext/react';
import type { HeroSection as HeroSectionType } from '@/sanity.types';
import BackgroundLiquid from '@/components/background-liquid';

interface HeroSectionProps {
  value?: HeroSectionType;
}
const HeroSection: React.FC<HeroSectionProps> = ({ value }) => {
  if (!value) return null;
  return (
    <>
      <section className="banner relative">
        {/* <BackgroundLiquid /> */}
        <div className="wrapper flex justify-between items-center lg:pt-14 h-[550px] lg:h-full">
          <div className="banner-left w-full lg:w-4/8 text-custom-white">
            <span className="capitalize text-3xl text-custom-yellow">
              hello i'm
            </span>
            <PortableText value={value.heroContent ?? []} />
            <span className="capitalize text-custom-midium-gray text-4xl">
              software developer
            </span>
            <Button className={`mt-10`} title={`Hire Me`} href={`#FIXME`} />
          </div>
          <motion.figure
            initial={{ y: -60, opacity: 0 }} // Start position (hidden above)
            animate={{ y: 0, opacity: 1 }} // End position (normal)
            transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
            className="hidden lg:flex rounded-full w-[450px] h-[450px] bg-[#d3a641] border-4 border-custom-dark-gray relative z-10">
            <img
              src="./assets/images/edited image.png"
              alt="Tejal Pagar"
              className="absolute -top-20 -translate-x-1/2 z-50 left-1/2 rounded-b-full h-[528px] w-90"
            />
          </motion.figure>
        </div>
        {/* <SocialMediaIcons
            className={
              'absolute bottom-[0.9%] translate-x-[500px] bg-custom-navy-blue rounded-bl-[50px] rounded-tl-[50px] p-4 border border-custom-dark-gray border-r-0 '
            }
            childClassName={`w-[12%]`}
          /> */}
      </section>
    </>
  );
};
export default HeroSection;
