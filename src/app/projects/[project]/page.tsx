"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

import ProjectTag from "@/components/project/ProjectTag";
import Github from "@/components/icon/github";
import LinkEl from "@/components/icon/link";
import ServiceTag from "@/components/icon/service";
import useGetNotion from "@/hooks/useAPI/useGetNotion";
import LoadingSpinner from "@/components/icon/loadingSpinner";

const ProjectPage = ({ params }: any) => {
  const { isLoading, data: projects } = useGetNotion();

  const project = projects?.filter(
    (list: any) => list.id === params.project,
  )[0];

  const title = project?.properties.title.title[0].plain_text;
  const description = project?.properties.description.rich_text[0].plain_text;
  const github = {
    text: project?.properties.github.rich_text[0].plain_text,
    href: project?.properties.github.rich_text[0].href,
  };
  const tags = project?.properties.tags.multi_select;
  const site = project?.properties.site.rich_text[0]?.plain_text;
  const imgSrc = project?.cover?.file.url;
  const learned = project?.properties.learned.multi_select;
  const growth = project?.properties.growth.multi_select;
  const parts = project?.properties.part.multi_select;
  const status = project?.properties.status.rich_text[0].plain_text;
  const member = project?.properties.member.rich_text[0].plain_text;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <LoadingSpinner />;
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 pb-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <div className="relative w-full h-0 pb-[60%]">
            <Image
              width={500}
              height={400}
              src={imgSrc}
              alt={title}
              quality={100}
              className="absolute top-0 left-0 w-full h-full"
            />
            <ServiceTag status={status} />
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mt-8 mb-6 text-gray-900">
            {title}
          </h1>
          <p className="leading-relaxed text-base">
            <span className="font-bold mt-2">설명 : </span>
            {description}
          </p>
          <p className="leading-relaxed text-base">
            <span className="font-bold mt-2">팀원 : </span>
            {member}
          </p>
          <div className="flex flex-wrap mt-6">
            {tags?.map((tag: any) => (
              <ProjectTag key={tag.id} name={tag.name} color={tag.color} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h1 className="text-[24px] title-font font-semibold text-gray-800 dark:text-white mb-3">
            담당 기능
          </h1>
          <ul className="flex flex-wrap list-disc mb-10 pl-10">
            {parts?.map((part: any) => (
              <li key={part.id} className="lg:w-1/2 mb-1 w-full">
                <a className="text-gray-600 hover:text-gray-800">{part.name}</a>
              </li>
            ))}
          </ul>
          <h1 className="text-[24px] title-font font-semibold text-gray-800 dark:text-white mb-3">
            구현 기능
          </h1>
          <ul className="flex flex-wrap gap-[10px] list-none mb-10 pl-5">
            {learned?.map((learn: any, idx: number) => (
              <li key={learn.id} className="w-full mb-1 dark:text-white">
                {idx + 1}. {learn.name}
              </li>
            ))}
          </ul>
          <h1 className="text-[24px] title-font font-semibold text-gray-800 dark:text-white mb-3">
            배우고 성장한 점
          </h1>
          <ul className="flex flex-wrap gap-[10px] list-none mb-10 pl-5">
            {growth?.map((learn: any, idx: number) => (
              <li key={learn.id} className="w-full mb-1 dark:text-white">
                {!learn.name.includes("-") && `${idx + 1} .`} {learn.name}
              </li>
            ))}
          </ul>
          <div className="py-2 px-2 mt-[20px] flex flex-col lg:flex-row bg-[#eccc68] dark:bg-[#2f3542] rounded-full">
            <Github url={github.href} text={github.text} />
            <LinkEl url={site} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
