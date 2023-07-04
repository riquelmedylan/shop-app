import style from "@/styles/modules/header/navbar.module.css";
import { IconSearch, IconMenu } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { lazy, useState } from "react";
const Sidebar = lazy(() => import("./Sidebar"));


export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleShowSidebar = () => {
    setShow(!show);
  };
  return (
    <nav className={style.navbar}>
      <div className={style.search}>
        <input placeholder="Search" />
        <IconSearch color="white" size={16} />
      </div>
      <div className={style.listLinks}>
        <Link to="/categories">Categories</Link>
        <Link>Products</Link>
        <Link>Log In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      <IconMenu
        className={style.sidebar}
        onClick={handleShowSidebar}
        color="white"
        size={32}
      />
      <Sidebar show={show} setShow={setShow} />
    </nav>
  );
}
