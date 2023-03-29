import style from "@/styles/modules/header/header.module.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Header = () => {
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
};
