'use client';

import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

export interface ResumeInnerItem {
  _key?: string;
  title?: string;
  content?: any;
}

export interface ResumeItem {
  title?: string;
  iconImage?: any;
  items?: ResumeInnerItem[];
}

interface ResumeContentListProps {
  resumeData: ResumeItem[];
}

const ResumeContentList: React.FC<ResumeContentListProps> = ({
  resumeData,
}) => {
  const formatMonthYear = (date?: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };
  return (
    <div className="resume-left flex flex-col md:flex-row gap-10">
      {resumeData.map((item, index) => (
        <div
          className="resume-content w-full md:w-1/2 flex flex-col gap-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay="100">
          {/* Caption */}
          <div className="resume-caption flex gap-7 items-center">
            {item.iconImage && (
              <Image
                src={urlFor(item.iconImage).url()}
                alt={item.title ?? 'Resume icon'}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                priority
                unoptimized
              />
            )}
            <h4 className="text-xl">{item.title}</h4>
          </div>

          {/* Resume Items */}
          <ul className="resume-content-list mt-6 mx-5 mb-0">
            {(item.items ?? []).map((innerItem, idx) => (
              <li
                key={innerItem._key ?? idx}
                className="resume-content-list-item pt-[1px] px-10 pb-12 flex flex-col gap-3 border-l-[1.5px] border-custom-grayish-blue relative !pr-0">
                <PortableText
                  value={innerItem?.content || []}
                  components={{
                    marks: {
                      whiteSmallSpan: ({ children }) => (
                        <span className="organisation text-xl py-2.5 px-0 text-white">
                          {children}
                        </span>
                      ),
                    },
                    types: {
                      dateRange: ({ value }) => (
                        <span className="period text-custom-light-gray text-base">
                          {formatMonthYear(value?.startDate)} -{' '}
                          {value?.isCurrent
                            ? `Present`
                            : formatMonthYear(value?.endDate)}
                        </span>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="!list-disc ml-5">{children}</ul>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="text-custom-light-gray">{children}</li>
                      ),
                    },
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResumeContentList;
