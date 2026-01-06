import Link from 'next/link';
import SubmenuArrowBlack from '../../public/assets/icons/submenu-arrow-black.svg';
import SubmenuArrowWhite from '../../public/assets/icons/submenu-arrow-white.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex items-center gap-2 rounded-full border border-white  backdrop-blur-md px-3 py-2 text-sm font-medium text-white">
        <li>
          <Link
            href="/"
            className="rounded-full px-5 py-2 transition bg-white/20">
            HOME
          </Link>
        </li>

        <li className="group">
          <Link
            href="/about"
            className="flex items-center gap-1 rounded-full px-5 py-2 cursor-pointer group-hover:bg-white group-hover:text-black">
            ABOUT US
          </Link>
        </li>

        <li className="relative group">
          <Link
            href={'#'}
            className="flex items-center gap-1 rounded-full px-5 py-2 cursor-pointer group-hover:bg-white group-hover:text-black">
            DESTINATION
            <Image
              src={SubmenuArrowWhite.src}
              alt="Down Arrow"
              className="mt-[2px] group-hover:hidden"
              width={18}
              height={18}
            />
            <Image
              src={SubmenuArrowBlack.src}
              alt="Down Arrow"
              className="mt-[2px] hidden group-hover:block"
              width={18}
              height={18}
            />
          </Link>
          <div
            className="absolute left-0 mt-2 top-full  opacity-0 
               group-hover:opacity-100 group-hover:pointer-events-auto
               transition-opacity duration-200">
            <ul
              className="w-50 rounded-xl bg-white p-2 text-black shadow-lg z-50 
              ">
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                DESTINATION
              </li>
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                DESTINATION DETAILS
              </li>
            </ul>
          </div>
        </li>

        <li className="relative group">
          <Link
            href={'#'}
            className="flex items-center gap-1 rounded-full px-5 py-2 cursor-pointer group-hover:bg-white group-hover:text-black">
            PAGE
            <Image
              src={SubmenuArrowWhite.src}
              alt="Down Arrow"
              className="mt-[2px] group-hover:hidden"
              width={18}
              height={18}
            />
            <Image
              src={SubmenuArrowBlack.src}
              alt="Down Arrow"
              className="mt-[2px] hidden group-hover:block"
              width={18}
              height={18}
            />
          </Link>
          <div
            className="absolute left-0 mt-2 top-full  opacity-0 
               group-hover:opacity-100 group-hover:pointer-events-auto
               transition-opacity duration-200">
            <ul
              className="w-50 rounded-xl bg-white p-2 text-black shadow-lg z-50 
              ">
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                404
              </li>
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                FAQ
              </li>
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                CONTACT US
              </li>
            </ul>
          </div>
        </li>

        <li className="relative group">
          <Link
            href={'#'}
            className="flex items-center gap-1 rounded-full px-5 py-2 cursor-pointer group-hover:bg-white group-hover:text-black">
            BlOG
            <Image
              src={SubmenuArrowWhite.src}
              alt="Down Arrow"
              className="mt-[2px] group-hover:hidden"
              width={18}
              height={18}
            />
            <Image
              src={SubmenuArrowBlack.src}
              alt="Down Arrow"
              className="mt-[2px] hidden group-hover:block"
              width={18}
              height={18}
            />
          </Link>
          <div
            className="absolute left-0 mt-2 top-full  opacity-0 
               group-hover:opacity-100 group-hover:pointer-events-auto
               transition-opacity duration-200">
            <ul
              className="w-50 rounded-xl bg-white p-2 text-black shadow-lg z-50 
              ">
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                BLOG
              </li>
              <li className="py-2 hover:font-semibold cursor-pointer hover:bg-black hover:text-white hover:rounded-full px-4">
                SINGLE POSTS
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
