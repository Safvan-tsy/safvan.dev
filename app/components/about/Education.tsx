import React from 'react';
import Reveal from '../animated/Reveal';

const Education = () => {
  return (
    <Reveal margin="0px 0px 0px 0px">
      <div
        className="mt-4 flex flex-col flex-wrap items-center justify-center lg:mx-8 lg:mb-4 lg:mt-6 
    xl:mx-20 xl:mb-8 xl:mt-10"
      >
        <h2
          className="mt-2 font-inter text-2xl tracking-wide text-gray-100
                md:text-3xl xl:text-4xl"
        >
          Education
        </h2>
        <div className="mt-2 lg:mt-4">
          <div className="m-2 flex flex-col border-b-[1px] border-gray-600 p-2 md:flex-row lg:py-6">
            <div className="md:w-[40%]">
              <div>
                <h2 className="text-bold tracking-wider">B.Voc In Software Development</h2>
                <h3>Farook College Kozhikode</h3>
                <p className="text-sm text-gray-400">2020-2023</p>
                <p className="text-sm text-gray-400">Kerala, India</p>
              </div>
            </div>
            <div className="md:w-[60%]">
              <ul
                className="text-md flex flex-wrap font-inter text-sm tracking-wide 
                    text-[--paragraph-font] lg:text-[16px] lg:leading-6 lg:tracking-wider"
              >
                <li className="list-disc py-1">
                  Focused three-year Software Development degree, deepening computer science
                  fundamentals.
                </li>
                <li className="list-disc py-1">
                  Explored Data Structures, Algorithms, and expanded web development skills.
                </li>
                <li className="list-disc py-1">
                  Applied diverse coding languages—C, Java, Python, and .NET—in projects,
                  strengthening proficiency in these versatile tools.
                </li>
                <li className="list-disc py-1">
                  Completed with a commendable CGPA percentage of 75.7%, reflecting mastery in
                  foundational software development and computer science.
                </li>
              </ul>
            </div>
          </div>
          <div className="m-2 flex flex-col p-2 md:flex-row lg:py-6">
            <div className="md:w-[40%]">
              <div>
                <h2 className="text-semibold tracking-wider">Computer Science</h2>
                <h3>Rahmania HSS Calicut</h3>
                <p className="text-sm text-gray-400">2017-2019</p>
                <p className="text-sm text-gray-400">Kerala, India</p>
              </div>
            </div>
            <div className="md:w-[60%]">
              <ul
                className="text-md flex flex-wrap font-inter text-sm tracking-wide 
                    text-[--paragraph-font] lg:text-[16px] lg:leading-6 lg:tracking-wider"
              >
                <li className="list-disc py-1">
                  Completed a comprehensive two-year program in Computer Science, serving as
                  foundational knowledge in the field.
                </li>
                <li className="list-disc py-1">
                  Delved deeply into coding languages such as C and C++, solving complex problems
                  and mastering fundamental computer science concepts.
                </li>
                <li className="list-disc py-1">
                  Acquired a solid grounding in programming languages and essential principles
                  during the educational tenure.
                </li>
                <li className="list-disc py-1">
                  Successfully completed the program with an approximate 80% achievement score.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Education;
