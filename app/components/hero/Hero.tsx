'use client'
import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import profile from './../../assets/profile.png';
import { motion } from 'framer-motion'

const title = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      straggerChildren: 0.1,
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
      duration: 1,
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
      </motion.div>

      <div className={styles.image}>
        <Image src={profile} alt="Image" className={styles.mainPic}/>
      </div>
    </div>
  );
};

export default Hero;
