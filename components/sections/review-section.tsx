'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { urlFor } from '@/sanity/lib/image';
import type { ReviewsSection, Review } from '@/sanity.types';

type ReviewWithRole = Review & { designation?: string };
export type ReviewsSectionWithReviews = ReviewsSection & {
  reviews: ReviewWithRole[];
};

interface ReviewSectionProps {
  value: ReviewsSectionWithReviews;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ value }) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Measure tallest card
  useLayoutEffect(() => {
    const heights = cardRefs.current.map((card) => card?.offsetHeight || 0);
    const largestHeight = Math.max(...heights);
    setMaxHeight(largestHeight);
  }, [value.reviews]);

  // Duplicate reviews array for seamless scrolling
  const displayReviews = [...value.reviews, ...value.reviews];

  console.log('Hi', value);
  return (
    <section className="reviews relative pb-10 md:pb-15" id="reviews">
      <div className="wrapper">
        <h3
          className="mb-10 text-2xl font-bold"
          data-aos="fade-up"
          data-aos-delay="100">
          {value.sectionTitle}
        </h3>

        {value.reviews.length > 0 && (
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            loop={0}
            className="overflow-hidden">
            <div
              className="flex mt-1.5"
              style={{ height: maxHeight || 'auto' }}
              data-aos="fade-up"
              data-aos-delay="100">
              {displayReviews.map((item, index) => (
                <div
                  key={index}
                  ref={
                    index < value.reviews.length
                      ? (el) => {
                          cardRefs.current[index] = el;
                        }
                      : null
                  }
                  className="flex-shrink-0 px-3 w-[300px] md:w-[350px]">
                  <ReviewCard item={item} />
                </div>
              ))}
            </div>
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;

// Individual Review Card
const ReviewCard = ({ item }: { item: ReviewWithRole }) => (
  <div className="bg-[#0f1b2db0] border border-[#2a3446] rounded-xl py-7 px-4 text-center h-full flex flex-col justify-between transition-all duration-300 hover:border-custom-yellow hover:-translate-y-1">
    <span className="text-custom-yellow text-3xl leading-none mb-3">❝</span>
    <p className="text-gray-300 text-sm leading-relaxed mb-7">{item.message}</p>

    <div className="flex flex-col items-center mt-auto">
      <Link href={item.linkedin || '#'} target="_blank">
        {item.image ? (
          <Image
            src={urlFor(item.image).url()}
            alt={item.name || 'Person'}
            width={70}
            height={70}
            className="!h-[70px] rounded-full mb-3 border-2 border-[#2a3446]"
            unoptimized
          />
        ) : (
          <div className="w-[70px] h-[70px] bg-amber-400 rounded-full mb-3 border-2 border-[#2a3446] flex items-center justify-center">
            <span className="font-bold text-[#2a3446] text-[28px] leading-none">
              {item?.name
                ?.split(' ')
                .slice(0, 2)
                .map((v) => v.charAt(0).toUpperCase())
                .join('')}
            </span>
          </div>
        )}
      </Link>

      <h6 className="text-white font-semibold text-base">{item.name}</h6>
      <span className="text-gray-400 text-sm">
        {item.designation || 'Colleague'}
      </span>
    </div>
  </div>
);
