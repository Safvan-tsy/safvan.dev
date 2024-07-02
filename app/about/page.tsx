import React from 'react';
import TechStack from '../components/about/techstack/TechStack';
import Experience from '../components/about/Experience';
import Education from '../components/about/Education';
import AboutComponent from '../components/about/About';

const About = () => {
  return (
    <div
      className="mb-4 flex w-full flex-col flex-wrap items-center rounded-xl 
    bg-[--component-background] sm:w-[95%] md:w-[90%] lg:w-[88%] xl:w-[85%]"
    >
      {/* <TransitionEffect /> */}
      <AboutComponent />
      <TechStack />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
