// Este es el menu de navegacion entre paginas, el menu superior
import Link from "next/link";
import styles from "./Navigation.module.css";

import lou from "../../../public/images/lou.png";
import CustomImage from "@/components/custom_image/CustomImage";
import ShoppingCart from "../shopping_cart/ShoppingCart";

//Links de navegacion entre paginas
const links = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/products" },
  { label: "Login", route: "/login" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <CustomImage url={lou} width={100} />
      </Link>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }, index) => (
            <Link key={index} className={styles.item} href={route}>
              {label}
            </Link>
          ))}
        </ul>
      </nav>

      <ShoppingCart />
    </header>
  );
}
