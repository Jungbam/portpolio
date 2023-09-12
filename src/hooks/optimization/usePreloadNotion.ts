/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { preLoad } from "@/util/preload";

const usePreloadNotion = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const result = await axios.get("/api/notion");
      return result.data.data.sort((a: any, b: any) => {
        return (
          b.properties.index.rich_text[0].plain_text -
          a.properties.index.rich_text[0].plain_text
        );
      });
    },
    onSuccess: (projects) => {
      projects?.forEach((project: any) => {
        const imgSrc = project?.cover?.file.url;
        preLoad(imgSrc);
      });
    },
  });
};

export default usePreloadNotion;
