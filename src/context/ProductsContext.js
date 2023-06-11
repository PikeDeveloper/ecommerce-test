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

  const addProductToCart = (newProduct) => {

    let result = productsInCart.some(Element => Element.product.id === newProduct.product.id)

    if (result) {
      const newProducts = productsInCart.map((product) => {
        if (product.product.id === newProduct.product.id) {
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

  const deleteProductInCart = (id) => {
    const newProducts = products.filter((product) => product.product.id !== id);
    setProductsInCart(newProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        productsInCart,
        category,
        setCategory,
        getProducts,
        addProductToCart,
        deleteProductInCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
