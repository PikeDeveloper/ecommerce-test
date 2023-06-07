import styles from "./products.module.css";
import cart from "./carritoVacio.png";
import GoShoppingButton from "@/components/go_shopping_button/GoShoppingButton";
import Image from "next/image";
export default function EmptyCart({ products }) {
  return (
    <div className={styles.empty}>
      <h2>No hay productos en el carrito</h2>
      <Image
        src={cart}
        alt="cart"
        width={300}
        height={300}
        className={styles.image}
      />
      <GoShoppingButton />
    </div>
  );
}
