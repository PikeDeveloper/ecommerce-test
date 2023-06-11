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
  const [allProducts, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [productsInCart, setProductsInCart] = useState([]);
  const [category, setCategory] = useState("All");

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const addProduct = (newProduct) => {
    const productInCart = productsInCart.find(
      (product) => product.product.id === newProduct.product.id
    );

    if (productInCart) {
      const newProducts = productsInCart.map((product) => {
        if (productsInCart.product.id === newProduct.product.id) {
          return {
            ...product,
            quantity: Number(product.quantity) + Number(newProduct.quantity),
          };
        }
        return product;
      });
      setProductsInCart(newProducts);
    } else {
      setProductsInCart([...productsInCart, newProduct]);
    }
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.product.id !== id);
    setProducts(newProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        productsInCart,
        category,
        setCategory,
        getProducts,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
