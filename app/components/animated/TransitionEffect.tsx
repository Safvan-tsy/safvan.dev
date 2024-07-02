'use client';
import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '-100%', // Start from the left side
    width: '100%',
  },
  animate: {
    x: '0%', // Move towards the right
    width: '0%',
  },
  exit: {
    x: ['0%', '-100%'], // Move back towards the left
    width: ['0%', '100%'],
  },
};

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 left-full top-0 z-[100] h-screen w-screen bg-[#000000]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 left-full top-0 z-[99] h-screen w-screen bg-[#ffffff]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 left-full top-0 z-[98] h-screen w-screen bg-[#2b2b2c]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
