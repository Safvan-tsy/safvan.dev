import React from "react";
import styles from "./Experience.module.scss";
import { motion, Variants, useScroll } from "framer-motion";
import Reveal from "../animated/Reveal";

const Experience = () => {
  return (
    <Reveal margin="0px 0px 0px 0px">
      <div
        className="mt-4 flex justify-center flex-wrap items-center flex-col lg:mt-6 lg:mb-4 lg:mx-8 
    xl:mt-10 xl:mb-8 xl:mx-20"
      >
        <h2
          className="text-gray-100 mt-2 text-2xl font-inter tracking-wide
                md:text-3xl xl:text-4xl"
        >
          Experience
        </h2>
        <div className="mt-2 lg:mt-4">
          <div className="m-2 p-2 lg:py-6 flex flex-col md:flex-row border-b-[1px] border-gray-600">
            <div className="md:w-[30%]">
              <div>
                <h2 className="text-bold tracking-wider">Unfold Solution</h2>
                <p className="text-sm text-gray-400">1 yr 6 mo</p>
                <p className="text-sm text-gray-400">
                  Remote - Melbourne, Australia
                </p>
              </div>
              <div className="p-4">
                <ul>
                  <li>
                    <span className={styles.circleStyle}>
                      <span className={styles.lineStyle}></span>
                    </span>
                    <div>
                      <h3>Software Engineer</h3>
                      <span className="text-sm text-gray-400">
                        Dec 2023 - Present
                      </span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <span className={styles.circleStyle}>
                      <span className={styles.lineStyle}></span>
                    </span>
                    <div>
                      <h3>Jr Software Engineer</h3>
                      <span className="text-sm text-gray-400">
                        May 2023 - Nov 2023
                      </span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <span className={styles.circleStyle}></span>
                    <div>
                      <h3>Trainee Developer</h3>
                      <span className="text-sm text-gray-400">
                        Jan 2023 - April 2023
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-[70%]">
              <ul
                className="flex flex-wrap text-[--paragraph-font] font-inter tracking-wide 
                    lg:text-[16px] text-sm lg:leading-6 lg:tracking-wider"
              >
                <li className="py-1 list-disc">
                  Thrived as a backend developer specializing in Node.js,
                  extensively utilizing frameworks like Express and NestJS.
                </li>
                <li className="py-1 list-disc">
                  Designed and developed authentication and authorization
                  systems, including Role-Based Access Control (RBAC) and
                  Isomorphic Authorization, to ensure secure and efficient user
                  management
                </li>
                <li className="py-1 list-disc">
                  Created and maintained RESTful API services, enabling seamless
                  communication between front-end and back-end systems
                </li>
                <li className="py-1 list-disc">
                  Focused on crafting robust applications, leveraging MongoDB as
                  the primary database, and ensuring meticulous project
                  documentation.
                </li>
                <li className="py-1 list-disc">
                  Conducted rigorous API testing using tools such as Postman and
                  Apache JMeter to ensure the reliability and functionality of
                  developed solutions.
                </li>
                <li className="py-1 list-disc">
                  Embraced agile methodologies for the software development
                  lifecycle, contributing to increased adaptability and
                  efficiency in project workflows.
                </li>
                <li className="py-1 list-disc">
                  Ventured into DevOps tasks, demonstrating proficiency in
                  managing Linux servers, deploying Node.js applications via
                  PM2, and configuring versatile web servers like Apache and
                  Nginx.
                </li>
                <li className="py-1 list-disc">
                  Contributed significantly to end-to-end development and
                  deployment processes, playing a crucial role in enhancing team
                  productivity and elevating project outcomes.
                </li>
              </ul>
            </div>
          </div>
          <div className="m-2 p-2 flex flex-col md:flex-row lg:py-6">
            <div className="md:w-[30%]">
              <div>
                <h2 className="text-semibold tracking-wider">
                  Software Development Intern
                </h2>
                <h3>TGH Tech</h3>
                <p className="text-sm text-gray-400">3 mos</p>
                <p className="text-sm text-gray-400">Remote - Kerala, India</p>
              </div>
            </div>
            <div className="md:w-[70%]">
              <ul
                className="flex flex-wrap text-[--paragraph-font] font-inter tracking-wide 
                    lg:text-[16px] text-sm lg:leading-6 lg:tracking-wider"
              >
                <li className=" list-disc">
                  As a Software Development Intern, I focused on bolstering a
                  product&apos;s backend using Node.js and the Fastify framework
                  while gaining expertise in MongoDB for database management.
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
