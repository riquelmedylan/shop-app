import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { AlertProvider } from "../context/AlertProvider";
// import { ProductAlert } from "./alerts/ProductAlert";

const Header = lazy(() => import("./header/Header"));
const ProductAlert = lazy(() => import("../alerts/ProductAlert"));

export default function Layout() {
  return (
    <>
      <Header />
      <AlertProvider>
        <ProductAlert></ProductAlert>
      </AlertProvider>
      <Outlet />
    </>
  );
}
