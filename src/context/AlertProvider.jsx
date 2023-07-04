import { createContext, useState } from "react";

const AlertContext = createContext();
const initialValue = {
  message: "",
  icon: "",
  show: false,
};

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialValue);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };

export default AlertContext;
