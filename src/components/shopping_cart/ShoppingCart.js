"use client";
import styles from "./shoppingCart.module.css";
import Image from "next/image";
import bolsaDeCompra from "../../../public/images/bolsa_de_compras.png";
import PlaceHolderProfile from "../../../public/images/place_holder_profile.png";

import Link from "next/link";
import { useProducts } from "../../context/ProductsContext";

export default function ShoppingCart() {
  const ratio = 52.14 / 65.18;
  const width = 40.14;
  const { productsInCart, globalUser } = useProducts();

  return (
    <div className={styles.mainContainer}>

      <Link href="/login">

      <Image
        src={
          globalUser.profilePictureURL !== ""
            ? globalUser.profilePictureURL
            : PlaceHolderProfile
        }
        className={styles.makeImageCircular}
        height={60}
        width={60}
        alt="IMG2"
      />
      </Link>

      <div className={styles.item_cart_counter}>
        <Link href="/cart">
          <Image
            src={bolsaDeCompra}
            alt="cart"
            width={width}
            height={width / ratio}
            className={styles.image}
          />
          <h3 className={styles.number}>
            {productsInCart.length > 0 ? productsInCart.length : 0}
          </h3>
        </Link>
      </div>
    </div>
  );
}
