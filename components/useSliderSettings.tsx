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
}: UseSliderSettingsProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1, // fixed scroll

    nextArrow: <SliderArrow direction="next" slidesToShow={slidesToShow} />,
    prevArrow: <SliderArrow direction="prev" />,
    arrows: reviewsLength > slidesToShow,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // always 1 on smaller screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // always 1 on mobile
        },
      },
    ],
  };

  return settings;
};
