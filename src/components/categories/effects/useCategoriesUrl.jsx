import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useCategories({ check,categoryId }) {
  const params = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let time;
    time = setTimeout(() => {
      if (check) {
        if (params.search.includes("categoryId=")) {
          const newUrl = params.search.replace(
            /categoryId=\d+/,
            `categoryId=${categoryId}`
          );
          navigate(newUrl);
          return;
        }
        navigate(`?categoryId=${categoryId}`);
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [check]);
}
