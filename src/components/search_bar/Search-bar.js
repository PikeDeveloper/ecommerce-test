"use client";
import { useProducts } from "../../context/ProductsContext";
import { useState } from "react";
import styles from "./Search_bar.module.css";

function SearchBar() {
  const { setSearchWord } = useProducts();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchWord(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div >
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Buscar proyecto"
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBar;
