'use client';

import Image from 'next/image';
import BlogImage from '../../../public/assets/images/blog-section-image.jpg';

export default function BlogSection() {
  return (
    <section className="py-27">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6">
          <h2 className="font-serif text-[44px] leading-[1.15] mb-6">
            Read Our Latest Travel <br /> Blog & Tips Here
          </h2>

          <p className="text-gray-500 max-w-xl mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et.
          </p>

          {/* FEATURED CARD */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={BlogImage.src}
              alt="Beach"
              width={900}
              height={600}
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif mb-3 max-w-md">
                Tropical Bliss: Rejuvenate in Asia’s Idyllic Beaches
              </h3>

              <button className="flex items-center gap-2 text-sm font-medium">
                READ MORE
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-6 flex flex-col gap-10 lg:grid-cols-6">
          {/* ITEM */}
          <BlogItem
            image={BlogImage.src}
            title="Asia’s Thrilling Adventures: Hiking, Trekking, and More"
          />

          <BlogItem
            image={BlogImage.src}
            title="Unforgettable Experiences: Asia’s Must-Visit Destinations"
          />

          <BlogItem
            image={BlogImage.src}
            title="Asia for the Soul: Discover Spiritual Retreats and Practices"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* BLOG ITEM COMPONENT */
/* ---------------------------------- */

function BlogItem({ image, title }: { image: string; title: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-6 items-center">
      <div className="lg:col-span-3">
        <Image
          src={image}
          alt={title}
          width={250}
          height={150}
          className="rounded-3xl object-cover w-full"
        />
      </div>

      <div className="lg:col-span-3">
        <h4 className="font-serif text-[22px] leading-snug mb-2">{title}</h4>

        <p className="text-gray-500 text-sm mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo...
        </p>

        <button className="flex items-center gap-2 text-sm font-medium">
          READ MORE
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}
