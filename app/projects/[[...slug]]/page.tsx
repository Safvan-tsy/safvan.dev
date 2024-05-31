import { notFound } from "next/navigation";
import React from "react";
import { projects } from "../data/projects";
import ProjectListCard from "@/app/components/projects/ProjectListCard";
import ProjectViewCard from "@/app/components/projects/ProjectViewCard";

const Project: React.FC<{ params: { slug: string[] } }> = ({ params }) => {
  if (params.slug?.length == 1) {
    const project = projects.find((proj) => proj.slug === params.slug[0]);
    if (!project) {
      notFound();
    } else
      return (
        <section
          className="flex md:w-[90%] w-full justify-center flex-wrap items-center
          mb-4 p-3 lg:p-6 lg:pb-8 xl:p-10 gap-14"
        >
          <ProjectViewCard project={project} />
        </section>
      );
  } else if (params.slug?.length > 1) notFound();
  else
    return (
      <section
        className="flex md:w-[90%] w-full justify-center flex-wrap items-center
        mb-4 p-3 lg:p-6 lg:pb-8 xl:p-10 gap-14"
      >
        {projects.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </section>
    );
};

export default Project;
