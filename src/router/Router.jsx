import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../components/Spinner";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Product = lazy(() => import("../components/product/Product"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />,
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
