"use client";
import styles from "./login.module.css";

import LoginGoogle from "./loginGoogle";
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <p className="tittle">Iniciar sesión</p> */}
        <label className={styles.tittle}> Iniciar sesión</label>
        <label className={styles.inputName} htmlFor="email">
          Correo
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          onChange={handleChange}
        />
        <label className={styles.inputName} htmlFor="Password">
          Contraseña
        </label>
        <input
          className={styles.input}
          type="pasword"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <div className="login-and-no-acount">
          <button className={styles.loginButton}>Login</button>
        </div>
      </form>
      <LoginGoogle />
    </div>
  );
}
