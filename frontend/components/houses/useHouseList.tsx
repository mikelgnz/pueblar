import { backendFetcher } from "@/lib/api/api_main";
import { PuebloHouse_Interface } from "@/types/house";
import useSWR from "swr";

export const useHouseList = (): PuebloHouse_Interface[] => {
  const { data } = useSWR("/houses/list", backendFetcher, {
    refreshInterval: 3000,
  });

  return data;
};
