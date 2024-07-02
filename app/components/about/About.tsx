'use client';
import React from 'react';
import Image from 'next/image';
import profile from './../../assets/main.jpg';
import { motion } from 'framer-motion';

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
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutComponent = () => {
  return (
    <div
      className="flex flex-col-reverse justify-between p-4 lg:mx-8 lg:mb-4 lg:mt-6 lg:flex-row 
        xl:mx-20 xl:mb-8 xl:mt-10"
    >
      <motion.div variants={title} initial="initial" animate="animate">
        <motion.h2
          variants={word}
          className="mt-2 font-inter text-2xl font-semibold tracking-wide text-gray-100 md:text-3xl xl:text-4xl"
        >
          Muhammed Safvan
        </motion.h2>
        <motion.h4
          variants={word}
          className="mt-2 font-inter text-xl text-gray-400
                md:text-2xl lg:tracking-wide xl:text-3xl"
        >
          Software Developer
        </motion.h4>
        <motion.div variants={word} className="mt-3 lg:mr-8 xl:mr-16 xl:mt-6">
          <p
            className="flex flex-wrap font-inter text-sm tracking-wide text-[--paragraph-font]
                    lg:text-[18px] lg:leading-6 lg:tracking-wider"
          >
            I&apos;m a seasoned software developer from India proficient in Node.js backend
            development. I also excel in frontend development incorporating various technologies
            With strong emphasis on delivering high-quality solutions. My expertise spans both
            backend and frontend realms, With over 1.5 years of experience.
          </p>
          <p
            className="mt-2 flex flex-wrap font-inter text-sm tracking-wide text-[--paragraph-font]
                    lg:text-[18px] lg:leading-6 lg:tracking-wider"
          >
            In addition, I also have hands-on experience in DevOps tasks. I&apos;m adept at managing
            Linux servers, deploying Node.js applications, utilizing tools like PM2 for process
            management, and configuring web servers such as Apache and Nginx. This multifaceted
            skill set allows me to handle end-to-end development and deployment processes
            effectively.
          </p>
        </motion.div>
      </motion.div>
      <div
        className="group relative mt-4 flex h-36 w-32 flex-col 
            items-center justify-center overflow-hidden rounded-xl bg-neutral-50 text-neutral-600 shadow-md duration-500 hover:-translate-y-2 
            lg:mt-0 lg:h-fit lg:w-fit"
      >
        <Image
          src={profile}
          alt="Image"
          className="object-cover lg:h-[10rem] lg:w-[40rem] xl:h-[13rem] xl:w-[39rem]"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
