import axios from "axios";

export const API_URL = " http://localhost:7070";

export const apiInstance = axios.create({
  baseURL: API_URL
});
