"use client";

import styles from "./filter.module.css";
import { useProducts } from "../../context/ProductsContext";

export default function Filter(product) {
  const { setCategory, filterProducts, setMinPrice, setMaxPrice } =
    useProducts();

  const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const prices = [
    "0-10",
    "10-50",
    "50-100",
    "100-500",
    "500-1000",
    "1000-1000000",
  ];

  const categoriSelecter = (e) => {
    setCategory(e.target.value);
    filterProducts();
  };

  const priceSelecter = (e) => {
    const price = e.target.name.split("-");
    setMinPrice((pr) => price[0]);
    setMaxPrice((pr) => price[1]);
    filterProducts();
  };

  const setAnyPrice = () => {
    setMinPrice(0);
    setMaxPrice(1000000);
    filterProducts();
  };

  return (
    <div className={styles.container}>
      <p>Categoría:</p>
      <select className={styles.select} onClick={categoriSelecter}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <br />
      <br />

      <p>Precio:</p>

      <button onClick={setAnyPrice} className={styles.price}>
        Cualquier precio
      </button>

      {prices.map((price, index) => (
        <button key={index} onClick={priceSelecter} name={price} className={styles.price}>
          {price}
        </button>
      ))}
    </div>
  );
}
