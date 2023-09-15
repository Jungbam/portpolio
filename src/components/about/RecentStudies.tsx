import React from "react";
import { Canvas } from "@react-three/fiber";

import CircleEx from "@/components/icon/threed/CircleEx";
import CylinderEx from "@/components/icon/threed/CylinderEx";
const RecentStudies = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 lg:py-10 mx-auto flex flex-wrap md:py-0">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <div className="object-cover object-center lg:h-full w-full md:h-[500px] bg-blue-100">
            <Canvas>
              <CircleEx />
              <CylinderEx />
            </Canvas>
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                어떤 것을 공부중이지?
              </h2>
              <p className="leading-relaxed text-base">Three.js</p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                왜 three.js를 공부하고 있지?
              </h2>
              <p className="leading-relaxed text-base">
                3D 그래픽을 다루는 것이 재미있잖아. 2D로 만든 웹을 3Dfh 만든다면
                얼마나 재미있을까?
              </p>
              <p className="leading-relaxed text-base">
                2022년 F.E. 컨퍼런스에서 본 별이 모이고 추첨하는 화면을
                만들어보고 싶어.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Three.js가 어떤 것인지 알려줘
              </h2>
              <p className="leading-relaxed text-base">
                Three.js는 WebGL을 사용하여 3D 그래픽을 렌더링하는 자바스크립트
                라이브러리야.
              </p>
              <p className="leading-relaxed text-base">
                WebGL을 직접 다루는 것은 복잡하고 어려운데 이것을 쉽게 다룰 수
                있게 해줘.
              </p>
              <p className="leading-relaxed text-base">
                간단한 예제를 통해 구현된 원과 실린더인데 우측 상단에 있는
                컨트롤러를 통해서 조작해봐.
              </p>
              <p className="leading-relaxed text-base">
                three.js를 React에서 사용하는 방법에 대해서 정리할텐데 아래 글로
                넘어와.
              </p>
              <a
                href="https://infomationjunk.tistory.com/178"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                블로그 글 보기
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentStudies;
