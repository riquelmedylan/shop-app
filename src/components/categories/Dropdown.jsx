import style from "@/styles/modules/categories/dropdown.module.css";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Input } from "./Input";

export default function Dropdown() {
  const [show, setShow] = useState(false);

  const handleShowDropdown = () => {
    setShow(!show);
  };

  return (
    <div className={`${style.dropdown} ${show && style.show}`}>
      <div className={style.header} onClick={handleShowDropdown}>
        <p>Categories</p>
        <IconChevronDown color="white" />
      </div>

      {show ? (
        <div className={`${style.pick}`}>
          <Input name={"Clothes"} />
          <Input name={"Electronics"} />
          <Input name={"Furniture"} />
          <Input name={"Shoes"} />
          <Input name={"Others"} />
        </div>
      ) : null}
    </div>
  );
}
