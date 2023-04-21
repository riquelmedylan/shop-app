import style from "@/styles/modules/header/sidebar.module.css";
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

export default function Sidebar({ show, setShow }) {
  const unmountSidebar = () => {
    setShow(false);
  };

  return (
    <>
      <div
        onClick={unmountSidebar}
        className={`${style.opacity} ${show && style.show}`}
      ></div>
      <aside className={`${style.sidebar}  ${show && style.show}`}>
        <IconX
          className={`${style.close} `}
          onClick={unmountSidebar}
          color="white"
          size={32}
        />
        <Link onClick={unmountSidebar} to="/categories">
          Categories
        </Link>
        <Link>Products</Link>
        <Link>Log In</Link>
        <Link>Sign In</Link>
      </aside>
    </>
  );
}
