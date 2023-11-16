import React from 'react'
import Image from 'next/image';
import sass from '../../../assets/tech/sass.svg'
import js from '../../../assets/tech/javascript.svg'
import ts from '../../../assets/tech/typescript.svg'
import css3 from '../../../assets/tech/css3.svg'
import html5 from '../../../assets/tech/html.svg'
import handlebars from '../../../assets/tech/handlebars.svg'
import bootstrap from '../../../assets/tech/bootstrap.svg'
import react from '../../../assets/tech/react.svg'
import redux from '../../../assets/tech/redux.svg'
import yarn from '../../../assets/tech/yarn.svg'
import tailwind from '../../../assets/tech/tailwindcss.svg'

const ScrollingLogos = () => {
  return (
      <div className="flex overflow-hidden space-x-16 group">

        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <Image loading="lazy" src={tailwind} className="max-w-none" alt="Image 1" />
          <Image loading="lazy" src={bootstrap} className="max-w-none" alt="Image 2" />
          <Image loading="lazy" src={ts} className="max-w-none" alt="Image 3" />
          <Image loading="lazy" src={js} className="max-w-none" alt="Image 4" />
          <Image loading="lazy" src={html5} className="max-w-none" alt="Image 5" />
          <Image loading="lazy" src={css3} className="max-w-none" alt="Image 6" />
          <Image loading="lazy" src={yarn} className="max-w-none" alt="Image 7" />
          <Image loading="lazy" src={react} className="max-w-none" alt="Image 8" />
          <Image loading="lazy" src={redux} className="max-w-none" alt="Image 9" />
          <Image loading="lazy" src={sass} className="max-w-none" alt="Image 10" />
          <Image loading="lazy" src={handlebars} className="max-w-none" alt="Image 11" />
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused"  aria-hidden="true">
          <Image loading="lazy" src={tailwind} className="max-w-none" alt="Image 1" />
          <Image loading="lazy" src={bootstrap} className="max-w-none" alt="Image 2" />
          <Image loading="lazy" src={ts} className="max-w-none" alt="Image 3" />
          <Image loading="lazy" src={js} className="max-w-none" alt="Image 4" />
          <Image loading="lazy" src={html5} className="max-w-none" alt="Image 5" />
          <Image loading="lazy" src={css3} className="max-w-none" alt="Image 6" />
          <Image loading="lazy" src={yarn} className="max-w-none" alt="Image 7" />
          <Image loading="lazy" src={react} className="max-w-none" alt="Image 8" />
          <Image loading="lazy" src={redux} className="max-w-none" alt="Image 9" />
          <Image loading="lazy" src={sass} className="max-w-none" alt="Image 10" />
          <Image loading="lazy" src={handlebars} className="max-w-none" alt="Image 11" />
        </div>
      </div>

  )
}

export default ScrollingLogos