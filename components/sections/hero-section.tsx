'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import Button from '@/components/button';
import { PortableText } from '@portabletext/react';
import type { HeroSection as HeroSectionType } from '@/sanity.types';
import ChatLauncher from '@/components/chat-launcher';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface HeroSectionProps {
  value?: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ value }) => {
  useEffect(() => {
    AOS.refresh();
  }, [value]);

  if (!value) return null;

  return (
    <section className="banner relative">
      <div className="wrapper flex justify-between items-center lg:pt-14 h-[550px] lg:h-full">
        {/* LEFT CONTENT */}
        <div
          className="banner-left w-full xl:w-4/8 text-custom-white"
          data-aos="fade-up"
          data-aos-delay="100">
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
                  <span className="capitalize text-custom-midium-gray text-3xl md:text-4xl">
                    {children}
                  </span>
                ),
              },
            }}
          />

          {/* BUTTON */}
          <div>
            <Button
              className="mt-10"
              title={value?.cta?.label || 'Contact Me'}
              href={value?.cta?.sectionId ? `#${value.cta.sectionId}` : '#'}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <figure
          className="hidden xl:flex rounded-full w-[450px] h-[450px] bg-[#d3a641] border-4 border-custom-dark-gray relative z-10"
          data-aos="fade-up"
          data-aos-delay="100">
          {value?.image?.asset && (
            <Image
              src={urlFor(value.image).url()}
              alt={value.image.alt || 'Hero Image'}
              priority
              width={360}
              height={528}
              unoptimized
              className="absolute -translate-x-1/2 -top-[80px] z-50 left-1/2 rounded-b-full w-90 h-[528px]"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          )}
        </figure>
      </div>

      {/* CHAT LAUNCHER */}
      <div>
        <ChatLauncher />
      </div>
    </section>
  );
};

export default HeroSection;
