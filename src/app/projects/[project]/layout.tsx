import React from "react";

import { notionHandler } from "@/axios/notionAPI";

interface props {
  params: {
    project: string;
  };
}
export const generateMetadata = async ({ params }: props) => {
  const lists = await notionHandler.getData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = lists.filter((list: any) => list.id === params.project);
  const { title, description } = data[0].properties;
  return {
    title: title.title[0].plain_text,
    describe: description.rich_text[0].plain_text,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
