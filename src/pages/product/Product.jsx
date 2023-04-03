import style from "@/styles/modules/product/product.module.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../../helpers/Products";
import { useApi } from "../../hooks/useApi";
import { ImagesCarrousel } from "./ImagesCarrousel";
import Spinner from "../../components/Spinner";

export default function Product() {
  const { id } = useParams();
  const { data, loading } = useApi(getProduct, id);
  const { title, images, description, price } = data;

  return loading ? (
    <Spinner />
  ) : (
    <main className={style.main}>
      <h2>{title}</h2>
      <ImagesCarrousel images={images} title={title} />
      <p className={style.description}>{description}</p>
      <span className={style.price}>Price: ${price}</span>
      <button className={style.btnBuy}>Add to cart</button>
    </main>
  );
}
