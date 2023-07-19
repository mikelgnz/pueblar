import { backendFetcher } from "@/lib/api/api_main";
import { NewsArticle_Interface } from "@/types/news";
import useSWR from "swr";

export const usenewsList = (): NewsArticle_Interface[] => {
  const { data } = useSWR("/news/list", backendFetcher, {
    refreshInterval: 3000,
  });

  return data;
};
