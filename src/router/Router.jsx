import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../components/Spinner";
import { CategoriesProvider } from "../context/CategoriesProvider";
import { ErrorBoundary } from "../error/ErrorBoundary";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout"));
const Product = lazy(() => import("../pages/product/Product"));
const CategoriesPage = lazy(() => import("../pages/categories/Categories"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner complete={true} />}>
        <Layout />
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
      {
        path: "/categories",
          errorElement: <ErrorBoundary />,
        element: (
          <CategoriesProvider>
            <CategoriesPage />
          </CategoriesProvider>
        ),
      },
    ],
  },
]);
