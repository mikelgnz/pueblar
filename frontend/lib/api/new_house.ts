import { FormDataInterface } from "@/types/form_data";
import { API } from "./api_main";

export const submitHouse = async (data: FormDataInterface) => {
  const response = await API.post("/houses/add", data);
  return response.data;
};
