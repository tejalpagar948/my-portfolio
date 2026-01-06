'use client';

import { useState } from 'react';
import Image from 'next/image';
import destination from '../../../public/assets/images/destination1.jpg';
import locationIcon from '../../../public/assets/icons/location.svg';
import destination2 from '../../../public/assets/images/destination2.jpg';

type TravelCard = {
  title: string;
  country: string;
  price: number;
  image: string;
};

type TravelCategory = 'destination' | 'accommodation' | 'activity';

const travelData: (TravelCard & { category: TravelCategory })[] = [
  // DESTINATION (3)
  {
    title: 'Phuket',
    country: 'Myanmar',
    price: 40,
    image: '/images/kelingking.jpg',
    category: 'destination',
  },
  {
    title: 'Kelingking',
    country: 'Indonesia',
    price: 20,
    image: '/images/kelingking.jpg',
    category: 'destination',
  },
  {
    title: 'Mt. Bromo',
    country: 'Indonesia',
    price: 35,
    image: '/images/bromo.jpg',
    category: 'destination',
  },

  // ACCOMMODATION (3)
  {
    title: 'Old Bagan',
    country: 'Myanmar',
    price: 18,
    image: '/images/bagan.jpg',
    category: 'destination',
  },
  {
    title: 'Phuket Resort',
    country: 'Thailand',
    price: 60,
    image: '/images/kelingking.jpg',
    category: 'accommodation',
  },
  {
    title: 'Bromo Lodge',
    country: 'Indonesia',
    price: 55,
    image: '/images/bromo.jpg',
    category: 'accommodation',
  },

  // ACTIVITY (2)
  {
    title: 'Bagan Sunrise Tour',
    country: 'Myanmar',
    price: 25,
    image: '/images/bagan.jpg',
    category: 'accommodation',
  },
  {
    title: 'Kelingking Cliff Walk',
    country: 'Indonesia',
    price: 30,
    image: '/images/kelingking.jpg',
    category: 'activity',
  },
];

const TravelSection = () => {
  const [activeTab, setActiveTab] = useState<TravelCategory>('destination');

  const filteredData = travelData.filter((item) => item.category === activeTab);

  return (
    <section className="my-27">
      {/* HEADING */}
      <div className="text-center max-w-[520px] mx-auto">
        <h3 className="text-5xl font-serif font-semibold">
          Find Out The Best <br /> Travel Choice in Asia
        </h3>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-11 mt-10">
        <div className="flex gap-2 border rounded-full p-3">
          <button
            onClick={() => setActiveTab('destination')}
            className={`px-7 py-2.5 rounded-full text-sm font-medium transition uppercase hover:bg-black hover:text-white
              ${activeTab === 'destination' ? 'bg-gray-100' : ''}`}>
            Destination
          </button>

          <button
            onClick={() => setActiveTab('accommodation')}
            className={`px-7 py-2.5 rounded-full text-sm font-medium transition uppercase hover:bg-black hover:text-white
              ${activeTab === 'accommodation' ? 'bg-gray-100' : ''}`}>
            Accomodation
          </button>

          <button
            onClick={() => setActiveTab('activity')}
            className={`px-7 py-2.5 rounded-full text-sm font-medium transition uppercase hover:bg-black hover:text-white
              ${activeTab === 'activity' ? 'bg-gray-100' : ''}`}>
            Activity
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="relative h-[380px] rounded-2xl overflow-hidden">
            <Image
              src={destination2.src}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT */}
            <div className="absolute bottom-0 w-full px-5 py-4 text-white">
              {/* TOP ROW */}
              <div className="flex justify-between items-start">
                {/* LEFT */}
                <div>
                  <h3 className="text-2xl font-serif leading-none">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-sm text-white/70">
                    <Image
                      src={locationIcon.src}
                      alt="Location Icon"
                      width={20}
                      height={20}
                    />
                    <span>{item.country}</span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right flex flex-col gap-3">
                  <span className="text-sm text-white block">Start From</span>
                  <span className="text-2xl font-semibold leading-none">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
