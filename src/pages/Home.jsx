import "swiper/css";
import style from "@/styles/pages/home.module.css";
import { useApi } from "../hooks/useApi";
import { getProducts } from "../helpers/Products";
import { Spinner } from "../components/Spinner";
import { SwiperContainer } from "../components/SwiperContainer";
import { Categories } from "../components/Categories";

export const Home = () => {
  const { data, loading } = useApi(getProducts);

  return (
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
  );
};
