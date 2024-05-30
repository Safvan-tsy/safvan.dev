import React from "react";

const ProjectListCard = () => {
  return (
    <div
      className="duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 
  p-3 flex flex-col justify-evenly  rounded-xl bg-clip-border shadow-md"
    >
      <div
        className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 
        group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
      ></div>
      <div
        className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 
           group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
      ></div>
      <div
        className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 
            group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
      ></div>
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
      <div className="relative flex md:hidden w-full flex-col">
        <div
          className="relative mx-4 md:w-80 mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border
       text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
        ></div>
        <div className="p-2">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs 
          font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="hidden relative md:flex w-80 flex-col md:w-full md:flex-row md:flex-wrap rounded-xl bg-clip-border shadow-md">
        <div
          className="relative mx-4 md:w-80 mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border
       text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
        ></div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs 
          font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListCard;
