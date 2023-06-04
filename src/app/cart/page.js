"use client";
import { useProducts } from "../../context/ProductsContext";
import styles from "./products.module.css";
import Link from "next/link";
import cart from "./carritoVacio.png";
import Image from "next/image";

export default function ShoppingCart() {
  const { products, deleteProduct } = useProducts();


  if (products.length === 0) {
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
        <Link href="/products">
          <div className={styles.button}>Ir a la tienda</div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => {
        return (
          <div className={styles.product}>
            <Link
              href={`/products/${product.product.id}`}
              className={styles.link}
            >
              <div className={styles.image_and_descrption}>
                <img
                  width={100}
                  height={100}
                  src={product.product.image}
                  alt={product.product.title}
                  className={styles.image}
                />
                <div className={styles.text}>
                  <h4 className={styles.title}>{product.product.title}</h4>
                  <p className={styles.price}>
                    Precio por unidad: {product.product.price}$
                  </p>
                  <p className={styles.price}>Cantidad: {product.quantity}</p>
                  <p className={styles.price}>
                    Total: {product.product.price * product.quantity}$
                  </p>
                </div>
              </div>
            </Link>
            <div
              className={styles.delete}
              onClick={() => deleteProduct(product.product.id)}
            >
              Eliminar
            </div>
          </div>
        );
      })}
    </div>
  );
}
