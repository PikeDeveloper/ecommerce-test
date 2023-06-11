"use client";
import styles from "./shoppingCart.module.css";
import Image from "next/image";
import cart from "./shopping-cart.png";
import Link from "next/link";

import { useProducts } from "../../context/ProductsContext";

export default function ShoppingCart() {

  const products = useProducts();
  return (
    <div className={styles.item_cart_counter}>
      <Link href="/cart">
        <Image
          src={cart}
          alt="cart"
          width={50}
          height={50}
          className={styles.image}
        />
        {/* <h3 className={styles.number}>{ 
          products.products.length > 0 ? products.products.length : 0
         }</h3> */}
      </Link>
    </div>
  );
}
