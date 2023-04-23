import style from "@/styles/modules/categories/dropdown.module.css";

export const Input = ({name}) => {
  return (
    <div className={style.checkbox}>
      <p>{name}</p>
      <input type="checkbox"/>
    </div>
  );
};
