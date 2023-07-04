import style from "@/styles/pages/auth.module.css";
import { Link } from "react-router-dom";
import {
  query,
  orderBy,
  limit,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import App from "@/firebase/config";

export default function Register() {
  const db = getFirestore(App);

  const handleAddUser = async (e) => {
    e.preventDefault();

    console.log(db);

    const p = query(db, orderBy("email"));

    // await addDoc(collection(db, "users"), {
    //   email: "e@gmail.com",
    //   password: "1231231",
    //   username: "ea"
    // });
  };

  return (
    <section className={style.body}>
      <Link className={style.link} to={"/"}>
        Shop-App
      </Link>
      <div className={style.container}>
        <h1 className={style.textHeader}>Registro</h1>
        <form className={style.form}>
          <label htmlFor="username">Username:</label>
          <input
            className={style.input}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="email">Email:</label>
          <input
            className={style.input}
            type="email"
            id="email"
            name="email"
            placeholder="Mail"
          />
          <label htmlFor="password">Password:</label>
          <input
            className={style.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="password2">Repeat password:</label>
          <input
            className={style.input}
            type="password"
            id="password2"
            name="password2"
            placeholder="Repeat password"
          />
          <button className={style.button} onClick={handleAddUser}>
            Registrarse
          </button>
        </form>
        <Link className={style.redirect} to="/login">
          Login
        </Link>
      </div>
    </section>
  );
}
