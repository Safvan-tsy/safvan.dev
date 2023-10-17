import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import profile from './../../assets/profile.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h1 className={styles.heading1}>HI 👋,</h1>
        <h1 className={styles.heading1}>I&apos;M SAFVAN</h1>
        <h2 className={styles.heading2}>SOFTWARE DEVELOPER</h2>
      </div>
      <div className={styles.image}>
        <Image
          src={profile}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Hero;
