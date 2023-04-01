import { useEffect, useRef, useState } from "react";

export const useApi = (cb,param) => {
  const isMounted = useRef(true);
  const [data, setData] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    cb(param && param).then((data) => {
      setData({
        data: data,
        loading: false,
      });
    });
  }, []);

  return data;
};
