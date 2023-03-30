import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Product = lazy(() => import("../components/product/Product")) ;

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Product />,
        path: "/product/:id"
      },
    ],
  },
]);
