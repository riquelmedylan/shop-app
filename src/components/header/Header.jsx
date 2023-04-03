import style from "@/styles/modules/header/header.module.css";
import { lazy } from "react";
import { Link } from "react-router-dom";
const Navbar = lazy(() => import("./Navbar"));

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <Link to="/" className={style.title}>
          <h2>Shop-App</h2>
        </Link>
        <Navbar />
      </header>
    </>
  );
}
