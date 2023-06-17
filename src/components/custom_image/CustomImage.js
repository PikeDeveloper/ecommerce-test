import Image from "next/image";
import { blurDataURL } from "../../utils/constants.js";
export default function CustomImage({ url, width, height }) {
  return (
    <div >
      <Image
        src={url}
        alt="product image"
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
