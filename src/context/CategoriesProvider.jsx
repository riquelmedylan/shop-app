import { useEffect } from "react";
import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";
import { getCategories } from "../helpers/Categories";

const CategoriesContext = createContext();
const CategoriesProvider = ({ children }) => {
  const {data, loading} = useApi(getCategories);
  const [categories, setCategories] = useState({
    data: [],
    loading: false
  });
  

  useEffect(() => {
    setCategories({data, loading})
  }, [data])  

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export {
  CategoriesProvider
}

export default CategoriesContext;
