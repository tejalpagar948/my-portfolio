'use client';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import PersonImage from '../../public/assets/images/person-img.jpg';
import PreviousIcon from '../../public/assets/icons/previous.svg';
import NextIcon from '../../public/assets/icons/next.svg';

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-85px] left-1/2 translate-x-5 z-10 text-white text-xl"
    >
    <Image src={PreviousIcon} alt="Person" className="rounded-full" />
    </button>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-85px] left-1/2 -translate-x-5 z-10 text-white text-xl"
    >
     <Image src={NextIcon} alt="Person" className="rounded-full" />
    </button>
  );
};

const ReviewSection = () => {
  const reviewsData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.",
      name: "ABC XYZ",
      role: "Designation"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.",
      name: "ABC XYZ",
      role: "Designation"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis.",
      name: "ABC XYZ",
      role: "Designation"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="reviews pb-24">
      <div className="wrapper">
        <h3 className="">Reviews</h3>
        <ul className="review-list review-slider custom-slick-wrapper">
          <Slider {...settings}>
            {reviewsData.map((item, index) => (
              <li key={index} className="review-list-item w-full md:w-1/3 flex flex-col items-center">
                <p className="review-para text-center bg-custom-navy-blue border border-custom-grayish-blue hover:border-custom-yellow py-5 px-2 relative">
                  {item.text}
                </p>
                <div className="person-info w-2/6 m-auto mt-10 flex flex-col items-center gap-1">
                  <figure className="rounded-full mb-3.5">
                    <Image src={PersonImage} alt="Person" className="rounded-full" />
                  </figure>
                  <h6 className="person-name">{item.name}</h6>
                  <span className="person-role text-custom-light-gray">{item.role}</span>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default ReviewSection;
