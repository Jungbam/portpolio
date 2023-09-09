import { NextResponse } from "next/server";

import { notionHandler } from "@/axios/notionAPI";

export const GET = async () => {
  const data = await notionHandler.getData();
  const result = {
    code: 200,
    message: "success",
    data,
  };
  return NextResponse.json(result);
};
