'use client'
import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import profile from './../../assets/pic.jpg';
import { motion } from 'framer-motion'
import { FaTelegramPlane } from "react-icons/fa";

const title = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const word = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    }
  }
}

const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div className={styles.heading}
        variants={title}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={word}
          className={styles.heading1}>HI 👋,</motion.h1>
        <motion.h1
          variants={word}
          className={styles.heading1}>I&apos;M SAFVAN</motion.h1>
        <motion.h2
          variants={word}
          className={styles.heading2}>SOFTWARE DEVELOPER</motion.h2>
        <button className={`
          bg-[--button-bg]
          font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950
           text-white transform transition-all duration-500 ease-in-out 
           scale-110 brightness-110 animate-pulse ${styles.cta}`}>
          <FaTelegramPlane className={styles.ctaSvg} />
          <span className={styles.ctaText}>Contact</span>
        </button>
      </motion.div>
      <div className={styles.image}>
        <div className={styles.overlay}></div>
        <Image onContextMenu={(e) => e.preventDefault()} src={profile} alt="Image" className={styles.mainPic} />
      </div>
    </div>
  );
};

export default Hero;
