import React from 'react';
import styles from './Experience.module.scss';
import Reveal from '../animated/Reveal';

const Experience = () => {
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
          Experience
        </h2>
        <div className="mt-2 lg:mt-4">
          <div className="m-2 flex flex-col border-b-[1px] border-gray-600 p-2 md:flex-row lg:py-6">
            <div className="md:w-[30%]">
              <div>
                <h2 className="text-bold tracking-wider">Unfold Solution</h2>
                <p className="text-sm text-gray-400">1 yr 6 mo</p>
                <p className="text-sm text-gray-400">Remote - Melbourne, Australia</p>
              </div>
              <div className="p-4">
                <ul>
                  <li>
                    <span className={styles.circleStyle}>
                      <span className={styles.lineStyle}></span>
                    </span>
                    <div>
                      <h3>Software Engineer</h3>
                      <span className="text-sm text-gray-400">Dec 2023 - Present</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <span className={styles.circleStyle}>
                      <span className={styles.lineStyle}></span>
                    </span>
                    <div>
                      <h3>Jr Software Engineer</h3>
                      <span className="text-sm text-gray-400">May 2023 - Nov 2023</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <span className={styles.circleStyle}></span>
                    <div>
                      <h3>Trainee Developer</h3>
                      <span className="text-sm text-gray-400">Jan 2023 - April 2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-[70%]">
              <ul
                className="flex flex-wrap font-inter text-sm tracking-wide 
                    text-[--paragraph-font] lg:text-[16px] lg:leading-6 lg:tracking-wider"
              >
                <li className="list-disc py-1">
                  Thrived as a backend developer specializing in Node.js, extensively utilizing
                  frameworks like Express and NestJS.
                </li>
                <li className="list-disc py-1">
                  Designed and developed authentication and authorization systems, including
                  Role-Based Access Control (RBAC) and Isomorphic Authorization, enhancing system
                  security and user management.
                </li>
                <li className="list-disc py-1">
                  Created and maintained RESTful API services, enabling seamless communication
                  between front-end and back-end systems
                </li>
                <li className="list-disc py-1">
                  Focused on crafting robust applications, leveraging MongoDB as the primary
                  database, and ensuring meticulous project documentation.
                </li>
                <li className="list-disc py-1">
                  Practiced Test-Driven Development (TDD), writing unit, integration, and end-to-end
                  tests using Jest.
                </li>
                <li className="list-disc py-1">
                  Conducted rigorous API testing using tools such as Postman and Apache JMeter to
                  ensure the reliability and functionality of developed solutions.
                </li>
                <li className="list-disc py-1">
                  Embraced agile methodologies for the software development lifecycle, contributing
                  to increased adaptability and efficiency in project workflows.
                </li>
                <li className="list-disc py-1">
                  Ventured into DevOps tasks, demonstrating proficiency in managing Linux servers,
                  deploying Node.js applications via PM2, and configuring versatile web servers like
                  Apache and Nginx.
                </li>
                <li className="list-disc py-1">
                  Contributed significantly to end-to-end development and deployment processes,
                  playing a crucial role in enhancing team productivity and elevating project
                  outcomes.
                </li>
              </ul>
            </div>
          </div>
          <div className="m-2 flex flex-col p-2 md:flex-row lg:py-6">
            <div className="md:w-[30%]">
              <div>
                <h2 className="text-semibold tracking-wider">Software Development Intern</h2>
                <h3>TGH Tech</h3>
                <p className="text-sm text-gray-400">3 mos</p>
                <p className="text-sm text-gray-400">Remote - Kerala, India</p>
              </div>
            </div>
            <div className="md:w-[70%]">
              <ul
                className="flex flex-wrap font-inter text-sm tracking-wide 
                    text-[--paragraph-font] lg:text-[16px] lg:leading-6 lg:tracking-wider"
              >
                <li className=" list-disc">
                  As a Software Development Intern, I focused on bolstering a product&apos;s backend
                  using Node.js and the Fastify framework while gaining expertise in MongoDB for
                  database management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
