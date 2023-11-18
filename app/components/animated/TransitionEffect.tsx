"use client"
import React from 'react'
import {motion} from 'framer-motion'

const transitionVariants = {
    initial: {
      x: "-100%", // Start from the left side
      width: "100%",
    },
    animate: {
      x: "0%", // Move towards the right
      width: "0%",
    },
    exit: {
      x: ["0%", "-100%"], // Move back towards the left
      width: ["0%", "100%"],
    },
  };

const TransitionEffect = () => {
  return (
    <>
    <motion.div
      className="fixed top-0 bottom-0 left-full w-screen h-screen z-[100] bg-[#000000]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
    <motion.div
      className="fixed top-0 bottom-0 left-full w-screen h-screen z-[99] bg-[#ffffff]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
    <motion.div
      className="fixed top-0 bottom-0 left-full w-screen h-screen z-[98] bg-[#2b2b2c]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
  </>
  )
}

export default TransitionEffect