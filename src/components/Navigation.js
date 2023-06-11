// Este es el menu de navegacion entre paginas, el menu superior
import Link from "next/link";
import styles from "./Navigation.module.css";

//Links de navegacion entre paginas
const links = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/products" },
  { label: "Login", route: "/login" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }, index) => (
            <Link key={index} className={styles.item} href={route}>{label}</Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}