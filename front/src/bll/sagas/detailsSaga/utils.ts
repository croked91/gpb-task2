import { getServiceById } from "shared/api/index";

export const getServise = async (id: string) => {
  return await (
    await getServiceById(id)
  ).data;
};
