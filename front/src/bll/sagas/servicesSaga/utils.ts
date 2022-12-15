import { getServiceList } from "shared/api/index";

export const getServises = async () => {
  return await (
    await getServiceList()
  ).data;
};
