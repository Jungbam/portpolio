"use client";
import React from "react";
import { useRouter } from "next/navigation";

import usePreloadNotion from "@/hooks/optimization/usePreloadNotion";

import developer from "../../../public/develper.json";
import LottiePlayer from "../lottie/LottiePlayer";

const Introduce = () => {
  usePreloadNotion();
  const router = useRouter();

  const scrollDown = () => {
    document.documentElement.scrollTop = 1000;
  };

  return (
    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          열정가득 ENFJ
          <br className="hidden lg:inline-block" />
          F.E. 정호영입니다.
        </h1>
        <p className="mb-8 leading-relaxed flex flex-col">
          <span>
            1. 본인의 도전을 위해 혼자 앞서가기보다 함께 가는 것을 선택하는
            개발자입니다.
          </span>
          <span className="pl-4">- 사내 스터디 그룹 형성 및 스터디 진행</span>
          <span className="pl-4">
            - 부트캠프 과정간 주말 스터디 모집 및 진행
          </span>
          <span className="pl-4">
            - 부트캠프 협업부분, 상생부분 개인 2관왕 수상(같은 반 프론트엔드
            동기들의 이탈율 0명에 기여)
          </span>
          <span>
            2. 자기개발을 꾸준히 하며 끊임없는 노력으로 인정받는 사람입니다.
          </span>
          <span className="pl-4">
            - 유데미 강의 6개, 인프런 강의 1개, 드림코딩 2개 과정 수료
          </span>
          <span className="pl-4">- 블로그 게시글 수 158개 작성</span>
          <span
            className="font-bold text-[18px] mt-4 cursor-pointer"
            onClick={scrollDown}
          >
            🤩 블로그와 깃헙은 footer를 확인해주세요! (클릭하면 아래로
            이동됩니다.)
          </span>
        </p>
        <div className="flex justify-center">
          <button className="btn-move" onClick={() => router.push("/projects")}>
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <LottiePlayer animationData={developer} />
      </div>
    </div>
  );
};

export default Introduce;
