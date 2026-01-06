'use client';

import { useState } from 'react';

const leftItems = [
  {
    title: 'What to prepare trip to Asia',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    title: 'What document you need before go to asia',
    content:
      'Passport, visa requirements, travel insurance, flight tickets, hotel bookings, and local identification documents.',
  },
  {
    title: 'How to scheduling Asia trip itinerary',
    content:
      'Plan destinations by region, allocate buffer days, check seasonal weather, and book transport in advance.',
  },
];

const rightItems = [
  {
    title: 'Website must read before your trip',
    content:
      'Official tourism websites, embassy sites, and trusted travel blogs provide accurate travel information.',
  },
  {
    title: 'This is the best budget you need to prepare',
    content:
      'Budget depends on country, duration, accommodation type, transport, food, and activities.',
  },
  {
    title: 'This site give you the information about travel to Asia',
    content:
      'This site offers complete guidance including visas, itineraries, budgeting, and travel tips.',
  },
];

type AccordionItemProps = {
  index: number;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

function AccordionItem({
  index,
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left">
        <h5 className="text-lg font-medium">
          {index}. {title}
        </h5>

        {/* Arrow */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 36 36"
          fill="none"
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}>
          <path
            d="M10 14.5L18 22L26 14.5"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}>
        <div className="overflow-hidden">
          <p className="text-gray-400 leading-relaxed max-w-xl">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-black via-[#1a0f05] to-black text-white py-27">
      <div className="wrapper">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-5">
          <h3 className="font-serif text-[44px] leading-[1.15] lg:text-[50px] max-w-xl">
            Enjoy Our Best Quality <br />
            Tour & Experience
          </h3>

          <div className="max-w-xl mt-2">
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>

            <button className="bg-white text-black px-10 py-4 rounded-full text-sm tracking-wide font-medium hover:bg-gray-200 transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div>
            {leftItems.map((item, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={item.title}
                content={item.content}
                isOpen={openLeft === i}
                onClick={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {rightItems.map((item, i) => (
              <AccordionItem
                key={i}
                index={i + 4}
                title={item.title}
                content={item.content}
                isOpen={openRight === i}
                onClick={() => setOpenRight(openRight === i ? null : i)}
              />
            ))}
          </div>
        </div>

        <video
          className="h-screen w-full object-cover rounded-2xl mt-15"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee">
          <source src="assets/videos/Nobt-world-banner.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
