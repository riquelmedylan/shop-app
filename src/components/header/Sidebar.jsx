import style from "@/styles/modules/header/sidebar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

export default function Sidebar({ showState }) {
  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 1);

  const unmountSidebar = () => {
    setShow(false);
    showState(false);
  };

  return (
    <>
      <div
        onClick={unmountSidebar}
        className={`${style.opacity} ${show ? style.opacityBg : ""}`}
      ></div>
      <IconX
        className={style.close}
        onClick={unmountSidebar}
        color="white"
        size={32}
      />
      <aside className={`${style.sidebar} ${show ? style.show : ""}`}>
        <Link>Categories</Link>
        <Link>Products</Link>
        <Link>Log In</Link>
        <Link>Sign In</Link>
      </aside>
    </>
  );
}
