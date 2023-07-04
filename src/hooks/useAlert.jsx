import { useContext } from "react";
import AlertContext from "@/context/AlertProvider.jsx";

const useAlert = () => {
  return useContext(AlertContext);
};

export default useAlert;
