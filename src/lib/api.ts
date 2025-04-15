import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.emsifa.com/api-wilayah-indonesia/api/",
});
