"use client";

import styles from "./AddToCart.module.css";
import { useProducts } from "../../context/ProductsContext";

export default function AddedToCart(product) {
  const { products, addProduct } = useProducts();
  let quantity = 1;

  const handleClick = () => {
    product.quantity = quantity;
    addProduct(product);
    console.log(products);
  };

  const handleInput = (e) => {
    quantity = e.target.value;
    console.log("cantidad:");
    console.log(quantity);
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
