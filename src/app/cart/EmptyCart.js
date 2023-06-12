import styles from "./products.module.css";
import cart from "./carritoVacio.png";
import GoShoppingButton from "@/components/go_shopping_button/GoShoppingButton";
import SquareImage from "@/components/square_image/SquareImage";

export default function EmptyCart({ products }) {
  return (
    <div className={styles.empty}>
      <h2>No hay productos en el carrito</h2>
      <SquareImage url={cart} width={400} />
      <GoShoppingButton />
    </div>
  );
}
