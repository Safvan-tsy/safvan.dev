import React from "react";
import Contact from "../components/contact/Contact";
import { FaRegCopy } from "react-icons/fa";
import Email from "../components/contact/Email";

const page = () => {
  return (
    <div
      className="md:w-[90%] flex w-full flex-col flex-wrap items-center rounded-xl 
  bg-[--component-background] sm:w-[95%] lg:w-[88%] xl:w-[85%] mb-4 md:px-4 lg:px-6 lg:pb-8 xl:px-10"
    >
      <div className="w-full mt-8 p-4 lg:mt-10">
        <div
          className="flex w-full justify-start flex-col items-start flex-wrap 
        border-b-[1px] border-gray-700 pb-6"
        >
          <h1
            className="text-gray-200 mt-2 text-2xl font-inter
            md:text-3xl xl:text-4xl font-bold tracking-wider"
          >
            Contact
          </h1>
          <h3 className="text-gray-400 py-4">
            Get in touch for inquiries
          </h3>
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
