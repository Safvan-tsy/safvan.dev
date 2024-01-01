import React from 'react'
import Image from 'next/image';
import profile from './../../assets/main.jpg';

const AboutComponent = () => {
    return (
        <div className='flex justify-between flex-col-reverse p-4 lg:flex-row lg:mt-6 lg:mb-4 lg:mx-8 
        xl:mt-10 xl:mb-8 xl:mx-20'>
            <div className=''>
                <h2 className='text-gray-100 mt-2 text-2xl font-inter font-semibold tracking-wide
                md:text-3xl xl:text-4xl'>
                    Muhammed Safvan
                </h2>
                <h4 className='text-gray-400 mt-2 text-xl font-inter
                md:text-2xl xl:text-3xl lg:tracking-wide'>
                    Software Developer
                </h4>
                <div className='mt-3 lg:mr-8 xl:mr-16 xl:mt-6'>
                    <p className='flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-lg 
                    sm:text-xl '>
                        I’m Safvan, a product designer and design system specialist from Poland with over 9 years of experience focusing on user experience and design systems to creating a user-centered design in SaaS products.
                    </p>
                    <p className='mt-1 flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-lg
                    sm:text-xl xl:mt-2 '>
                        Co-creator at Tetrisly one of the most popular starter kits for design systems. I had the opportunity to work with Phenom.com, Bidroom.com or Perfops.net but also with many startups from around the world as a Lead Designer.
                    </p>
                </div>
            </div>
            <div className='mt-4 hover:-translate-y-2 group bg-neutral-50 duration-500 w-32 h-36 
            flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md 
            lg:mt-0 lg:w-fit lg:h-fit'>
                <Image src={profile} alt="Image" className='object-cover ' />
            </div>

        </div>
    )
}

export default AboutComponent