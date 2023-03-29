import style from "@/styles/modules/header/navbar.module.css";
import { IconSearch, IconMenu } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Navbar = ({setShow, show}) => {
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
            <Link>Categories</Link>
            <Link>Products</Link>
            <Link>Log In</Link>
            <Link>Sign In</Link>
          </div>
          <IconMenu
            className={style.sidebar}
            onClick={handleShowSidebar}
            color="white"
            size={32}
          />
        </nav>
  )
}
