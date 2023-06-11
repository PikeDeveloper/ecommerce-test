"use client";

import styles from "./filter.module.css";
import { useProducts } from "../../context/ProductsContext";

export default function Filter(product) {
  const {
    setCategory,
    filterProducts,
    category,

    setMinPrice,
    setMaxPrice,
  } = useProducts();

  const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const categoriSelecter = (e) => {
    setCategory(e.target.value);
    filterProducts();
  };

  const priceSelecter = (e) => {
    const price = e.target.name.split("-");
    setMinPrice((pr) => price[0] - pr * 0);
    setMaxPrice((pr) => price[1] - pr * 0);
    filterProducts();
    console.log("cambio de precio " + price[0] + "-" + price[1]);
  };

  return (
    <div className={styles.container}>
      <p>Categoría:</p>
      <select className={styles.select} onClick={categoriSelecter}>
        <option value={categories[0]}>{categories[0]}</option>
        <option value={categories[1]}>{categories[1]}</option>
        <option value={categories[2]}>E{categories[2]}</option>
        <option value={categories[3]}>{categories[3]}</option>
        <option value={categories[4]}>{categories[4]}</option>
      </select>
      <br />
      <br />

      <p>Precio:</p>
      <button onClick={priceSelecter} name="0-10" className={styles.price}>
        0$ - 10$
      </button>
      <button onClick={priceSelecter} name="50-100" className={styles.price}>
        50$ - 100$
      </button>
      <button onClick={priceSelecter} name="100-500" className={styles.price}>
        100$ - 500$
      </button>
      <button onClick={priceSelecter} name="500-1000" className={styles.price}>
        500$ - 1000$
      </button>
      <button
        onClick={priceSelecter}
        name="0-99999999"
        className={styles.price}
      >
        Cualquier precio
      </button>
    </div>
  );
}
