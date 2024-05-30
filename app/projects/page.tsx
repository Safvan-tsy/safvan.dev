import React from "react";
import { projects } from "./data/projects";
import ProjectListCard from "../components/projects/ProjectListCard";

const Page = async () => {
  const projectList = projects;
  return (
    <section className="flex md:w-[90%] w-full justify-center flex-wrap items-center
     mb-4 p-3 lg:p-6 lg:pb-8 xl:p-10 gap-14">
      {projectList.map((project) => (
        <ProjectListCard key={project.id} />
      ))}
    </section>
  );
};

export default Page;
