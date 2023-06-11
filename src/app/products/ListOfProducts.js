"use client";
import AddToCart from "@/components/add_to_cart/AddToCart";
import StarRating from "@/components/stars_rating/stars";
import { useProducts } from "@/context/ProductsContext";
import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./products.module.css";
import SquareImage from "@/components/square_image/SquareImage";
import { useEffect } from "react";

export function ListOfProducts() {
  const { filteredProducts } = useProducts();

  return (
    /*
    si filteredProducts es undefined, entonces muestra un mensaje de cargando
    si filteredProducts es un array vacio, entonces muestra un mensaje de que no hay productos
    si filteredProducts tiene productos, entonces muestra la lista de productos
    */

    <div className={styles.mainContainer}>
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.product}>
              <Link href={`/products/${product.id}`}>
                <div className={styles.image_and_descrption}>
                  <SquareImage url={product.image} width={100} />
                  <div className={styles.text}>
                    <h4 className={styles.title}>{product.title}</h4>
                    <StarRating
                      stars={product.rating.rate}
                      count={product.rating.count}
                    />
                    <p>{product.price}$</p>
                  </div>
                </div>
              </Link>
              <AddToCart product={product} />
              <LikeButton product={product} />
            </div>
          ))
        ) : (
          <p>No hay productos</p>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
