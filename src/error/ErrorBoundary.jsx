import { Link } from "react-router-dom";
import { errorMessageCatch } from "./errorMessage";
import style from "@/error/errorBoundary.module.css";

export const ErrorBoundary = () => {
  const err = errorMessageCatch.errMessage;
  return (
    <div className={style.errorContainer}>
      <Link to="/" className={style.errorLink}>Shop App</Link>
      {err ? (
        <p className={style.errorText}>{err}</p>
      ) : (
        <p className={style.errorText}>¡¡Error!! Esta página no existe</p>
      )}
    </div>
  );
};
