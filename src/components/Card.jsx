import style from "@/styles/modules/card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  const { price, images, category, description, id,title } = product;
  return (
    <div className={style.card}>
      <header className={style.cardImage}>
        <img className={style.image} src={images[0]} alt={category.name} />
      </header>
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardText}>{description}</p>
      </div>
      <footer className={style.cardFooter}>
        <span className={style.price}>${price}</span>
        <Link to={`product/${id}`} className={style.btnBuy}>
          Buy
        </Link>
      </footer>
    </div>
  );
};
