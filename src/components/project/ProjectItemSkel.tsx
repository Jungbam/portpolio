"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
const ProjectItemSkel = () => {
  return (
    <div
      className={`m-3 bg-[#F5F5F5] rounded-xl border border-[#DCDCDC] shadow-lg dark:shadow-white dark:bg-black dark:border-[#2A2A2A] hover:scale-105 transition-scale duration-150 ease-in-out cursor-pointer relative`}
    >
      <div className="relative w-full h-0 pb-[42.85%]">
        <div className="animate-pulse absolute top-0 left-0 w-full h-full rounded-t-xl bg-gray-200"></div>
      </div>
      <div className="flex flex-col px-5 py-2 gap-3">
        <div className="animate-pulse h-6 bg-gray-200 w-3/4 rounded"></div>
        <div className="animate-pulse h-4 bg-gray-200 w-2/3 rounded mt-2"></div>
        <div className="flex flex-wrap mt-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse h-6 bg-gray-200 w-16 rounded mr-2 mb-3"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItemSkel;
