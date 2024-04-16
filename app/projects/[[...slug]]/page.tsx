import React from "react";

const Project: React.FC<{ params: { slug: string } }> = ({ params }) => {
  if (params.slug?.length == 1) return <div>page for {params.slug[0]}</div>
  return <div>Project page</div>;
};

export default Project;
