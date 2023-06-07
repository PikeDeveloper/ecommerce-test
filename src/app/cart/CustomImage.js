import styles from "./products.module.css";
import Image from "next/image";
export default function CustomImage({ image }) {
  return (
    <img
    width={100}
    height={100}
    src={image}
    alt={image}
    className={styles.image}
  />
  );
}
