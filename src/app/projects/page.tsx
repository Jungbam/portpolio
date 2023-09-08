/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { notionHandler } from "@/axios/notionAPI";
import ProjectItem from "@/components/project/ProjectItem";

const ProjectsPage = async () => {
  const projects = await notionHandler.getData();

  return (
    <div>
      <span className="text-md font-bold sm:text-xl pl-8 text-right">
        프로젝트의 상세내용은 클릭을 통해 확인하실 수 있습니다.
      </span>
      <article className="grid grid-cols-1 md:grid-cols-2 m-6 gap-8 sm:w-full mb-20">
        {projects?.map((project: any) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </article>
    </div>
  );
};

export default ProjectsPage;
