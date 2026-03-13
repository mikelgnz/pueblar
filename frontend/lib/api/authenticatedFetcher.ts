import { API } from "./api_main";

export const authenticatedFetcher = (_token: string) => async (key: string) => {
  const response = await API.get(key);
  return response.data;
};