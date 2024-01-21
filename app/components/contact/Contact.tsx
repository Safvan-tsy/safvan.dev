"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const title = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const word = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMeassage] = useState();


  return (
    <motion.div
      variants={title}
      initial="initial"
      animate="animate"
      className="w-full mt-2 p-4 mb-4"
    >
      <motion.div
        variants={word}
        className="flex w-full justify-start flex-col items-start flex-wrap "
      >
        <h2
          className="text-gray-100 text-xl font-inter tracking-wide
            md:text-2xl xl:text-3xl"
        >
          Send Message
        </h2>
      </motion.div>

      <div className="mt-2 lg:mt-4 grid grid-cols-1">
        <motion.div variants={word} className="lg:grid lg:grid-cols-2 lg:gap-4">
          <input
            placeholder="Name"
            type="text"
            className="outline-none text-slate-400 rounded-md p-3 bg-[--input-bg]
              my-2 w-full"
          />
          <input
            placeholder="Email"
            type="text"
            className="outline-none text-slate-400 rounded-md p-3 bg-[--input-bg]
                my-2 w-full"
          />
        </motion.div>
        <motion.div variants={word} className="">
          <textarea
            placeholder="Message"
            className="bg-[--input-bg] text-slate-400 h-[10rem] placeholder:text-slate-600 
              placeholder:opacity-50 outline-block p-3 outline-none rounded-md
              my-2 w-full"
          />
        </motion.div>
        <motion.div variants={word} className="">
          <button
            className="cursor-pointer items-center p-2 my-2 rounded-md 
          w-full active:translate-y-1 bg-gray-500 font-semibold tracking-wide"
          >
            Submit
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
