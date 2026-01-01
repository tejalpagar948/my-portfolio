'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { Skill } from '@/sanity.types';

type SkillItem = {
  _id: string;
  title?: string;
  description?: string;
  icon?: any;
};

interface KeySkillsCardProps {
  skills: SkillItem[]; // <-- Fixed type here
}

const ITEMS_PER_LOAD = 6;

const KeySkillsCard: React.FC<KeySkillsCardProps> = ({ skills }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <>
      <ul className="key-skill-list flex gap-7 flex-wrap">
        {skills.slice(0, visibleCount).map((item, index) => (
          <li
            key={index}
            className="key-skill-item w-full md:w-[calc((100%-3.5rem)/3)] flex flex-col items-center text-center gap-4.5 py-11 px-7 bg-custom-navy-blue border border-custom-grayish-blue">
            <figure>
              {item.icon && (
                <Image
                  src={urlFor(item.icon).url()}
                  alt={item.title || 'Skill Icon'}
                  width={100}
                  height={100}
                  className="border border-custom-dark-gray rounded-full p-4"
                />
              )}
            </figure>
            <span className="skills-span-left">{item.title}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      {visibleCount < skills.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-custom-yellow text-custom-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default KeySkillsCard;
