import style from "@/styles/modules/categories/price.module.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const Price = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const getPriceUrl = () => {
    const param = new URLSearchParams(location.search);
    params.search && setPrice(param.get("price"));
  };

  useEffect(() => {
    getPriceUrl();
    let time;
    if (price > 0) {
      time = setTimeout(() => {
        if (params.search.includes("price")) {
          const newUrl = params.search.replace(/price=\d+/, "price=" + price);
          navigate(newUrl);
          return;
        }
        if (params.search) {
          navigate(`${params.pathname}${params.search}?price=${price}&1000`);
          return;
        }
        navigate(`${params.pathname}?price=${price}&1000`);
      }, 1000);
    }

    return () => {
      clearTimeout(time);
    };
  }, [price]);

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={style.containerPrice}>
      <div className={style.price}>
        <p>Price:</p>
        <p>${price}</p>
      </div>
      <input
        onInput={changePrice}
        type="range"
        min="0"
        max="1000"
        value={price}
      />
    </div>
  );
};
