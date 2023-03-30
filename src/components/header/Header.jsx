import style from "@/styles/modules/header/header.module.css";
import { useState, lazy } from "react";
const Navbar = lazy(() => import("./Navbar"));
const Sidebar = lazy(() => import("./Sidebar"));

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={style.header}>
        <h2>Shop-App</h2>
        <Navbar setShow={setShow} show={show} />
      </header>
      {show ? <Sidebar showState={setShow} /> : null}
    </>
  );
}
