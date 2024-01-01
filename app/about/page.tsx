import React from 'react'
import TransitionEffect from '../components/animated/TransitionEffect'
import TechStack from '../components/about/techstack/TechStack'
import Experience from '../components/about/Experience'
import Education from '../components/about/Education'
import AboutComponent from '../components/about/About'

const About = () => {
  return (
    <div>
      {/* <TransitionEffect /> */}
      <AboutComponent />
      <TechStack />
      <Experience />
      <Education />
    </div>
  )
}

export default About