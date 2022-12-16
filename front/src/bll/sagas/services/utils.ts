import { getServiceList } from "shared/api/index";

export const getServises = async () => {
  return (await getServiceList()).data;
};
