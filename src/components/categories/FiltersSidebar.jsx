import style from "@/styles/modules/categories/filtersSidebar.module.css";
import { IconX } from "@tabler/icons-react";
import { lazy } from "react";
import { Price } from "./Price";
const Dropdown = lazy(() => import("./Dropdown"));

export default function FilterSidebar({ show, setShow }) {
  const unmountSidebar = () => {
    setShow(false);
  };

  return (
    <>
      <div
        onClick={unmountSidebar}
        className={`${style.opacity} ${show && style.show} `}
      ></div>
      <aside className={`${style.sidebar} ${show && style.show}`}>
        <IconX
          className={`${style.close} `}
          onClick={unmountSidebar}
          color="white"
          size={32}
        />
        <h3 className={`${style.title}`}>Filters</h3>
        <Price />
        <Dropdown />
      </aside>
    </>
  );
}
