'use client';

import Image from 'next/image';
import backgroundImage from '../../../public/assets/images/travel-section-image2.jpg';

export default function PromoHeroSection() {
  return (
    <section className="relative w-full h-[520px] lg:h-[450px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage.src} // replace with your image path
        alt="Promo Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-xl">
          <h3 className="font-serif text-white text-[38px] leading-tight lg:text-[48px] mb-2">
            Get Closer With Us & <br />
            Get Special Promo
          </h3>

          <p className="text-gray-300 text-base lg:text-lg mb-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <button className="bg-white text-black px-12 py-4 rounded-full text-sm tracking-wide font-medium hover:bg-gray-200 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
