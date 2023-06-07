import GoShoppingButton from "@/components/go_shopping_button/GoShoppingButton";
import styles from "./products.module.css";

export default function Total({ products }) {
  let total = 0;
  return (
    <div className={styles.total}>
      
      {products.map((product) => {
        total += product.product.price * product.quantity;
        return <p>{product.product.price * product.quantity} USD</p>;
      })}

      <h4>Total {total} USD </h4>
      <GoShoppingButton />
    </div>
  );
}
