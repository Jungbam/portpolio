"use client";
import React from "react";

import ProjectItemSkel from "./ProjectItemSkel";

const ProjectListSkel = () => {
  return (
    <>
      <span className="text-md font-bold sm:text-xl pl-8 text-right">
        프로젝트 리스트를 불러오는 중입니다.
      </span>
      <article className="grid grid-cols-1 md:grid-cols-2 m-6 gap-8 sm:w-full mb-20">
        <ProjectItemSkel />
        <ProjectItemSkel />
        <ProjectItemSkel />
        <ProjectItemSkel />
      </article>
    </>
  );
};

export default ProjectListSkel;
