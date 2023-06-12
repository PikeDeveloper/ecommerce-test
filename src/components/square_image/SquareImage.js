import styles from "./SquareImage.module.css";
import Image from "next/image";
import { blurDataURL } from "../../utils/constants.js";
export default function SquareImage({ url, width }) {
  return (
    <div className={styles.container}>
      <Image
        src={url}
        alt="product image"
        width={width}
        height={width}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
