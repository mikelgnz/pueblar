import { API } from "./api_main";

export const fetcher = async (key: string) => {
const response = await API.get(key);
return response.data;
 };