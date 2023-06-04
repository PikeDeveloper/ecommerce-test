import "./globals.css";
import Navigation from "../components/Navigation.js";
import { Poppins } from "@next/font/google";
import { ProductsProvider } from "../context/ProductsContext.js";

//Nueva forma de cargar fuentes
const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ProductsProvider>
          <Navigation />
          {children}
        </ProductsProvider>
      </body>
    </html>
  );
}
