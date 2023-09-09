import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetNotion = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => await axios.get("/api/notion"),
  });
};

export default useGetNotion;
