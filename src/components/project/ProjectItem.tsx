"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { reduceList } from "@/util/reduceList";

import ServiceTag from "../icon/service";

import ProjectTag from "./ProjectTag";

interface props {
  project: any;
}
const ProjectItem: React.FC<props> = ({ project }) => {
  const id = project.id;
  const title = project.properties.title.title[0].plain_text;
  const description = project.properties.description.rich_text[0].plain_text;
  const tags = project.properties.tags.multi_select;
  const imgSrc = project.cover?.file.url;
  const status = project?.properties.status.rich_text[0].plain_text;

  return (
    <Link href={`/projects/${id}`}>
      <div
        className={`m-3 bg-[#F5F5F5] rounded-xl border border-[#DCDCDC] shadow-lg dark:shadow-white dark:bg-black dark:border-[#2A2A2A] hover:scale-105 transition-scale duration-150 ease-in-out cursor-pointer relative`}
      >
        <div className="relative w-full h-0 pb-[42.85%]">
          <Image
            width={500}
            height={400}
            src={imgSrc}
            alt={title}
            quality={100}
            className="rounded-t-xl absolute top-0 left-0 w-full h-full"
          />
          <ServiceTag status={status} />
        </div>
        <div className="flex flex-col px-5 py-2 gap-3">
          <h1 className="text-[20px] font-bold">{title}</h1>
          <p className="w-full truncate">{description}</p>
          <div className="flex flex-wrap">
            {reduceList(tags).map((tag: any) => (
              <ProjectTag
                key={tag.id}
                name={tag.name}
                color={tag.color}
                bounce
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
