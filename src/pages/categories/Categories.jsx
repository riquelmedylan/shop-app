import style from "@/styles/modules/categories/categoriesPage.module.css";
import useCategories from "../../hooks/useCategories";
import { lazy, useEffect } from "react";
import { Card } from "../../components/Card";
import { useLocation } from "react-router-dom";

const Spinner = lazy(() => import("@/components/Spinner"));
const Filters = lazy(() => import("@/components/categories/Filters"));

export default function CategoriesPage() {
  const { changeCategory, categories } = useCategories();
  const params = useLocation();
  const { data, loading } = categories;

  useEffect(() => {
    if (params.search.includes("price")) {
      changeCategory();
      return;
    }
    if (params.search) {
      changeCategory();
      return;
    }
  }, [params]);

  return (
    <main className={style.main}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Filters />
          <div className={style.containerCards}>
            {data.map((product, id) => (
              <Card key={id} product={product} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
