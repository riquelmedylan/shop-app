import style from "@/styles/modules/categories/categoriesPage.module.css";
import { lazy, useState } from "react";
import { Card } from "../../components/Card";
import { getCategories } from "../../helpers/Categories";
import { useApi } from "../../hooks/useApi";
import { useEffect } from "react";
const Spinner = lazy(() => import("@/components/Spinner"));
const Filters = lazy(() => import("@/pages/categories/Filters"));

export default function CategoriesPage() {
  const hookApi = useApi(getCategories);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(hookApi.data);
    }, 500);
    return () => setData([]);
  }, [hookApi.data]);

  return (
    <main className={style.main}>
      {data.length === 0 ? (
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
