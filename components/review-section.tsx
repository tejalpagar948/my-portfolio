import React from 'react';
import Image from 'next/image';
import PersonImage from '../public/assets/images/person-img.jpg';

interface ReviewSectionProps {
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
}) => {
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
  
  return (
    <section className="reviews pb-24">
    <div className="wrapper">
      <h3 className="">Reviews</h3>
      <ul className="review-list flex flex-wrap gap-7">
      {reviewsData.map((item,index)=>(
        <li key={index} className="review-list-item w-full md:w-1/3 flex flex-col align-center">
          <p className="review-para text-center bg-custom-navy-blue border border-custom-grayish-blue py-5 px-2  relative
        ">{item.text}</p>
          <div className="person-info w-2/6 m-auto mt-10 flex flex-col items-center gap-1">
          <figure className= "rounded-full mb-3.5">
            <Image src={PersonImage} alt="Person" className="rounded-full" />
          </figure>
          <h6 className="person-name">{item.name}</h6>
          <span className="person-role text-custom-light-gray">{item.role}</span>
        </div>
        </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default ReviewSection;
