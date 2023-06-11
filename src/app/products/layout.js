import Filter from "@/components/filter/Filter";
import ShoppingCart from "@/components/shopping_cart/ShoppingCart";
import styles from "./products.module.css";

export default function PostLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Filter />
      {children}

    </div>
  );
}
