import React from "react";

import Github from "../icon/github";
import Tstory from "../icon/tstory";

const Footer = () => {
  return (
    <footer className="text-gray-600 primary">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl dark:text-white">F.E. 정호영</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-white">
          © 2022년 4월 3일부터
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-5">
          <Tstory />
          <Github url="https://github.com/Jungbam" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
