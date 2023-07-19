import { backendFetcher } from "@/lib/api/api_main";
import { RecipesInterface } from "@/types/recipe";
import useSWR from "swr";

export const useRecipesList = (): RecipesInterface[] => {
  const { data } = useSWR("/recipes/list", backendFetcher, {
    refreshInterval: 3000,
  });

  return data;
};
