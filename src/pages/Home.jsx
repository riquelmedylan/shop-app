import "swiper/css";
import { Suspense, lazy } from "react";
import style from "@/styles/pages/home.module.css";
import { useApi } from "../hooks/useApi";
import { getProducts } from "../helpers/Products";
const Spinner = lazy(() => import("../components/Spinner"));
const SwiperContainer = lazy(() => import("../components/SwiperContainer"));
const Categories = lazy(() => import("../components/Categories"));

export default function Home() {
  const { data, loading } = useApi(getProducts);

  return (
    <Suspense fallback={<Spinner />}>
      <main className={style.main}>
        <h2>Products</h2>
        <section className={style.carrousel}>
          {loading ? <Spinner /> : <SwiperContainer data={data} space={50} />}
        </section>
        <h2>Categories</h2>
        <section className={style.categories}>
          <Categories />
        </section>
      </main>
    </Suspense>
  );
}
