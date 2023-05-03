import style from "@/styles/modules/categories/filtersNavbar.module.css";
import { Input } from "./Input";
import { categories } from "../../helpers/variables";
import { Price } from "./Price";

export default function FiltersNavbar({show}) {
  return (
    <div className={`${style.container} ${show ? style.wFull : ""}`}>
      <Price />
      <div className={style.containerCategories}>
        {categories.map((category, index) => (
          <Input key={index} name={category} />
        ))}
      </div>
    </div>
  );
}
