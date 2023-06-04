"use client";

import styles from "./AddToCart.module.css";

export default function AddedToCart() {
  const handleClick = () => {
    console.log("Añadir al carrito");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      Añadir al carrito
    </div>
  );
}
