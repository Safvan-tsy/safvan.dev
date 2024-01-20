import React from "react";
import Reveal from "../animated/Reveal";

const Contact = () => {
  return (
    <Reveal margin="0px 0px 0px 0px">
      <div className="w-full mt-8 p-4 lg:mt-10 lg:mb-4 align-bottom">
        <div className="flex w-full justify-start flex-col items-start flex-wrap ">
          <h2
            className="text-gray-100 mt-2 text-xl font-inter tracking-wide
            md:text-2xl xl:text-3xl font-semibold"
          >
            Send Message :
          </h2>
        </div>

        <div className="mt-2 lg:mt-4 grid">
          <div className="">
            <input
              type="text"
              className="outline-block w-56 rounded-md py-1.5 px-2 ring-1 bg-[--input-bg]
              ring-inset ring-gray-400 m-2"
            />
            <input
              type="text"
              className="outline-block w-56 rounded-md py-1.5 px-2 ring-1 bg-[--input-bg]
              ring-inset ring-gray-400 m-2"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Message"
              className="bg-[--input-bg] text-slate-400 h-28 placeholder:text-slate-600 
              placeholder:opacity-50 outline-block p-2 outline-block w-56 rounded-md py-1.5 px-2 ring-1
              ring-inset ring-gray-400 m-2"
            />
          </div>
          <div className="">
            <button className="cursor-pointer items-center bg-[--input-bg] p-2 m-2 rounded-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;
