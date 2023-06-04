import "./globals.css";
import Navigation from "../shared_components/Navigation.js";
import { Poppins } from "@next/font/google";

//Nueva forma de cargar fuentes
const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
