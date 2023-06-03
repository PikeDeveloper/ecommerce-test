import styles from "./posts.module.css";

const fecthPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export async function ListOfPosts() {
  const posts = await fecthPosts();

  return posts.slice(0, 10).map((post) => (
    <article key={post.id} className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));
}
