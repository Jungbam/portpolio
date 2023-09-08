import axios from "axios";

import { dataBaseID, notionKey } from "@/config";
const notionClient = axios.create({
  baseURL: `https://api.notion.com/v1/databases`,
  headers: {
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${notionKey}`,
    Accept: "application/json",
  },
});
const notionAPI = {
  getData: async () => notionClient.post(`/${dataBaseID}/query`),
};
export const notionHandler = {
  getData: async () => {
    const result = await notionAPI.getData();
    return result.data.results;
  },
};
