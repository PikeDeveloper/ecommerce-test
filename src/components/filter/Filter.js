"use client";

import styles from "./filter.module.css";
import { useProducts } from "../../context/ProductsContext";

export default function Filter(product) {
  const { setCategory } = useProducts();

  const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const categoriSelecter = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>Categoría:</p>
      <select className={styles.select} onChange={categoriSelecter}>
        <option value={categories[0]}>{categories[0]}</option>
        <option value={categories[1]}>{categories[1]}</option>
        <option value={categories[2]}>E{categories[2]}</option>
        <option value={categories[3]}>{categories[3]}</option>
        <option value={categories[4]}>{categories[4]}</option>
      </select>
      <br />
    </div>
  );
}
