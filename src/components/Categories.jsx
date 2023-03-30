import style from "@/styles/modules/categories.module.css";
import { lazy } from "react";
import { getCategories } from "../helpers/Categories";
import { useApi } from "../hooks/useApi";
const Spinner = lazy(() => import("./Spinner"));
const SwiperContainer = lazy(() => import("./SwiperContainer"));

export default function Categories() {
  const { data, loading } = useApi(getCategories);
  return (
    <>
      {loading ? (
        <div className={style.spinner}>
          <Spinner />
        </div>
      ) : (
        data.map((dat, i) => (
          <div key={i}>
            <h3 className={style.titleCategory}>{dat.category}</h3>
            <SwiperContainer data={dat.data} space={90} />
          </div>
        ))
      )}
    </>
  );
}
