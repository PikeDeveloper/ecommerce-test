"use client";

import styles from "./AddToCart.module.css";
import { useProducts } from "../../context/ProductsContext";
import { useState } from "react";

export default function AddToCart({ product }) {
  const { addProductToCart } = useProducts();

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    let productToCart = {
      product: product,
      quantity: quantity
    }

    addProductToCart(productToCart);
  };

  const handleInput = (e) => {
    setQuantity(e.target.value)
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <p>Cantidad:</p>
        <input
          type="number"
          className={styles.number}
          placeholder="1"
          onChange={handleInput}
        />
      </div>

      <div className={styles.button} onClick={handleClick}>
        Añadir al carrito
      </div>
    </div>
  );
}
