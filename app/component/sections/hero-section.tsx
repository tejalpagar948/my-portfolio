import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Button from '../button';
import ArrowIcon from '../../../public/assets/icons/arrow.svg';
import ClockIcon from '../../../public/assets/icons/clock.svg';
import ArrowDown from '../../../public/assets/images/arrow-down.png';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../../public/assets/icons/facebook.svg';
import twitter from '../../../public/assets/icons/twitter.svg';
import instagram from '../../../public/assets/icons/instagram.svg';
import Navbar from '../navBar';
import Header from '../site-header';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const HeroSection: React.FC = () => {
  // console.log('Arrow', BannerVideo);
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden text-white">
        <div className="wrapper">
          {/* Background Video */}
          <div className="relative h-[276px]"></div>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee">
            <source
              src="assets/videos/Nobt-world-banner.mp4"
              type="video/mp4"
            />
          </video>

          <Header />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Main Content */}
          <div className="relative z-10 flex min-h-screen flex-col mb-23">
            {/* HERO CONTENT */}
            <div className="max-w-xl flex flex-col gap-2 mb-32">
              <Button
                className="border border-white/40 !bg-[#ffffff2b] !text-white hero-cta"
                title={`Feel The Experience`}
                href={`FIXME`}
              />
              <h2
                className={`mb-9 text-4xl md:text-7xl font-bold leading-tight ${playfair.className}`}>
                Explore The Majestic Asia Landscape Now
              </h2>
              <Button
                title={`GET STARTED`}
                href={`FIXME`}
                icon={ArrowIcon.src}
              />
            </div>

            {/* BOTTOM INFO */}
            <ul className="flex gap-10">
              <li className="flex w-1/3 gap-3.5">
                <figure className="p-3 rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image
                    src={ClockIcon.src}
                    alt="Clock Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </li>
              <li className="flex w-1/3 gap-3.5">
                <figure className="p-3 rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image
                    src={ClockIcon.src}
                    alt="Clock Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </li>
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          <ul className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white/80 z-200">
            <li className="w-10">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <figure
                  // href={`FIXME`}
                  className="p-3 rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image src={facebook.src} alt="Icon" width={40} height={40} />
                </figure>
              </Link>
            </li>
            <li className="w-10">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <figure
                  // href={`FIXME`}
                  className="p-3 rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image src={twitter.src} alt="Icon" width={40} height={40} />
                </figure>
              </Link>
            </li>
            <li className="w-10">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <figure
                  // href={`FIXME`}
                  className="p-3 rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image
                    src={instagram.src}
                    alt="Icon"
                    width={40}
                    height={40}
                  />
                </figure>
              </Link>
            </li>
          </ul>

          {/* SCROLL INDICATOR */}
          <div className="z-200 absolute bottom-9 right-6 hidden md:flex items-center text-xs tracking-widest">
            <span className="rotate-270 leading-none -mr-4 font-medium">
              SCROLL
            </span>
            <Link href="#next">
              <Image
                src={ArrowDown.src}
                alt="Scroll down"
                width={16}
                height={30}
                className=""
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
