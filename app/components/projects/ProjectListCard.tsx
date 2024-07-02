import { ProjectType } from '@/app/projects/data/projects';
import Link from 'next/link';
import React from 'react';

const ProjectListCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="group relative flex flex-col justify-evenly overflow-hidden 
  rounded-xl bg-neutral-800 bg-clip-border p-3  text-neutral-50 shadow-md duration-500"
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
      <div className="relative flex w-full flex-col gap-4 md:hidden">
        {project.profile && (
          <img
            src={project.profile}
            alt="image"
            className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-6 h-40 
          overflow-hidden rounded-xl bg-gradient-to-r
        from-stone-500 to-stone-900 bg-clip-border object-cover object-center text-white shadow-lg md:w-80"
          />
        )}

        <div className="p-2">
          <h5 className="text-blue-gray-900 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
            {project.projectName}
          </h5>
          <p className="block text-sm font-light leading-relaxed text-inherit antialiased">
            {project.summary}
          </p>
        </div>
        <div className="">
          <Link href={`/projects/${project.slug}`}>
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-[--button-bg] px-4 py-2 text-center text-sm font-bold
          uppercase text-white shadow-md shadow-stone-800/20 transition-all hover:shadow-lg hover:shadow-amber-950/40
           focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
           disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:px-6 md:py-3"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="relative hidden w-full flex-row items-center justify-center gap-4 md:flex lg:p-3 xl:p-4">
        {project.profile && (
          <img
            src={project.profile}
            alt="image"
            className="shadow-blue-gray-500/40 relative mx-4 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-stone-500 
          to-stone-900 object-cover object-center text-white 
          shadow-lg md:min-w-[20rem]"
          />
        )}
        <div className="flex flex-col">
          <div className="p-2">
            <h5 className="text-blue-gray-900 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
              {project.projectName}
            </h5>
            <p
              className="block font-inter text-sm tracking-wide text-[--paragraph-font]
                    lg:text-[18px] lg:leading-6 lg:tracking-wider"
            >
              {project.summary}
            </p>
          </div>
          <div className="flex justify-end">
            <Link href={`/projects/${project.slug}`}>
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-[--button-bg] px-4 py-2 text-center text-sm font-bold
        uppercase text-white shadow-md shadow-stone-800/20 transition-all hover:shadow-lg hover:shadow-amber-950/40
         focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
         disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:px-6 md:py-3"
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
