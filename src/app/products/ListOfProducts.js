import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./products.module.css";
import StarRating from "@/shared_components/stars_rating/stars";
import AddToCart from "@/shared_components/add_to_cart/AddToCart";

const fecthPosts = () => {
  //next: {revalidate: 10,} es para revisar cada 60 segundos si hay cambios en la api
  return fetch("https://fakestoreapi.com/products/", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfProducts() {
  const posts = await fecthPosts();

  return posts.slice(0, 10).map((post) => (
    <div className={styles.product}>
      <Link href={`/products/${post.id}`} className={styles.link}>
      
      <div className={styles.image_and_descrption}>
        <img width={100} height={100}  src={post.image} alt={post.title} className={styles.image}  />
        <div className={styles.text} >
          <h3 className= {styles.title}  >{post.title}</h3>
          <StarRating stars={post.rating.rate} /> 
          <p>{post.price}$</p>
        
        
      </div>
    </div>
      </Link>
      <div className={styles.like_and_add_to_cart}>
      <LikeButton />
      <AddToCart />
        </div>
   
    </div>
  ));
}
