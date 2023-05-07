import style from "@/styles/modules/cart/cart.module.css";

export const TableRow = () => {
  return (
    <tr>
      <td className={style.product}>
        <img src="https://via.placeholder.com/50x50" alt="Producto 1" />
        <p>Producto 1</p>
      </td>
      <td className={style.price}>$20.00</td>
      <td>
        <input type="number" min="1" defaultValue="1" />
      </td>
      <td>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};
