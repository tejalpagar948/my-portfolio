'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';

type SkillItem = {
  _id: string;
  title?: string;
  description?: string;
  icon?: any;
};

interface Props {
  skills: SkillItem[];
}

const KeySkillsCardMobile: React.FC<Props> = ({ skills }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const nextCard = () => {
    if (index < skills.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 60) {
      nextCard(); // swipe left → next
    } else if (diff < -60) {
      prevCard(); // swipe right → previous
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="relative w-full max-w-sm mx-auto h-[460px] md:hidden flex items-start justify-center pt-6 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {skills.map((item, i) => {
        const position = i - index;

        if (position < 0 || position > 2) return null;

        const isTop = position === 0;

        return (
          <motion.div
            key={item._id}
            animate={{
              scale: 1 - position * 0.04,
              x: position * 10,
              y: position * 36,
              zIndex: 10 - position,
              opacity: 1,
            }}
            transition={{ duration: 0.35 }}
            className="absolute w-[92%] h-[320px] rounded-xl p-6 flex flex-col items-center text-center shadow-2xl
            bg-gradient-to-b from-[#0f1e35] to-[#081426]
            border border-[#24354d] backdrop-blur-sm">
            {isTop && (
              <>
                {item.icon && (
                  <Image
                    src={urlFor(item.icon).url()}
                    alt={item.title || 'Skill'}
                    width={70}
                    height={70}
                    className="border border-[#2a3d55] rounded-full p-3 mb-4"
                  />
                )}

                <span className="font-semibold text-lg text-white mb-2">
                  {item.title}
                </span>

                <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                <div className="absolute bottom-4 text-xs text-gray-400 tracking-wide animate-pulse">
                  Swipe →
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default KeySkillsCardMobile;
