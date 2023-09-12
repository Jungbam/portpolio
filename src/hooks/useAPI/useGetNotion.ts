import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetNotion = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const result = await axios.get("/api/notion");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return result.data.data.sort((a: any, b: any) => {
        return (
          b.properties.index.rich_text[0].plain_text -
          a.properties.index.rich_text[0].plain_text
        );
      });
    },
  });
};

export default useGetNotion;
