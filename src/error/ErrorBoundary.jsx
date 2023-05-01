import { errorMessageCatch } from "./errorMessage";
import style from "@/error/errorBoundary.css";


export const ErrorBoundary = () => {
  const err = errorMessageCatch.errMessage;
  return (
    <div className={style.errorContainer}>
      <p>{err}</p>
    </div>
  );
};

// height: 100vh;
// width: 100vw;
// background: #d6d0c759;
// font-size: 2.5em;
// font-weight: 700;

// import style from "@/components/error/ErrorBoundary.module.css";
// import { errorMessageCatch } from "./errorMessage";

// export const ErrorBoundary = () => {
//   const err = errorMessageCatch.errMessage;
//   return (
//     <div className={style.errorContainer}>
//       <p>{err}</p>
//     </div>
//   );
// };
