'use client';
import React from 'react';
import facebook from '../../public/assets/icons/facebook.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import LogoWhite from '../../public/assets/images/matour-logo_1.png';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your submit logic here
  };
  return (
    <footer className="bg-black text-gray-300 pt-12">
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Address */}
        <div>
          <h1 className="text-3xl text-white font-serif mb-4">
            <Link href="./" target="_self">
              <Image
                src={LogoWhite.src}
                alt="NoBT World Logo"
                width={150}
                height={50}
                unoptimized
                priority
              />
            </Link>
          </h1>
          <p>Badung, Bali —</p>
          <p>Jl. Desa Sawangan, No. 11</p>
          <p>Nusa Dua, 81566</p>

          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-white">
              <Image
                src={instagram.src}
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image
                src={facebook.src}
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image src={twitter.src} alt="Instagram" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Page Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Page</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Important Link
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Term & Condition
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col w-full">
          <h2 className="text-white font-semibold text-lg mb-4">
            Our Newsletter
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          {/* <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-2 rounded-l-full focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-r-full font-semibold hover:opacity-90 transition">
              SIGN UP
            </button>
          </form> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="wrapper border-t border-gray-800 py-6 text-sm flex flex-col md:flex-row justify-between">
        <span>Tour & Travel Template Kit by Jegtheme</span>
        <span>Copyright © 2023. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
