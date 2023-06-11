
import { ListOfProducts } from "./ListOfProducts";
import styles from "./products.module.css";

export default function PostsPage() {
  return (
    <section className={styles.mainContainer}>
      <ListOfProducts />
    </section>
  );
}
