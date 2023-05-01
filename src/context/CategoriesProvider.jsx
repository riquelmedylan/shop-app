import { useEffect } from "react";
import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";
import { getCategories, getFilter } from "../helpers/Categories";
import { useLocation } from "react-router-dom";

const CategoriesContext = createContext();
const CategoriesProvider = ({ children }) => {
  const params = useLocation();

  const { data, loading } = useApi(getCategories, true);
  const [categories, setCategories] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    setCategories({ data, loading });
  }, [data]);

  useEffect(() => {
    const time = setTimeout(() => {
      setCategories({ ...categories, loading: false });
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  const changeCategory = async () => {
      setCategories({
        data: await getFilter(params.search.slice(1)),
        loading: false,
      });
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, setCategories, changeCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider };

export default CategoriesContext;
