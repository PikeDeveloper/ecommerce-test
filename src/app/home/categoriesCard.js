import categoryImage from "../../../public/images/category_card.png";
import { Montserrat } from "@next/font/google";
import Styles from "./home.module.css";
import CustomImage from "@/components/custom_image/CustomImage";

const font = Montserrat({ weight: ["400"], subsets: ["latin"] });
const categories = ["01", "02", "03", "04", "05"];
export default function CategoriesCard() {

  const ratio = 277.17 / 232.79;
  const cardWidth = 220;
  return (
    <div className={font.className}>
      <div className={Styles.mainContainer}>
        <h1 className={Styles.titleSection}>CATEGORIAS</h1>
        <div className={Styles.cardsContainer}>
          {categories.map((category, index) => (
            <div key={index} className={Styles.card}>
              <CustomImage
                url={categoryImage}
                width={cardWidth}
                height={cardWidth * ratio}
              />
              <hr className={Styles.line} color="#b8b8b8" />
              <h2 className={Styles.categoryName}>{categories[index]}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
