import Link from "next/link";

import styles from "./Navigation.module.css";

//Links de navegacion entre paginas
const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Products", route: "/products" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }) => (
            <div className={styles.item}>
              <Link href={route}>{label}</Link>
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
}
