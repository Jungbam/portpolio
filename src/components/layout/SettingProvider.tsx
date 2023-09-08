import React from "react";
import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface props {
  children: ReactNode;
}
const SettingProvider: React.FC<props> = ({ children }) => {
  return (
    <div className="primary">
      <Header />
      <section className="flex min-h-[700px] flex-col items-center justify-center text-gray-600 body-font">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default SettingProvider;
