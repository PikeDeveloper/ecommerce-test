"use client";

import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
  const constext = useContext(ProductsContext);
  if (!constext)
    throw new Error(
      "la funcion useProducts debe ser usada dentro de ProductsProvider"
    );
  return constext;
};

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => setProducts([...products, product]);

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.product.id !== id);
    setProducts(newProducts);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
