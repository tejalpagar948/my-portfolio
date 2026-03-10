'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import AOS from 'aos';
import { motion } from 'framer-motion';

type SkillItem = {
  _id: string;
  title?: string;
  description?: string;
  icon?: any;
};

interface KeySkillsCardProps {
  skills: SkillItem[];
}

const KeySkillsCard: React.FC<KeySkillsCardProps> = ({ skills }) => {
  useEffect(() => {
    AOS.refresh();
  }, [skills]);

  return (
    <ul
      className="key-skill-list hidden md:flex gap-7 flex-wrap perspective-[1000px]"
      data-aos="fade-up"
      data-aos-delay="50">
      {skills.map((item, index) => (
        <motion.li
          key={item._id || index}
          initial={{ rotateY: -60, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
            delay: index * 0.075,
          }}
          viewport={{ amount: 0.35 }} // animation triggers every time
          style={{ transformStyle: 'preserve-3d' }}
          className="key-skill-item w-full md:w-[calc((100%-3.5rem)/3)] flex flex-col items-center text-center gap-4.5 py-11 px-7 bg-custom-navy-blue border border-custom-grayish-blue rounded-xl">
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

          <span className="skills-span-left font-semibold text-lg">
            {item.title}
          </span>

          <p className="text-sm opacity-80">{item.description}</p>
        </motion.li>
      ))}
    </ul>
  );
};

export default KeySkillsCard;
