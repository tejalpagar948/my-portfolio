// useSliderSettings.ts
import SliderArrow from './sliderArrow';

interface UseSliderSettingsProps {
  slidesToShow?: number;
  reviewsLength?: number;
  autoplay?: boolean;
}

export const useSliderSettings = ({
  slidesToShow = 3,
  reviewsLength = 0,
  autoplay = true,
}) => {
  const getSlidesToScroll = (visibleSlides: number) => {
    return reviewsLength > visibleSlides && reviewsLength % visibleSlides === 0
      ? visibleSlides
      : 1;
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay,
    speed: 1000,
    slidesToShow,
    slidesToScroll: getSlidesToScroll(slidesToShow),

    nextArrow: <SliderArrow direction="next" slidesToShow={slidesToShow} />,
    prevArrow: <SliderArrow direction="prev" />,
    arrows: reviewsLength > slidesToShow,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: getSlidesToScroll(2), // ⭐ IMPORTANT
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // ⭐ ALWAYS 1 ON MOBILE
        },
      },
    ],
  };

  return settings;
};
