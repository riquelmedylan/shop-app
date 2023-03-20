import { Card } from "../components/Card";
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
        : data.map((product) => <Card key={product.id} product={...product} />)}
    </>
  );
};
