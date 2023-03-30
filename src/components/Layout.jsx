import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import( "./header/Header"));

export default function Layout(){
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
