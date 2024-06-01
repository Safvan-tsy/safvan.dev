import { ProjectType } from "@/app/projects/data/projects";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectViewCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="duration-500 group overflow-hidden relative bg-neutral-800  
      p-3 flex flex-col justify-evenly rounded-xl bg-clip-border shadow-md"
    >
      <div
        className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 
        group-hover:translate-y-12 bg-stone-900 right-1 -bottom-24"
      ></div>
      <div
        className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 
           group-hover:translate-y-2 bg-amber-900 right-12 bottom-12"
      ></div>
      <div
        className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 
            group-hover:-translate-y-12 bg-amber-800 right-1 -top-12"
      ></div>
      <div
        className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-amber-950 rounded-full 
      group-hover:-translate-x-12"
      ></div>
      <div className=" relative flex flex-col">
        <div className="flex justify-center items-center">
          <h1 className="text-gray-100 mt-2 text-2xl font-inter font-semibold tracking-wide md:text-3xl xl:text-4xl p-2">
            {project.projectName}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-4">
          <img
            src={project.profile}
            alt="image"
            className="relative mx-4 md:min-w-[20rem] xl:min-w-[30rem] mt-6 h-40 md:h-52 lg:h-56 xl:h-60 overflow-hidden 
            rounded-xl bg-blue-gray-500 bg-clip-border
           shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-stone-500 to-stone-900 object-cover object-center"
          />
          <p
            className=" flex flex-wrap text-[--paragraph-font] font-inter tracking-wide text-sm
                    lg:text-[18px] lg:leading-6 lg:tracking-wider italic"
          >
            {project.summary}
          </p>
        </div>
        <div className="flex flex-col p-5">
          <Link
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-wrap gap-1 p-6 cursor-pointer items-center">
              <FaGithub />
              <p
                className="text-[--paragraph-font] font-inter tracking-wide text-sm
            lg:text-[18px] lg:leading-6 lg:tracking-wider italic"
              >
                Github Repo
              </p>
            </div>
          </Link>
          <h2 className="text-gray-400 mt-2 text-xl font-inter font-semibold md:text-2xl xl:text-3xl lg:tracking-wide">
            Tech Stack
          </h2>
          <ul className="flex flex-col list-disc p-4 gap-2">
            {project.techStack?.map((item) => (
              <li
                key={item.tech}
                className="list-item text-[--paragraph-font] font-inter tracking-wide text-sm
              lg:text-[18px] lg:leading-6 lg:tracking-wider "
              >
                {item.tech}: {item.values.join()}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col p-5 pt-0">
          <h2 className="text-gray-400 mt-2 text-xl font-inter font-semibold md:text-2xl xl:text-3xl lg:tracking-wide">
            Challenges and Solutions
          </h2>
          <ul className="flex flex-col list-disc p-4 gap-2">
            {project.challenges?.map((item) => (
              <li
                key={item.challenge}
                className="list-item text-[--paragraph-font] font-inter tracking-wide text-sm
              lg:text-[18px] lg:leading-6 lg:tracking-wider"
              >
                <p className="p-1">Challenge: {item.challenge}</p>
                <p className="p-1">Solution: {item.solution}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewCard;
