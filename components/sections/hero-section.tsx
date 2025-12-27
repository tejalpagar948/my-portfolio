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
import ChatLauncher from '@/components/chat-launcher';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface HeroSectionProps {
  value?: HeroSectionType;
}
const HeroSection: React.FC<HeroSectionProps> = ({ value }) => {
  if (!value) return null;
  console.log('HeroSection value 👉', value);
  return (
    <>
      <section className="banner relative">
        {/* <BackgroundLiquid /> */}
        <div className="wrapper flex justify-between items-center lg:pt-14 h-[550px] lg:h-full">
          <div className="banner-left w-full xl:w-4/8 text-custom-white">
            <PortableText
              value={value.heroContent ?? []}
              components={{
                marks: {
                  yellowSpan: ({ children }) => (
                    <span className="capitalize text-3xl text-custom-yellow">
                      {children}
                    </span>
                  ),

                  graySpan: ({ children }) => (
                    <span className="capitalize text-custom-midium-gray text-4xl">
                      {children}
                    </span>
                  ),
                },
              }}
            />
            <Button
              className={`mt-10`}
              title={value?.cta?.label || 'Contact Me'}
              href={value?.cta?.url}
            />
          </div>
          <motion.figure
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hidden xl:flex rounded-full w-[450px] h-[450px] bg-[#d3a641] border-4 border-custom-dark-gray relative z-10">
            {value?.image?.asset && (
              <Image
                src={urlFor(value.image).url()}
                alt={value.image.alt || 'Hero image'}
                priority
                width={360}
                height={528}
                unoptimized
                className="absolute -translate-x-1/2 -top-[80px] z-50 left-1/2 rounded-b-full w-90 h-[528px]"
              />
            )}
          </motion.figure>
        </div>
        {/* <SocialMediaIcons
            className={
              'absolute bottom-[0.9%] translate-x-[500px] bg-custom-navy-blue rounded-bl-[50px] rounded-tl-[50px] p-4 border border-custom-dark-gray border-r-0 '
            }
            childClassName={`w-[12%]`}
          /> */}
        <ChatLauncher />
      </section>
    </>
  );
};
export default HeroSection;
