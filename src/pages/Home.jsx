import "swiper/css";
import style from "@/styles/pages/home.module.css"
import { useApi } from "../hooks/useApi";
import { getProducts } from "../helpers/Products";
import { Spinner } from "../components/Spinner";
import { SwiperContainer } from "../components/SwiperContainer";

export const Home = () => {
  const { data, loading } = useApi(getProducts);

  return (
    <main>
      <section className={style.carrousel}>
        {loading ? (
          <Spinner />
        ) : (
          <SwiperContainer data={data}/>
        )}
      </section>
    </main>
  );
};
