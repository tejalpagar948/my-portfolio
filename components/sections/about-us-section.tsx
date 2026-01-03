import React from 'react';
import Image from 'next/image';
import Button from '../button';
import type { AboutSection as AboutSectionType } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import {
  PortableTextMarkComponentProps,
  PortableText,
  PortableTextComponents,
} from '@portabletext/react';
export interface AboutUsProps {
  value: AboutSectionType;
}

const AboutSection: React.FC<AboutUsProps> = ({ value }) => {
  if (!value) return null;
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <h3 className="all-caps">{value?.sectionTitle}</h3>
        <div className="about-content gap-13 flex flex-col md:flex-row">
          <figure className="about-content-left w-full md:w-1/2 ">
            {value?.image?.asset && (
              <Image
                src={urlFor(value.image).url()}
                alt={value.image.alt || 'About Image'}
                priority
                width={500}
                height={500}
                unoptimized
                className="aspect-[6/6] md:aspect-auto md:h-128  relative"
              />
            )}
          </figure>
          <div className="about-content-right w-full md:w-1/2 flex flex-col gap-5 py-4 px-0">
            <PortableText
              value={value.aboutContent ?? []}
              components={{
                marks: {
                  yellowSmallSpan: ({ children }) => (
                    <span className="capitalize yellow-span">{children}</span>
                  ),
                },
                types: {
                  keyValueItem: ({ value }) => (
                    <ul className="info-list flex flex-col gap-6 text-custom-light-gray">
                      <li className="info-list-item flex">
                        <span className="info-span-left capitalize w-[16%]">
                          {value.key}
                        </span>
                        <span className="info-span-right flex gap-2.5">
                          {value.value}
                        </span>
                      </li>
                    </ul>
                  ),
                },
              }}
            />
            <Button
              className={`mt-6`}
              title={value?.cta?.label || 'Contact Me'}
              href={(value?.cta?.file?.asset as any)?.url}
              download
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
