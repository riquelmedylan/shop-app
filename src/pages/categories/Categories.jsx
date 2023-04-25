import style from "@/styles/modules/categories/categoriesPage.module.css";
import { lazy, useState } from "react";
import { Card } from "../../components/Card";
import { getCategories } from "../../helpers/Categories";
import { useApi } from "../../hooks/useApi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

const Spinner = lazy(() => import("@/components/Spinner"));
const Filters = lazy(() => import("@/components/categories/Filters"));

export default function CategoriesPage() {
  const categoriesData  = useCategories();
  const {data,loading} = categoriesData.categories;

  return (
    <main className={style.main}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Filters />
          <div className={style.containerCards}>
            {data.map((categories) =>
              categories?.data.map((product, id) => (
                <Card key={id} product={product} />
              ))
            )}
          </div>
        </>
      )}
    </main>
  );
}
