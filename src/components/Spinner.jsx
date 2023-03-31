import style from "@/styles/modules/spinner.module.css";

export default function Spinner() {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}></div>
    </div>
  );
}
