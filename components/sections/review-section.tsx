'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import PersonImage from '../../public/assets/images/person-img.jpg';
import FeedbackForm from '../feedback';
import { useSliderSettings } from '../useSliderSettings';

const ReviewSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviewsData = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.',
      name: 'ABC XYZ',
      role: 'Designation',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.',
      name: 'ABC XYZ',
      role: 'Designation',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.',
      name: 'ABC XYZ',
      role: 'Designation',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.',
      name: 'ABC XYZ',
      role: 'Designation',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.',
      name: 'ABC XYZ',
      role: 'Designation',
    },
  ];

  const settings = useSliderSettings({
    slidesToShow: 3,
    reviewsLength: reviewsData.length,
  });

  return (
    <section className="reviews relative pb-10 md:pb-15" id="reviews">
      <div className="wrapper">
        <h3 className="mb-10">Reviews</h3>
        {/* ⭐ If more than 3 show slider */}
        {reviewsData.length > 3 ? (
          <Slider {...settings}>
            {reviewsData.map((item, index) => (
              <div key={index} className="px-3">
                <ReviewCard item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <ul className="review-list flex flex-wrap md:flex-nowrap gap-7">
            {reviewsData.map((item, index) => (
              <li key={index} className="w-full md:w-1/3">
                <ReviewCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ⭐ Floating Button */}
      <div className="sticky flex gap-2.5 z-50  mt-10 bottom-8 left-24 justify-start align-center items-center pl-3.5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="capitalize bg-custom-yellow text-custom-black py-3 px-3 rounded-4xl ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="4"
              y="3"
              width="16"
              height="22"
              rx="3"
              fill="#FFFFFF"
              stroke="#a9adb8"
              stroke-width="1"
            />

            <line
              x1="7"
              y1="10"
              x2="17"
              y2="10"
              stroke="#3f4551"
              stroke-width="1.5"
            />
            <line
              x1="7"
              y1="14"
              x2="17"
              y2="14"
              stroke="#3f4551"
              stroke-width="1.5"
            />

            <path d="M18 16l5-5 2 2-5 5-3 1 1-3z" fill="#3f4551" />

            <path d="M23 11l1-1 2 2-1 1z" fill="#3f4551" />
          </svg>
        </button>
        <span className="bg-white text-[#121c30] py-1 px-3 rounded-lg text-sm h-auto rounded-tl-none hidden md:block mt-[8px]">
          Write a Review
        </span>
      </div>

      {/* ⭐ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl z-100">
              ✕
            </button>
            <FeedbackForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;

// ⭐ CARD COMPONENT (Fixed border class)
const ReviewCard = ({ item }: any) => (
  <div className="review-card group review-list-item w-full flex flex-col align-center">
    <p className="review-para text-center bg-custom-navy-blue border border-custom-grayish-blue py-5 px-2 relative group-hover:border-custom-yellow group-hover:after:border-custom-yellow">
      {item.text}
    </p>
    <div className="person-info w-2/6 m-auto mt-10 flex flex-col items-center gap-1">
      <figure className="rounded-full mb-3.5">
        <Image src={PersonImage} alt="Person" className="rounded-full" />
      </figure>
      <h6 className="person-name">{item.name}</h6>
      <span className="person-role text-custom-light-gray">{item.role}</span>
    </div>
  </div>
);
