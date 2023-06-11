"use client";
import { useProducts } from "../../context/ProductsContext";
import styles from "./products.module.css";
import Link from "next/link";
import DescriptioAndPrice from "./DescriptioAndPrice.js";
import CustomImage from "./CustomImage";
import Total from "./Total";
import EmptyCart from "./EmptyCart";

export default function ShoppingCart() {
  const { productsInCart, deleteProductInCart } = useProducts();

  if (productsInCart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <h1 className={styles.pageName}>Carrito de compras</h1>

      <div className={styles.mainContainer}>
        <div className={styles.ListOfPtoducts}>
          {productsInCart.map((product, index) => {
            return (
              <div className={styles.product} key={index}>
                <Link
                  href={`/products/${product.product.id}`}
                  className={styles.link}
                >
                  <CustomImage image={product.product.image} />
                  <DescriptioAndPrice product={product} />
                </Link>
                <div
                  className={styles.delete}
                  onClick={() => deleteProductInCart(product.product.id)}
                >
                  Eliminar
                </div>
              </div>
            );
          })}
        </div>
        <Total products={productsInCart} />
      </div>
    </div>
  );
}
