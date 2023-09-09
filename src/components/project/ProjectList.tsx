"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import ProjectItem from "@/components/project/ProjectItem";
import useGetNotion from "@/hooks/useAPI/useGetNotion";

import ProjectListSkel from "./projectListSkel";

const ProjectsList = () => {
  const { isLoading, data } = useGetNotion();
  const projects = data?.data.data;

  if (isLoading) return <ProjectListSkel />;

  return (
    <>
      <span className="text-md font-bold sm:text-xl pl-8 text-right">
        프로젝트의 상세내용은 클릭을 통해 확인하실 수 있습니다.
      </span>
      <article className="grid grid-cols-1 md:grid-cols-2 m-6 gap-8 sm:w-full mb-20">
        {projects?.map((project: any) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </article>
    </>
  );
};

export default ProjectsList;
