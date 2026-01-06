'use client';

import { useState } from 'react';

const items = [
  {
    title: 'Indonesia',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/padar-island-with-scenic-high-view-of-three-beautiful-white-sandy-beaches-surrounded-by-a-wide-ocean-e1687500056237.jpg',
  },
  {
    title: 'Thailand',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/ancient-siam-or-ancient-city-bangkok-thailand--e1687499815736.jpg',
  },
  {
    title: 'Turkey',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/happy-couple-in-cappadocia-the-man-proposed-to-the-girl-honeymoon-in-cappadocia-e1687499848976.jpg',
  },
  {
    title: 'Japan',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/himeji-castle-japan-in-spring-e1687500113328.jpg',
  },
  {
    title: 'Singapore',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/marina-bay-area-in-singapore-city--e1687499908842.jpg',
  },
];

export default function PianoGalleryExact() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* IMAGE STRIP */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${items.length * 100}vw`,
          transform: `translateX(-${active * 100}vw)`,
        }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="h-full w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* WHITE DIVIDER LINES */}
      <div className="pointer-events-none absolute inset-0 z-20 flex">
        {items.map(
          (_, i) =>
            i !== 0 && (
              <span
                key={i}
                className="h-full w-px bg-white/40"
                style={{ marginLeft: '20%' }}
              />
            )
        )}
      </div>

      {/* TABS */}
      <div className="relative z-30 flex h-full">
        {items.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            className={`flex w-1/5 cursor-pointer items-start justify-center pt-20 text-center text-white
                        transform transition-transform duration-150
                        ${active === i ? 'translate-y-3' : ''}`}>
            <div>
              <p className="mb-2 text-sm tracking-widest">VISIT</p>
              <h2 className="font-serif text-3xl">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
