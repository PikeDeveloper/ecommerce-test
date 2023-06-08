"use client";
import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./products.module.css";
import StarRating from "@/components/stars_rating/stars";
import AddToCart from "@/components/add_to_cart/AddToCart";
import { useProducts } from "@/context/ProductsContext";

const fecthPosts = async () => {
  //next: {revalidate: 10,} es para revisar cada 60 segundos si hay cambios en la api
  const res = await fetch("https://fakestoreapi.com/products/", {});
  return await res.json();
};


const minPrice = 0;
const maxPrice = 1000;



export async function ListOfProducts() {
  const { category } = useProducts();
  const posts = await fecthPosts();

  // Filtra los productos por precio y categoria
  const filteredPosts = posts.filter((post) => {
    return (
      post.price >= minPrice &&
      post.price <= maxPrice &&
      (post.category === category || category === "All")
    );
  });

  console.log(filteredPosts);

  return filteredPosts.map((post) => (
    <div className={styles.product}>
      <Link href={`/products/${post.id}`} className={styles.link}>
        <div className={styles.image_and_descrption}>
          <img
            width={100}
            height={100}
            src={post.image}
            alt={post.title}
            className={styles.image}
          />
          <div className={styles.text}>
            <h4 className={styles.title}>{post.title}</h4>
            <StarRating stars={post.rating.rate} count={post.rating.count} />
            <p>{post.price}$</p>
          </div>
        </div>
      </Link>
      <div className={styles.like_and_add_to_cart}>
        <LikeButton />
        <AddToCart product={post} />
      </div>
    </div>
  ));
}
