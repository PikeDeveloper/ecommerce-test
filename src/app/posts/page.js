
import { ListOfPosts } from "./ListOfPOsts";

import styles from "./posts.module.css";

export default function PostsPage() {
  return (
    <section className={styles.main} >
      <ListOfPosts />
    </section>
  );
}
