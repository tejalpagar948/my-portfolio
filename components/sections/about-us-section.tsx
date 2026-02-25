'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../button';
import { useEffect } from 'react';
import AOS from 'aos';
import type { AboutSection as AboutSectionType } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

export interface AboutUsProps {
  value: AboutSectionType;
}

const AboutSection: React.FC<AboutUsProps> = ({ value }) => {
  useEffect(() => {
    AOS.refresh();
  }, [value]);

  if (!value) return null;

  const downloadFile = async (url?: string, filename?: string) => {
    if (!url) return;

    const response = await fetch(url);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = blobUrl;
    link.download = filename || 'file';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <section className="about" id="about">
      <div className="wrapper">
        <h3 className="all-caps" data-aos="fade-up" data-aos-delay="100">
          {value.sectionTitle}
        </h3>
        <div className="about-content gap-13 flex flex-col md:flex-row">
          <figure
            className="about-content-left w-full md:w-1/2"
            data-aos="fade-up"
            data-aos-delay="100">
            {value.image?.asset && (
              <Image
                src={urlFor(value.image).url()}
                alt={value.image.alt || 'About Image'}
                priority
                width={500}
                height={500}
                unoptimized
                className="aspect-[6/6] md:aspect-auto md:h-128 w-full"
              />
            )}
          </figure>

          <div
            className="about-content-right w-full md:w-1/2 flex flex-col gap-5 py-4 px-0"
            data-aos="fade-up"
            data-aos-delay="100">
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
                        <span className="info-span-left capitalize w-[23%] md:w-[16%]">
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
              className="mt-6"
              title={value.cta?.label || 'Contact Me'}
              onClick={() =>
                downloadFile((value.cta?.file?.asset as any)?.url, 'resume.pdf')
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
