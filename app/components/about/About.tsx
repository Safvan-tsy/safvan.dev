'use client'
import React from 'react'
import Image from 'next/image';
import profile from './../../assets/main.jpg';
import { motion } from 'framer-motion'

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
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        }
    }
}

const AboutComponent = () => {
    return (
        <div className='flex justify-between flex-col-reverse p-4 lg:flex-row lg:mt-6 lg:mb-4 lg:mx-8 
        xl:mt-10 xl:mb-8 xl:mx-20'>
            <motion.div variants={title}
                initial="initial"
                animate="animate">
                <motion.h2
                    variants={word}
                    className='text-gray-100 mt-2 text-2xl font-inter font-semibold tracking-wide md:text-3xl xl:text-4xl'>
                    Muhammed Safvan
                </motion.h2>
                <motion.h4
                    variants={word} className='text-gray-400 mt-2 text-xl font-inter
                md:text-2xl xl:text-3xl lg:tracking-wide'>
                    Software Developer
                </motion.h4>
                <motion.div
                    variants={word} className='mt-3 lg:mr-8 xl:mr-16 xl:mt-6'>
                    <p className='flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-md 
                    lg:text-xl '>
                        I&apos;m Safvan, a seasoned software developer from India proficient in Node.js backend development. 
                        I also excel in frontend development with various technologies. With a strong emphasis 
                        on delivering high-quality solutions. My expertise spans bothbackend and frontend realms, 
                        With over 1+ years of experience.
                    </p>
                    <p className='mt-2 flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-md
                    lg:text-xl '>
                        In addition, I also have hands-on experience in DevOps tasks. I&apos;m adept at managing Linux servers,
                        deploying Node.js applications, utilizing tools like PM2 for process management, and configuring web servers
                        such as Apache and Nginx. This multifaceted skill set allows me to handle end-to-end development
                        and deployment processes effectively.
                    </p>
                </motion.div>
            </motion.div>
            <div className='mt-4 hover:-translate-y-2 group bg-neutral-50 duration-500 w-32 h-36 
            flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md 
            lg:mt-0 lg:w-fit lg:h-fit'>
                <Image src={profile} alt="Image" className='object-cover lg:w-[40rem] lg:h-[10rem] xl:w-[39rem] xl:h-[13rem]' />
            </div>

        </div>
    )
}

export default AboutComponent