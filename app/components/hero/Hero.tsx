'use client'
import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import profile from './../../assets/profile.png';
import { motion } from 'framer-motion'

const title = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      straggerChildren: 0.08,
    }
  }
}

const word = {
  initial: {
    opacity: 1,
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
        <Image
          src={profile}
          width={300}
          height={300}
          alt="Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
