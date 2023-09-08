import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SettingProvider from "@/components/layout/SettingProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "F.E. 정밤",
  description: "도전, 열정 makes Perfect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SettingProvider>{children}</SettingProvider>
      </body>
    </html>
  );
}
