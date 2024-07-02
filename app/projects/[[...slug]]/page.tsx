import { notFound } from 'next/navigation';
import React from 'react';
import { projects } from '../data/projects';
import ProjectListCard from '@/app/components/projects/ProjectListCard';
import ProjectViewCard from '@/app/components/projects/ProjectViewCard';

const Project: React.FC<{ params: { slug: string[] } }> = ({ params }) => {
  if (params.slug?.length == 1) {
    const project = projects.find((proj) => proj.slug === params.slug[0]);
    if (!project) {
      notFound();
    } else
      return (
        <section
          className="mb-4 flex w-full flex-wrap items-center justify-center
          gap-14 p-3 md:w-[90%] lg:p-6 lg:pb-8 xl:p-10"
        >
          <ProjectViewCard project={project} />
        </section>
      );
  } else if (params.slug?.length > 1) notFound();
  else
    return (
      <section
        className="mb-4 flex w-full flex-wrap items-center justify-center
        gap-14 p-3 md:w-[90%] lg:p-6 lg:pb-8 xl:p-10"
      >
        {projects.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </section>
    );
};

export default Project;
