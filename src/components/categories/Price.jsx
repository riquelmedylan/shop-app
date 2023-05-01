import style from "@/styles/modules/categories/price.module.css";
import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { usePriceUrl } from "./effects/usePriceUrl";

export const Price = () => {
  const params = useLocation();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getPriceUrl();
  }, []);

  usePriceUrl({price: price})

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const getPriceUrl = () => {
    const param = new URLSearchParams(location.search);
    params.search.includes("price_min") && setPrice(param.get("price_min"));
  };

  return (
    <div className={style.containerPrice}>
      <div className={style.price}>
        <p>Price:</p>
        <p>${price}</p>
      </div>
      <input
        onChange={changePrice}
        type="range"
        min="0"
        max="1000"
        value={price}
      />
    </div>
  );
};
