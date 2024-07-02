import Link from 'next/link';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center ">
      <div
        className="mt-6 hidden w-full flex-col flex-wrap items-center border-t-[1px] border-gray-600 p-3 sm:flex 
      sm:w-[95%] md:w-[90%] lg:mt-20 lg:w-[88%] lg:pt-8 xl:w-[85%]"
      >
        <p className="p-1 text-[0.5rem] text-gray-400 sm:text-sm">
          Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>
        <Link href="/contact">
          <p className="p-1 text-[0.5rem] text-gray-400 sm:text-sm">
            Interested in working together? We should queue up a time to chat.
            <span
              className="ml-2 cursor-pointer rounded-md border border-gray-600 bg-gray-700 
           p-1 tracking-wider text-gray-300 shadow-sm transition duration-300
            ease-in hover:border-gray-700 hover:bg-gray-800 hover:shadow-lg"
            >
              Lets talk
            </span>
          </p>
        </Link>
        <p className="p-1 text-gray-400 sm:text-sm">© 2023 Safvan</p>
      </div>
      <div
        className="mt-6 flex w-full flex-col flex-wrap items-center justify-center border-t-[1px] 
      border-gray-600 p-3 pb-7 sm:hidden sm:w-[95%] lg:w-[88%] xl:w-[85%]"
      >
        <Link href="/contact">
          <p className="p-1 text-[0.5rem] text-gray-400 sm:text-sm">
            Built with Next.js and Tailwind CSS, deployed with Vercel. Interested in working
            together? We should queue up a time to chat.
            <span
              className="ml-1 mt-1 cursor-pointer rounded-sm border border-gray-600 bg-gray-700 p-[0.1rem] 
           text-[0.5rem] text-gray-300 shadow-sm transition duration-300 ease-in
            hover:border-gray-700 hover:bg-gray-800 hover:shadow-lg sm:text-sm"
            >
              Lets talk
            </span>
          </p>
        </Link>

        <p className="p-1 text-[0.5rem] text-gray-400">© 2024 Safvan</p>
      </div>
    </footer>
  );
};

export default Footer;
