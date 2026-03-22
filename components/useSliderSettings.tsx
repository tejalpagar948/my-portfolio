import SliderArrow from './sliderArrow';

interface UseSliderSettingsProps {
  slidesToShow?: number;
  reviewsLength?: number;
  autoplay?: boolean;
}

export const useSliderSettings = ({
  slidesToShow = 3,
  reviewsLength = 0,
  autoplay = false,
}: UseSliderSettingsProps) => {
  return {
    dots: true,
    infinite: false, // ⭐ MUST for disable logic
    autoplay,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: reviewsLength > 1,
    nextArrow: <SliderArrow direction="next" slidesToShow={slidesToShow} />,
    prevArrow: <SliderArrow direction="prev" slidesToShow={slidesToShow} />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};
