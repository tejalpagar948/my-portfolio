import React from 'react';
import Image from 'next/image';

interface KeySkillsCardProps {}

const KeySkillsCard: React.FC<KeySkillsCardProps> = ({}) => {
  const keySkills = [
    {
      icon: './assets/icons/coding.svg',
      title: 'HTML',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi architecto! Laborum, itaque, ratione assumenda velit nihil cupiditate voluptatem saepe harum quia ullam sit dicta odit facere deleniti cum inventore?',
    },
    {
      icon: './assets/icons/coding.svg',
      title: 'HTML',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi architecto! Laborum, itaque, ratione assumenda velit nihil cupiditate voluptatem saepe harum quia ullam sit dicta odit facere deleniti cum inventore?',
    },
    {
      icon: './assets/icons/coding.svg',
      title: 'HTML',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi architecto! Laborum, itaque, ratione assumenda velit nihil cupiditate voluptatem saepe harum quia ullam sit dicta odit facere deleniti cum inventore?',
    },
    {
      icon: './assets/icons/coding.svg',
      title: 'HTML',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi architecto! Laborum, itaque, ratione assumenda velit nihil cupiditate voluptatem saepe harum quia ullam sit dicta odit facere deleniti cum inventore?',
    },
  ];

  return (
    <ul className="key-skill-list flex gap-7 flex-wrap">
      {keySkills.map((item, index) => (
        <li
          key={index}
          className="key-skill-item w-full md:w-[calc((100%-3.5rem)/3)] flex flex-col items-center text-center gap-4.5 py-11 px-7 bg-custom-navy-blue border-1 border-solid  border-custom-grayish-blue">
          <figure className="">
            <Image
              src={item.icon}
              alt=""
              width="100"
              height="20"
              className="key-sill-img  border-1 border-solid border-custom-dark-gray rounded-[98px] py-4 px-4"
            />
          </figure>
          <span className="skills-span-left">{item.title}</span>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default KeySkillsCard;
