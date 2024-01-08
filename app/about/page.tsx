import React from 'react'
import TransitionEffect from '../components/animated/TransitionEffect'
import TechStack from '../components/about/techstack/TechStack'
import Experience from '../components/about/Experience'
import Education from '../components/about/Education'
import AboutComponent from '../components/about/About'

const About = () => {
  return (
    <div className='md:w-[90%] flex w-full flex-col flex-wrap items-center rounded-xl 
    bg-[--component-background] sm:w-[95%] lg:w-[88%] xl:w-[85%] mb-4'>
      {/* <TransitionEffect /> */}
      <AboutComponent />
      <TechStack />
      <Experience />
      <Education />
    </div>
  )
}

export default About