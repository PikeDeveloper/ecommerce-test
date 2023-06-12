import styles from "./SquareImage.module.css";
import Image from "next/image";
import { blurDataURL } from "../../utils/constants.js";
export default function SquareImage({ url, width }) {
  return (
    <Image
      blurDataURL={blurDataURL}
      placeholder="blur"
      className={styles.container}
      width={width}
      height={width}
      src={url}
      alt={url}
    />
  );
}
