import style from "@/styles/modules/spinner.module.css";

export default function Spinner({complete}) {
  return (
    <div className={`${style.spinnerContainer} ${complete && style.screenComplete}`}>
      <div className={style.spinner}></div>
    </div>
  );
}
