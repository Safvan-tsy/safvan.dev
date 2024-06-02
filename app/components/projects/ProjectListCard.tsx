import { ProjectType } from "@/app/projects/data/projects";
import Link from "next/link";
import React from "react";

const ProjectListCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 
  p-3 flex flex-col justify-evenly  rounded-xl bg-clip-border shadow-md"
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
      <div className="relative flex md:hidden w-full flex-col gap-4">
        <img
          src={project.profile}
          alt="image"
          className="relative mx-4 md:w-80 mt-6 h-40 overflow-hidden 
          rounded-xl bg-blue-gray-500 bg-clip-border
        text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-stone-500 to-stone-900 object-cover object-center"
        />

        <div className="p-2">
          <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {project.projectName}
          </h5>
          <p className="block font-light leading-relaxed text-inherit antialiased text-sm">
            {project.summary}
          </p>
        </div>
        <div className="">
          <Link href={`/projects/${project.slug}`}>
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-[--button-bg] py-2 md:py-3 px-4 md:px-6 text-center
          font-bold uppercase text-white shadow-md shadow-stone-800/20 transition-all hover:shadow-lg
           hover:shadow-amber-950/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
           active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden relative md:flex w-full flex-row gap-4 justify-center items-center lg:p-3 xl:p-4">
        <img
          src={project.profile}
          alt="image"
          className="relative mx-4 md:min-w-[20rem] h-40 overflow-hidden rounded-xl text-white shadow-lg 
          shadow-blue-gray-500/40 bg-gradient-to-r from-stone-500 to-stone-900 
          object-cover object-center"
        />
        <div className="flex flex-col">
          <div className="p-2">
            <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {project.projectName}
            </h5>
            <p className="block text-[--paragraph-font] font-inter tracking-wide text-sm
                    lg:text-[18px] lg:leading-6 lg:tracking-wider">
              {project.summary}
            </p>
          </div>
          <div className="flex justify-end">
            <Link href={`/projects/${project.slug}`}>
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-[--button-bg] py-2 md:py-3 px-4 md:px-6 text-center
        font-bold uppercase text-white shadow-md shadow-stone-800/20 transition-all hover:shadow-lg
         hover:shadow-amber-950/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
         active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListCard;
