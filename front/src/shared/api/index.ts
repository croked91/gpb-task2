import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { IService } from "./interface";

export const BASE_URL = "/api/services";

export const getServiceList = (): AxiosPromise<IService[]> => {
  return apiInstance.get(BASE_URL);
};

export type GetServiceDetails = {
  serviceId: string;
};

export const getServiceById = (serviceId: string): AxiosPromise<IService> => {
  return apiInstance.get(`${BASE_URL}/${serviceId}`);
};
