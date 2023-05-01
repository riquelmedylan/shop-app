import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function usePriceUrl({ price }) {
  const params = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let time;
    time = setTimeout(() => {
      if (price > 0) {
        if (params.search.includes("price")) {
          const newUrl = params.search.replace(
            /price_min=\d+/,
            `price_min=${price}`
          );
          navigate(newUrl);
          return;
        }
        if (params.search) {
          navigate(
            `${params.search}&price_min=${price}&price_max=1000`
          );
          return;
        }
        navigate(`?price_min=${price}&price_max=1000`);
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [price]);
}
