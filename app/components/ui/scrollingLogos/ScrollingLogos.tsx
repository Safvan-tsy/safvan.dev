import React from 'react'
import Image from 'next/image';
import sass from '../../../assets/tech/sass.svg'
import js from '../../../assets/tech/javascript.svg'
import ts from '../../../assets/tech/typescript.svg'
import nodejs from '../../../assets/tech/nodejs.svg'
import jest from '../../../assets/tech/jest.svg'
import css3 from '../../../assets/tech/css3.svg'
import html5 from '../../../assets/tech/html.svg'
import handlebars from '../../../assets/tech/handlebars.svg'
import bootstrap from '../../../assets/tech/bootstrap.svg'
import react from '../../../assets/tech/react.svg'
import redux from '../../../assets/tech/redux.svg'
import yarn from '../../../assets/tech/yarn.svg'
import npm from '../../../assets/tech/npm.svg'

const ScrollingLogos = () => {
  return (
    <div className='flex overflow-hidden space-x-16 group'>
    <div className='flex  animate-loop-scroll space-x16 group-hover:paused'>
        <Image src={sass} alt="Image0" className='mx-w-none' loading='lazy' />
        <Image src={js} alt="Image1" className='mx-w-none' />
        <Image src={ts} alt="Image2" className='mx-w-none' />
        <Image src={nodejs} alt="Image3" className='mx-w-none' />
        <Image src={jest} alt="Image4" className='mx-w-none' />
        <Image src={bootstrap} alt="Image4" className='mx-w-none' />
        <Image src={handlebars} alt="Image4" className='mx-w-none' />
        <Image src={html5} alt="Image4" className='mx-w-none' />
        <Image src={css3} alt="Image4" className='mx-w-none' />
        <Image src={react} alt="Image4" className='mx-w-none' />
        <Image src={redux} alt="Image4" className='mx-w-none' />
        <Image src={npm} alt="Image4" className='mx-w-none' />
        <Image src={yarn} alt="Image4" className='mx-w-none' />
    </div>
    </div>
    
  )
}

export default ScrollingLogos