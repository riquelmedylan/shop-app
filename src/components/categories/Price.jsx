import style from "@/styles/modules/categories/price.module.css";
import { useState } from "react";
export const Price = () => {
  const [price, setPrice] = useState(0);

    const changePrice = (e) =>{
        setPrice(e.target.value)
    }
  
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
