import styles from "./shoppingCart.module.css";
import Image from "next/image";
import cart from "./shopping-cart.png";
import Link from "next/link";

export default function ShoppingCart(  ) {
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
        <h3 className={styles.number}>0</h3>
      </Link>
    </div>
  );
}
