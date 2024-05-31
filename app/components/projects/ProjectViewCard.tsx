import { ProjectType } from "@/app/projects/data/projects";
import React from "react";

const ProjectViewCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 
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
        <div className="flex flex-col justify-center items-center md:flex-row">
        <img
          src={project.profile}
          alt="image"
          className="relative mx-4 md:w-80 mt-6 h-40 overflow-hidden 
          rounded-xl bg-blue-gray-500 bg-clip-border
        text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-stone-500 to-stone-900 object-cover object-center"
        />
        <p className="block font-light leading-relaxed text-inherit antialiased text-sm">
            {project.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewCard;
