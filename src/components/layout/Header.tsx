import React from "react";
import Link from "next/link";
import Image from "next/image";

import gaebal from "../../../public/gaebal.png";

import ToggleDark from "./elements/ToggleDark";

const Header = async () => {
  return (
    <header className="primary text-gray-600 body-font border-b-[1px] border-[#D3D3D3] dark:border-[#6A6A6A] mb-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src={gaebal}
            width={60}
            height={60}
            alt="개발"
            className="bg-white rounded-full"
          />
          <span className="ml-3 text-xl hover:scale-110 transition-scale">
            정밤
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:scale-110 transition-scale">
            HOME
          </Link>
          <Link
            href="/projects"
            className="mr-5 hover:scale-110 transition-scale"
            prefetch
          >
            포트폴리오
          </Link>
          <a
            href="https://open.kakao.com/o/seHcTyBf"
            className="mr-5 hover:scale-110 transition-scale"
          >
            연락하기
          </a>
        </nav>
        <ToggleDark />
      </div>
    </header>
  );
};

export default Header;
