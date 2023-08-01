import { API } from "./api_main";

export const authenticatedFetcher = (token: string) => async (key: string) => {
  const response = await API(token).get(key);
  return response.data;
};