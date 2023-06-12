import StarRating from "@/components/stars_rating/stars";
import styles from "./product.module.css";
import AddedToCart from "@/components/add_to_cart/AddToCart";
import { apiii } from "../../../utils/constants.js";
import SquareImage from "@/components/square_image/SquareImage";

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
        <SquareImage url={post.image} width={200} />
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
