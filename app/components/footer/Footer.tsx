import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex justify-center flex-wrap items-center '>
      <div className='md:w-[90%] flex w-full mt-6 lg:mt-20 p-3 lg:pt-8 flex-col flex-wrap 
      items-center sm:w-[95%] lg:w-[88%] xl:w-[85%] border-t-[1px] border-gray-600'>
        <p className='text-sm text-gray-400'>
          Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>
        <p className='text-sm text-gray-400'>
          Interested in working together? We should queue up a time to chat. 
          <span className='ml-2'>
            Lets talk
          </span>
        </p>
        <p className='text-sm text-gray-400'>
          © 2023 Safvan
        </p>
      </div>
    </footer>
  )
}

export default Footer