import React from 'react';
import Image from 'next/image';
import Button from '../button';
import PersonImg from '../../public/assets/images/full-image-tejal-pagar.jpeg';

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const infoItems = [
    { label: 'Email', value: 'sample@gmail.com' },
    { label: 'Email', value: 'sample@gmail.com' },
    { label: 'Email', value: 'sample@gmail.com' },
  ];
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <h3 className="all-caps">about me</h3>
        <div className="about-content gap-13 flex flex-col md:flex-row">
          <figure className="about-content-left w-full md:w-1/2 ">
            <Image src={PersonImg} alt="Tejal Pagar" className="h-128" />
          </figure>
          <div className="about-content-right w-full md:w-1/2 flex flex-col gap-5 py-4 px-0">
            <h4 className="capitalize">hi, i'm tejal pagar</h4>
            <span className="capitalize yellow-span">web developer</span>
            <p className="single-letter-caps">
              I'm a software developer with a passion for creating innovative
              solutions. I have experience in various programming languages and
              frameworks, and I'm always eager to learn new technologies.
            </p>
            <ul className="info-list flex flex-col gap-6 text-custom-light-gray">
              {infoItems.map((item, index) => (
                <li key={index} className="info-list-item flex">
                  <span className="info-span-left capitalize w-[16%]">
                    {item.label}
                  </span>
                  <span className="info-span-right flex gap-2.5">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <Button className={`mt-6`} title={`download cv`} href={'#FIXME'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
