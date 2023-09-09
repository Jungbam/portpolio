import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { preLoad } from "@/util/preload";

const usePreloadNotion = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => await axios.get("/api/notion"),
    onSuccess: (data) => {
      const projects = data?.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      projects?.forEach((project: any) => {
        const imgSrc = project?.cover?.file.url;
        preLoad(imgSrc);
      });
    },
  });
};

export default usePreloadNotion;
