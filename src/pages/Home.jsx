import React, { useEffect } from "react";
import { getProducts } from "../helpers/Products";
import { useApi } from "../hooks/useApi";

export const Home = () => {
  const { data, loading } = useApi(getProducts);

  console.log(data);
  return (
    <>
      <div>Home</div>
      {loading
        ? "cargando"
        : data.map((product) => <p key={product.id}>{product.title}</p>)}
    </>
  );
};
