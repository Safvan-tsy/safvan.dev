import { notFound } from "next/navigation";
import React from "react";

const Project: React.FC<{ params: { slug: string[] } }> = ({ params }) => {
  if (params.slug?.length == 1) return <div>page for {params.slug[0]}</div>;
  else if (params.slug?.length == 0) return <div>Project page</div>;
  else notFound();
};

export default Project;
