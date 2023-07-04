import style from "@/styles/modules/card.module.css";
import useAlert from "../hooks/useAlert";

export const Card = ({ product }) => {
  const { price, images, category, description, id, title } = product;
  const { alert, setAlert } = useAlert();

  const callAlert = () => {
    setAlert({
      message: `Product ${title} added successfully`,
      show: true,
      icon:"succefull"
    });
    console.log(alert)
  };

  return (
    <div className={style.card}>
      <header className={style.cardImage}>
        <img
          className={style.image}
          src={images && images[0]}
          alt={category && category.name}
        />
      </header>
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{description}</p>
      </div>
      <footer className={style.cardFooter}>
        <span className={style.price}>${price}</span>
        <button onClick={callAlert} className={style.btnBuy}>Buy</button>
      </footer>
    </div>
  );
};
