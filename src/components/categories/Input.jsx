import style from "@/styles/modules/categories/dropdown.module.css";
import { useState } from "react";
import { useCategories } from "./effects/useCategoriesUrl";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const categories = {
  Clothes: 1,
  Electronics: 2,
  Furniture: 3,
  Shoes: 4,
  Others: 5,
};

export const Input = ({ name }) => {
  const [check, setCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const params = useLocation();

  useCategories({ check, categoryId: categories[name] });

  useEffect(() => {
    console.log(name);
    if (params.search.includes(`categoryId=${categories[name]}`)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [params]);

  const changeCheck = () => {
    setCheck(!check);
  };

  return (
    <div className={style.checkbox}>
      <p>{name}</p>
      <input
        onChange={changeCheck}
        name="options"
        checked={isChecked}
        type="radio"
      />
    </div>
  );
};
