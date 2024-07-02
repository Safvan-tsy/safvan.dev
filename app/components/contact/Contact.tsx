'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Loader from './Loader';
import Alert from './Alert';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('mvoezpyj');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes('@')) return false;
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
        setName('');
        setEmail('');
        setMessage('');
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
      className="mb-4 mt-2 w-full p-4"
    >
      <motion.div
        variants={word}
        className="flex w-full flex-col flex-wrap items-start justify-start "
      >
        <h2
          className="font-inter text-xl tracking-wide text-gray-100
            md:text-2xl xl:text-3xl"
        >
          Send Message
        </h2>
      </motion.div>

      <div className="mt-2 grid grid-cols-1 lg:mt-4">
        <motion.div variants={word} className="lg:grid lg:grid-cols-2 lg:gap-4">
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-2 w-full rounded-md bg-[--input-bg] p-3
              text-slate-400 outline-none"
          />
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 w-full rounded-md bg-[--input-bg] p-3
                text-slate-400 outline-none"
          />
        </motion.div>
        <motion.div variants={word} className="">
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-block my-2 h-[10rem] w-full 
              rounded-md bg-[--input-bg] p-3 text-slate-400 outline-none
              placeholder:text-slate-600 placeholder:opacity-50"
          />
        </motion.div>
        <motion.div
          variants={word}
          className="flex flex-col flex-wrap items-center justify-center gap-2"
        >
          {error && <Alert type="Danger" text="Please provide all fields" />}
          {state.submitting ? (
            <Loader />
          ) : (
            <button
              onClick={submitMessage}
              className="my-2 w-full cursor-pointer items-center rounded-md 
          bg-gray-500 p-2 font-semibold tracking-wide active:translate-y-1"
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
