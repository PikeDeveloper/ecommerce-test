"use client";

import { Montserrat } from "@next/font/google";
import Styles from "./home.module.css";
import CustomImage from "@/components/custom_image/CustomImage";
import { useProducts } from "@/context/ProductsContext";
import Link from "next/link";

const font = Montserrat({ weight: ["400"], subsets: ["latin"] });

export default function MainProducts() {
  const { allProducts } = useProducts();

  const ratio = 166.23 / 308.4;
  const imageWidth = 50;
  return (
    <div className={font.className}>
      <div className={Styles.mainContainer}>
        <h1 className={Styles.titleSection}>
          {" "}
          PRODUCTOS <br></br> PRINCIPALES
        </h1>
        <div className={Styles.cardsContainer}>
          {allProducts.slice(0, 4).map((product, index) => (
            <Link href={`/products/${product.id}`}>
              <div key={index} className={Styles.productCard}>
                <CustomImage
                  url={product.image}
                  width={imageWidth}
                  height={imageWidth / ratio}
                />
                <div className={Styles.productTitleAndDescription}>
                  <h1 className={Styles.productTitle}>{product.title}</h1>
                  <p className={Styles.productDescription}>
                    {" "}
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
