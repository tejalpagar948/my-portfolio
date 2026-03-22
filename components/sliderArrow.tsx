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
    direction === 'prev'
      ? currentSlide === 0
      : currentSlide >= slideCount - slidesToShow;

  const arrowClass = `
    absolute top-1/2 w-14 h-14 flex items-center justify-center rounded-full 
    -translate-y-1/2 transition-colors
    ${direction === 'next' ? 'right-[-40px]' : 'left-[-40px]'}
    ${
      isDisabled
        ? 'text-gray-600 cursor-not-allowed opacity-40'
        : 'text-gray-300 hover:text-white'
    }
  `;

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
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
