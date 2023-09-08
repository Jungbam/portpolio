"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { reduceList } from "@/util/reduceList";

import ServiceTag from "../icon/service";

import ProjectTag from "./ProjectTag";

interface props {
  project: any;
}
const ProjectItem: React.FC<props> = ({ project }) => {
  const [init, setInit] = React.useState(true);
  const id = project.id;
  const title = project.properties.title.title[0].plain_text;
  const description = project.properties.description.rich_text[0].plain_text;
  const tags = project.properties.tags.multi_select;
  const imgSrc = project.cover?.file.url;
  const status = project?.properties.status.rich_text[0].plain_text;

  const router = useRouter();

  const linkHanlder = async (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/projects/${id}`);
  };
  React.useEffect(() => {
    const initTimeout = setTimeout(() => {
      setInit(false);
    }, 500);
    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  return (
    <>
      <div
        className={`m-3 bg-[#F5F5F5] rounded-xl border border-[#DCDCDC] shadow-lg dark:shadow-white dark:bg-black dark:border-[#2A2A2A] hover:scale-105 transition-scale duration-150 ease-in-out cursor-pointer relative`}
        onClick={linkHanlder}
      >
        <div className="relative w-full h-0 pb-[42.85%]">
          <Image
            className="rounded-t-xl absolute top-0 left-0 w-full h-full"
            src={imgSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
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
        {init && (
          <div className="absolute top-0 left-0 w-full h-full animate-pulse">
            <div className="relative w-full h-0 pb-[42.85%] rounded-t-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-t-lg"></div>
            </div>
            <div className="flex flex-col px-5 py-2"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectItem;
