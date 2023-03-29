import style from "@/styles/modules/categories.module.css";
import { getCategories } from "../helpers/Categories";
import { useApi } from "../hooks/useApi";
import { Spinner } from "./Spinner";
import { SwiperContainer } from "./SwiperContainer";

export const Categories = () => {
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
};
