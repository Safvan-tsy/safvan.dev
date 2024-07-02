'use client';
import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const Email = () => {
  const [text, setText] = useState('Copy E-Mail');
  const email = 'safvanmanikulath@gmail.com';

  const handleCopyToClipboard = () => {
    setText('Copied');
    navigator.clipboard.writeText(email);
  };
  const resetText = () => {
    setText('Copy E-Mail');
  };
  return (
    <div className="py-4">
      <div className="py-2">
        <h3 className="pt-3">safvanmanikulath@gmail.com</h3>
        <p className="py-2 text-sm text-gray-400">E-Mail</p>
        <div className="">
          <button
            onMouseLeave={resetText}
            onClick={handleCopyToClipboard}
            className="group flex justify-center rounded-md bg-gradient-to-r from-gray-800 to-black
           p-2 font-semibold text-white 
          drop-shadow-xl transition-all duration-500 hover:rounded-[50%] 
          hover:from-[#331029] hover:to-[#310413] active:translate-y-2"
          >
            <FaRegCopy />
            <div
              className="absolute -right-2 top-1/2 hidden -translate-y-1/2 
          translate-x-full rounded-md bg-zinc-800 p-1 group-hover:flex"
            >
              <span className="whitespace-nowrap text-[0.7rem] text-zinc-400">{text}</span>
              <div
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 
            bg-inherit p-[0.2rem]"
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
