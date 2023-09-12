"use client";
import React from "react";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import Footer from "./Footer";

interface props {
  children: ReactNode;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    },
  },
});
const SettingProvider: React.FC<props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="primary">
        <Header />
        <section className="flex min-h-[850px] flex-col items-center justify-center text-gray-600 body-font">
          {children}
        </section>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default SettingProvider;
