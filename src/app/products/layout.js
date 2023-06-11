"use client"

import Filter from "@/components/filter/Filter";
import ShoppingCart from "@/components/shopping_cart/ShoppingCart";
import styles from "./products.module.css";
import { useContext, useEffect } from "react";
import { ProductsContext } from "@/context/ProductsContext";


export default function PostLayout({ children }) {

  const { getProducts } = useContext(ProductsContext)

  useEffect(() => {
    getProducts()
  })

  return (  
    <div className={styles.layout} >
      <Filter />
      {children}
      <ShoppingCart />
    </div>
  );
}
