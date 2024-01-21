"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Loader from "./Loader";
import Alert from "./Alert";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("mvoezpyj");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!message.trim()) return false;

    return true;
  };

  const removeSuccess = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  const submitMessage = async () => {
    if (validateForm()) {
      setError(false);
      await handleSubmit({ name, email, message }).then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
        removeSuccess();
      });
    } else {
      setError(true);
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none text-slate-400 rounded-md p-3 bg-[--input-bg]
              my-2 w-full"
          />
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none text-slate-400 rounded-md p-3 bg-[--input-bg]
                my-2 w-full"
          />
        </motion.div>
        <motion.div variants={word} className="">
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[--input-bg] text-slate-400 h-[10rem] placeholder:text-slate-600 
              placeholder:opacity-50 outline-block p-3 outline-none rounded-md
              my-2 w-full"
          />
        </motion.div>
        <motion.div
          variants={word}
          className="flex justify-center flex-col items-center flex-wrap gap-2"
        >
          {error && <Alert type="Danger" text="Please provide all fields" />}
          {state.submitting ? (
            <Loader />
          ) : (
            <button
              onClick={submitMessage}
              className="cursor-pointer items-center p-2 my-2 rounded-md 
          w-full active:translate-y-1 bg-gray-500 font-semibold tracking-wide"
              disabled={state.submitting}
            >
              Submit
            </button>
          )}
          {success && <Alert type="success" text="Thank you for Contacting" />}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
