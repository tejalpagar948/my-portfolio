'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface SocialLink {
  platform?: string;
  title?: string;
  url?: string;
  icon?: any; // Sanity image object
}

interface SocialMediaIconsProps {
  className?: string;
  childClassName?: string;
  socialLinks?: SocialLink[];
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  className = '',
  childClassName = '',
  socialLinks,
}) => {
  console.log('Social Links:', socialLinks);
  return (
    <ul className={`social-media-icons w-auto flex gap-4.5 ${className}`}>
      {socialLinks?.map((item, index) => (
        <li
          key={index}
          className={`
            social-media-icons-items overflow-hidden rounded-[42px] bg-[#070d1b] px-4 py-4 md:py-3 border border-[0.5px] border-custom-dark-gray ${childClassName} transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:w-auto hover:translate-x-2 
          `}>
          <Link
            href={item?.url || '#'}
            title={item?.platform}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-white font-bold leading-6 flex gap-6.5 items-center">
            {item.icon && (
              <Image
                src={urlFor(item.icon).url()}
                alt={item?.platform || ''}
                width={20}
                height={20}
                priority
                unoptimized
                className="transition-transform duration-[1500ms] ease-out group-hover:rotate-[360deg] group-hover:scale-110"
              />
            )}
            {/* TEXT ANIMATION */}
            <span
              className="hidden lg:block translate-x-[-10px]
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all ease-[cubic-bezier(0.23,1,0.32,1)]">
              {item.platform}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
