import styles from "./SquareImage.module.css";
export default function SquareImage({ url, width }) {
  return (
    <img
      className={styles.container}
      width={width}
      height={width}
      src={url}
      alt={url}
    />
  );
}
