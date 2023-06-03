import styles from "../../page.module.css";

export default function Post({ params }) {
  const { id } = params; //recuperar el id en la url
  return (
    <main className={styles.main}>
      <h1>Esto es un post {id} </h1>
    </main>
  );
}
