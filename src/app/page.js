import styles from "./page.module.css";
import placeHolderPic from "../../public/images/place_holder_pic.png";
import CustomImage from "@/components/custom_image/CustomImage";
import { Montserrat } from "@next/font/google";
import CategoriesCard from "./home/categoriesCard";
import MainProducts from "./home/main_products";



const font = Montserrat({ weight: ["400"], subsets: ["latin"] });
export default function Home() {
  return (
    <main className={font.className}>
      <div className={styles.main}>
        <div className={styles.mainHomePicture}>
          <CustomImage
            url={placeHolderPic}
            alt="Picture of the author"
            width={310}
            height={310}
          />
        </div>

        <CategoriesCard />
        <MainProducts />
      
      </div>
    </main>
  );
}
