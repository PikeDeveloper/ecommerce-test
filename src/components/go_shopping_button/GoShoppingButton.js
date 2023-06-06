import styles from "./GoShoppingButton.module.css";

import Link from "next/link";

export default function GoShoppingButton() {
  return (
    <Link href="/products">
      <div className={styles.button}>Ir a la tienda</div>
    </Link>
  );
}
