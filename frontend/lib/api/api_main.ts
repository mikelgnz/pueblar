import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const backendFetcher = async (key: string) => {
  const response = await API.get(key);
  return response.data;
};