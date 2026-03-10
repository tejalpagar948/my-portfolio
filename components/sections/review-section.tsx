'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PersonImage from '../../public/assets/images/person-img.jpg';
import { useSliderSettings } from '../useSliderSettings';
import type { ReviewsSection, Review } from '@/sanity.types';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Extend Review type to include optional role
type ReviewWithRole = Review & { role?: string };

// Extend ReviewsSection to include reviews array
export type ReviewsSectionWithReviews = ReviewsSection & {
  reviews: ReviewWithRole[];
};

interface ReviewSectionProps {
  value: ReviewsSectionWithReviews;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ value }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const reviewsArrayLength = value.reviews?.length || 0;
  const settings = useSliderSettings({
    slidesToShow: 3,
    reviewsLength: reviewsArrayLength,
  });

  return (
    <section className="reviews relative pb-10 md:pb-15" id="reviews">
      <div className="wrapper">
        <h3 className="mb-10">{value.sectionTitle}</h3>

        {mounted && reviewsArrayLength > 3 ? (
          <Slider {...settings}>
            {value.reviews?.map((item, index) => (
              <div key={index} className="px-3">
                <ReviewCard item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <ul className="review-list flex flex-wrap md:flex-nowrap gap-7">
            {value.reviews?.map((item, index) => (
              <li key={index} className="w-full md:w-1/3">
                <ReviewCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;

// ⭐ CARD COMPONENT
const ReviewCard = ({ item }: { item: ReviewWithRole }) => (
  <div className="bg-[#0f1b2db0] border border-[#2a3446] rounded-xl p-7 text-center h-full flex flex-col justify-between transition-all duration-300 hover:border-custom-yellow hover:-translate-y-1">
    <span className="text-custom-yellow text-3xl leading-none mb-3">❝</span>
    <p className="text-gray-300 text-sm leading-relaxed mb-7">{item.message}</p>

    <div className="flex flex-col items-center mt-auto">
      <Link href={item.linkedin || '#'} target="_blank">
        <Image
          src={item.image ? urlFor(item.image).url() : PersonImage}
          alt={item.name || 'Person'}
          width={70}
          height={70}
          className="rounded-full mb-3 border-2 border-[#2a3446]"
        />
      </Link>

      <h6 className="text-white font-semibold text-base">{item.name}</h6>
      <span className="text-gray-400 text-sm">{item.role || 'Client'}</span>
    </div>
  </div>
);
