import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../components/Spinner";
import { CategoriesProvider } from "../context/CategoriesProvider";
import { ErrorBoundary } from "../error/ErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Product = lazy(() => import("../pages/product/Product"));
const CategoriesPage = lazy(() => import("../pages/categories/Categories"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Register = lazy(() => import("../pages/auth/Register"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner complete={true} />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/categories",
        element: (
          <CategoriesProvider>
            <CategoriesPage />
          </CategoriesProvider>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
