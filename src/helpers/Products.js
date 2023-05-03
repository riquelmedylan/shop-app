import { errorFetch } from "./Categories";

export const getProducts = async () => {
  const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
  const res = await fetch(url);
  errorFetch(res, "La url a la que desea ingresar no existe.");
  const data = await res.json();
  return data;
};

export const getProduct = async (id) => {
  const url = `https://api.escuelajs.co/api/v1/products/${id}`;
  const res = await fetch(url);
  errorFetch(res, "La url a la que desea ingresar no existe.");
  const data = await res.json();
  return data;
};
