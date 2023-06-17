import { Montserrat } from "@next/font/google";
import Styles from "./home.module.css";

import CustomImage from "@/components/custom_image/CustomImage";
import fakeMap from "../../../public/images/borrar_maps.png";

const font = Montserrat({ weight: ["400"], subsets: ["latin"] });

export default function Map() {
  return (
    <div className={font.className}>
      <div className={Styles.mainContainer}>
        <h1 className={Styles.titleSection}> MAPA DE LA TIENDA</h1>
      </div>
    </div>
  );
}
