import StarRating from "@/components/stars_rating/stars";
import styles from "./product.module.css";
import AddedToCart from "@/components/add_to_cart/AddToCart";
import { apiii } from "../../../utils/constants.js";

const fetchSinglePost = (id) => {
  return fetch(`${apiii}${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params; //recuperar el id en la url
  const post = await fetchSinglePost(id);
  return (
    <div className={styles.container}>
      <div className={styles.image_and_descrption}>
        <img
          width={300}
          height={300}
          src={post.image}
          alt={post.title}
          className={styles.image}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{post.title}</h3>
          <StarRating stars={post.rating.rate} count={post.rating.count} />
          <p>{post.price}$</p>
          <p>{post.description}</p>
          <br />
          <br />

          <AddedToCart product={post} />
        </div>
      </div>
    </div>
  );
}
