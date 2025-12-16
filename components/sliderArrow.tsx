'use client';
import React from 'react';

interface SliderArrowProps {
  onClick?: () => void;
  direction: 'next' | 'prev';
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
}

const SliderArrow: React.FC<SliderArrowProps> = ({
  onClick,
  direction,
  currentSlide = 0,
  slideCount = 0,
  slidesToShow = 1,
}) => {
  const isDisabled =
    direction === 'next'
      ? currentSlide >= slideCount - slidesToShow
      : currentSlide === 0;

  // Conditional class with custom names
  const arrowClass = `
    absolute top-1/2 w-14 h-14 flex items-center justify-center rounded-full -translate-y-1/2 transition-colors
    ${
      direction === 'next'
        ? 'right-[-30px] next-slick'
        : 'left-[-30px] prev-slick'
    }
    ${isDisabled ? 'text-custom-dark-gray' : 'text-gray-300'}
  `;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={direction === 'next' ? 'Next Slide' : 'Previous Slide'}
      className={arrowClass}>
      {direction === 'next' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      )}
    </button>
  );
};

export default SliderArrow;
