import style from "@/styles/modules/cart/cart.module.css";
import { TableRow } from "./TableRow";

export default function Cart() {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.header}>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />

        </tbody>
      </table>

      <div className={style.total}>
        <p>Total: $30.00</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
