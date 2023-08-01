import { API } from "./api_main";

export const deleteHouse = async (id: string) => {
  const response = await API.delete(`/houses/${id}`);
  return response.data;
};