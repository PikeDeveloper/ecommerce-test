import styles from "./products.module.css";

export default function DescriptioAndPrice({ product }) {
  const total = product.product.price * product.quantity;
  return (
    <div className={styles.descrption}>
      <div className={styles.text}>
        <h4 className={styles.title}>{product.product.title}</h4>
        <p className={styles.price}>Cantidad: {product.quantity}</p>
        <p className={styles.price}>USD {product.product.price}$</p>
        <p className={styles.price}>Total: {total.toFixed(2)} $</p>
      </div>
    </div>
  );
}
