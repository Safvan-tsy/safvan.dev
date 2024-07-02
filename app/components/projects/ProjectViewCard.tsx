import { ProjectType } from '@/app/projects/data/projects';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ImageCarousel from '../ui/carousel/ImageCarousel';

const ProjectViewCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="group relative flex flex-col justify-evenly  
      overflow-hidden rounded-xl bg-neutral-800 bg-clip-border p-3 shadow-md duration-500"
    >
      <div
        className="absolute -bottom-24 right-1 h-72 w-72 rounded-full bg-stone-900 blur 
        duration-500 group-hover:translate-x-12 group-hover:translate-y-12 group-hover:blur-none"
      ></div>
      <div
        className="absolute bottom-12 right-12 h-12 w-12 rounded-full bg-amber-900 blur 
           duration-500 group-hover:translate-x-12 group-hover:translate-y-2 group-hover:blur-none"
      ></div>
      <div
        className="absolute -top-12 right-1 h-36 w-36 rounded-full bg-amber-800 blur 
            duration-500 group-hover:-translate-y-12 group-hover:translate-x-12 group-hover:blur-none"
      ></div>
      <div
        className="absolute h-24 w-24 rounded-full bg-amber-950 blur duration-500 group-hover:-translate-x-12 
      group-hover:blur-none"
      ></div>
      <div className=" relative flex flex-col">
        <div className="flex items-center justify-center">
          <h1 className="mt-2 p-2 font-inter text-2xl font-semibold tracking-wide text-gray-100 md:text-3xl xl:text-4xl">
            {project.projectName}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {project.profile && (
            <img
              src={project.profile}
              alt="image"
              className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-stone-500 
            to-stone-900 bg-clip-border object-cover
           object-center shadow-lg md:h-52 md:min-w-[20rem] lg:h-56 xl:h-60 xl:min-w-[30rem]"
            />
          )}
          <p
            className=" flex flex-wrap font-inter text-sm italic tracking-wide
                    text-[--paragraph-font] lg:text-[18px] lg:leading-6 lg:tracking-wider"
          >
            {project.summary}
          </p>
        </div>
        <div className="flex flex-col md:p-4 xl:p-5">
          <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <div className="flex cursor-pointer flex-wrap items-center gap-1 py-4">
              <FaGithub />
              <p
                className="font-inter text-sm italic tracking-wide
            text-[--paragraph-font] lg:text-[18px] lg:leading-6 lg:tracking-wider"
              >
                Github Repo
              </p>
            </div>
          </Link>
          <h2 className="mt-1 font-inter text-xl font-semibold text-gray-400 md:text-2xl lg:tracking-wide xl:text-3xl">
            Tech Stack
          </h2>
          <ul className="flex list-disc flex-col gap-2 p-4">
            {project.techStack?.map((item) => (
              <li
                key={item.tech}
                className="list-item font-inter text-sm tracking-wide text-[--paragraph-font]
              lg:text-[18px] lg:leading-6 lg:tracking-wider "
              >
                <span className=" font-semibold text-gray-400">{item.tech}:</span>{' '}
                {item.values.join()}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col pt-0 md:p-4 xl:p-5">
          <h2 className="mt-1 font-inter text-xl font-semibold text-gray-400 md:text-2xl lg:tracking-wide xl:text-3xl">
            Features
          </h2>
          <ul className="flex list-disc flex-col gap-2 p-4">
            {project.feat?.map((item) => (
              <li
                key={item}
                className="list-item font-inter text-sm tracking-wide text-[--paragraph-font]
              lg:text-[18px] lg:leading-6 lg:tracking-wider "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col pt-0 md:p-4 xl:p-5">
          <h2 className="mt-1 font-inter text-xl font-semibold text-gray-400 md:text-2xl lg:tracking-wide xl:text-3xl">
            Visuals
          </h2>
          {project.visuals && <ImageCarousel images={project.visuals} />}
        </div>
        <div className="flex flex-col pt-0 md:p-4 xl:p-5">
          <h2 className="mt-1 font-inter text-xl font-semibold text-gray-400 md:text-2xl lg:tracking-wide xl:text-3xl">
            Challenges and Solutions
          </h2>
          <ul className="flex list-disc flex-col gap-2 p-4">
            {project.challenges?.map((item) => (
              <li
                key={item.challenge}
                className="list-item font-inter text-sm tracking-wide text-[--paragraph-font]
              lg:text-[18px] lg:tracking-wider"
              >
                <p className=" lg:leading-8">
                  <span className=" font-semibold text-gray-400">Challenge:</span> {item.challenge}
                </p>
                <p className=" leading-6 lg:leading-8">
                  <span className=" font-semibold text-gray-400">Solution:</span> {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col pt-0 md:p-4 xl:p-5">
          <h2 className="mt-1 font-inter text-xl font-semibold text-gray-400 md:text-2xl lg:tracking-wide xl:text-3xl">
            Learning Outcomes
          </h2>
          <ul className="flex list-disc flex-col gap-2 p-4">
            {project.learningOutcome?.map((item) => (
              <li
                key={item}
                className="list-item font-inter text-sm tracking-wide text-[--paragraph-font]
              lg:text-[18px] lg:leading-6 lg:tracking-wider "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewCard;
