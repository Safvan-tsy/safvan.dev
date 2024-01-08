import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex justify-center flex-wrap items-center '>
      <div className='hidden md:w-[90%] sm:flex w-full mt-6 lg:mt-20 p-3 lg:pt-8 flex-col flex-wrap 
      items-center sm:w-[95%] lg:w-[88%] xl:w-[85%] border-t-[1px] border-gray-600'>
        <p className='text-[0.5rem] sm:text-sm text-gray-400 p-1'>
          Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>
        <p className='text-[0.5rem] sm:text-sm text-gray-400 p-1'>
          Interested in working together? We should queue up a time to chat.
          <span className='ml-2 p-1 border bg-gray-700 shadow-sm tracking-wider 
           border-gray-600 hover:border-gray-700 text-gray-300 rounded-md hover:shadow-lg hover:bg-gray-800
            transition ease-in duration-300 cursor-pointer'>
            Lets talk
          </span>
        </p>
        <p className='sm:text-sm text-gray-400 p-1'>
          © 2023 Safvan
        </p>
      </div>
      <div className='flex sm:hidden md:w-[90%] w-full mt-6 lg:mt-20 p-3 lg:pt-8 flex-col flex-wrap justify-center 
      items-center sm:w-[95%] lg:w-[88%] xl:w-[85%] border-t-[1px] border-gray-600 pb-6'>
        <p className='text-[0.5rem] sm:text-sm text-gray-400 p-1'>
          Built with Next.js and Tailwind CSS, deployed with Vercel.
          Interested in working together? We should queue up a time to chat.

          <span className='ml-1 text-[0.5rem] sm:text-sm p-[0.1rem] border bg-gray-700 shadow-sm 
           border-gray-600 hover:border-gray-700 text-gray-300 rounded-sm hover:shadow-lg hover:bg-gray-800
            transition ease-in duration-300 cursor-pointer'>
            Lets talk
          </span>
        </p>

        <p className='text-[0.5rem] text-gray-400 p-1'>
          © 2023 Safvan
        </p>
      </div>
    </footer>
  )
}

export default Footer