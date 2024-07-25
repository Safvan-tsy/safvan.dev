'use client';
import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import profile from './../../assets/pic.jpg';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';

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

const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div className={styles.heading} variants={title} initial="initial" animate="animate">
        <motion.h1 variants={word} className={styles.heading1}>
          HI 👋,
        </motion.h1>
        <motion.h1 variants={word} className={styles.heading1}>
          I&apos;M SAFVAN
        </motion.h1>
        <motion.h2 variants={word} className={styles.heading2}>
          SOFTWARE DEVELOPER
        </motion.h2>
        <div className="flex gap-6">
          <Link href="/contact">
            <div
              className={`
            scale-110
            transform animate-pulse rounded-full bg-[--button-bg] px-6 py-3
            font-bold text-white shadow-lg shadow-neutral-950 brightness-110 
            transition-all duration-500 ease-in-out ${styles.cta}`}
            >
              <FaTelegramPlane className={styles.ctaSvg} />
              <span className={styles.ctaText}>Contact</span>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/1C3KFBjGJ-CmbNyT-j47nIv2fc0JoQ5iG/view?usp=sharing">
            <div
              className={`
            scale-110
            transform animate-pulse rounded-full bg-[--button-bg] px-6 py-3
            font-bold text-white shadow-lg shadow-neutral-950 brightness-110 
            transition-all duration-500 ease-in-out ${styles.cta}`}
            >
              <FaEnvelopeOpenText className={styles.ctaSvgResume} />
              <span className={styles.ctaText}>Resume</span>
            </div>
          </Link>
        </div>
      </motion.div>
      <div className={styles.image}>
        <div className={styles.overlay}></div>
        <Image
          onContextMenu={(e) => e.preventDefault()}
          src={profile}
          alt="Image"
          className={styles.mainPic}
        />
      </div>
    </div>
  );
};

export default Hero;
