import React from 'react';
import Contact from '../components/contact/Contact';
import { FaRegCopy } from 'react-icons/fa';
import Email from '../components/contact/Email';

const page = () => {
  return (
    <div
      className="mb-4 flex w-full flex-col flex-wrap items-center rounded-xl 
  bg-[--component-background] sm:w-[95%] md:w-[90%] md:px-4 lg:w-[88%] lg:px-6 lg:pb-8 xl:w-[85%] xl:px-10"
    >
      <div className="mt-8 w-full p-4 lg:mt-10">
        <div
          className="flex w-full flex-col flex-wrap items-start justify-start 
        border-b-[1px] border-gray-700 pb-6"
        >
          <h1
            className="mt-2 font-inter text-2xl font-bold
            tracking-wider text-gray-200 md:text-3xl xl:text-4xl"
          >
            Contact
          </h1>
          <h3 className="py-4 text-gray-400">Get in touch for inquiries</h3>
        </div>
        <Email />
      </div>
      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
};

export default page;
