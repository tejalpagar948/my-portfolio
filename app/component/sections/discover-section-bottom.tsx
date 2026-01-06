'use client';

import Slider from 'react-slick';
import TestimonialCard from '../../component/testimonial-card';
import PersonImage from '../../../public/assets/images/person-image.png';

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Roy Franklin',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Gary Howard',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Louna Daniel',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Joe Marshall',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Roy Franklin',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Gary Howard',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Louna Daniel',
    designation: 'Designation',
    image: PersonImage.src,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    name: 'Joe Marshall',
    designation: 'Designation',
    image: PersonImage.src,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative overflow-hidden">
      <div className="wrapper pt-18 pb-27 relative z-10">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-5.5 h-full">
              <TestimonialCard {...item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* LEFT BLACK SHADING */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent z-20" />

      {/* RIGHT BLACK SHADING */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent z-20" />
    </section>
  );
};

export default TestimonialsCarousel;
