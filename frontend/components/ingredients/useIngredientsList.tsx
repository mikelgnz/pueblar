import { backendFetcher } from "@/lib/api/api_main";
import { IngredientInterface } from "@/types/ingredient";
import useSWR from "swr";

export const useIngredientsList = (): IngredientInterface[] => {
  const { data } = useSWR("/ingredients/list", backendFetcher, {
    refreshInterval: 3000,
  });

  return data;
};
