"use client";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const Email = () => {
  const [text, setText] = useState("Copy E-Mail");
  const email = "safvanmanikulath@gmail.com";

  const handleCopyToClipboard = () => {
    setText("Copied");
    navigator.clipboard.writeText(email);
  };
  const resetText = () => {
    setText("Copy E-Mail");
  };
  return (
    <div className="py-4">
      <div className="py-2">
        <h3 className="pt-3">safvanmanikulath@gmail.com</h3>
        <p className="text-sm text-gray-400 py-2">E-Mail</p>
        <div className="">
          <button
            onMouseLeave={resetText}
            onClick={handleCopyToClipboard}
            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r
           from-gray-800 to-black text-white 
          font-semibold active:translate-y-2 hover:rounded-[50%] transition-all 
          duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <FaRegCopy />
            <div
              className="bg-zinc-800 p-1 rounded-md group-hover:flex hidden 
          absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
            >
              <span className="text-zinc-400 whitespace-nowrap text-[0.7rem]">
                {text}
              </span>
              <div
                className="bg-inherit rotate-45 p-[0.2rem] absolute top-1/2 -translate-y-1/2 
            left-0 -translate-x-1/2"
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
