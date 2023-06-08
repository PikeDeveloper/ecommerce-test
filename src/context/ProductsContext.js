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
  const [category, setCategory] = useState("All");

  // const addProduct = (product) => setProducts([...products, product]);

  const addProduct = (newProduct) => {
    const productInCart = products.find(
      (product) => product.product.id === newProduct.product.id
    );
    if (productInCart) {
      const newProducts = products.map((product) => {
        if (product.product.id === newProduct.product.id) {
          return {
            ...product,
            quantity: Number(product.quantity) + Number(newProduct.quantity),
          };
        }
        return product;
      });
      setProducts(newProducts);
    } else {
      setProducts([...products, newProduct]);
    }
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.product.id !== id);
    setProducts(newProducts);
  };

  return (
    <ProductsContext.Provider
      value={{ products, category, setCategory, addProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
