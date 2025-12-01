import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import PersonImage from '../../public/assets/images/person-img.jpg';
import FeedbackForm from '../feedback'; // Import your FeedbackForm component

interface ReviewSectionProps {}

const ReviewSection: React.FC<ReviewSectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="reviews pb-24 relative">
      <div className="wrapper">
        <h3 className="">Reviews</h3>
        <ul className="review-list flex flex-wrap md:flex-nowrap gap-7">
          {reviewsData.map((item, index) => (
            <li key={index} className="review-list-item w-full md:w-1/3 flex flex-col align-center">
              <p className="review-para text-center bg-custom-navy-blue border border-custom-grayish-blue py-5 px-2 relative">
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
        </ul>
        
        {/* Floating Button */}
        <button
          onClick={openModal}
          className="sticky ml-0 md:ml-auto mt-10 block bottom-5 left-[25%] md:left-0 md:translate-x-1/3 capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl z-50"
        >
          Write a Review
        </button>
      </div>

      {/* Modal - FeedbackForm */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl z-100"
            >
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