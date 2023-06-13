"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { apiii } from "../utils/constants.js";

import { products } from "../utils/constants.js";
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
  const [globalUser, setGlobalUser] = useState({ name: "" });
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const [productsInCart, setProductsInCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  //obtiene todos los productos de la api
  const getProducts = async () => {
    setAllProducts(products);
    products;

    /*
    await fetch(apiii)
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
    filterProducts();
*/
  };

  //actualiza los productos filtrados cada vez que cambia el filtro
  useEffect(() => {
    filterProducts();
  }, [category, minPrice, maxPrice,searchWord]);

  //obtiene los productos al cargar la pagina
  useEffect(() => {
    getProducts();
  }, []);

  //filtro de productos por categoria y precio
  const filterProducts = () => {
    let temporalProducts = [];

    allProducts.map((product) => {
      if (
        (product.category === category || category == "All") &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (product.title.toLowerCase().includes(searchWord.toLowerCase()) ||
          product.description.toLowerCase().includes(searchWord.toLowerCase()))
      ) {
        temporalProducts.push(product);
      }
    });
    setFilteredProducts(() => temporalProducts);
  };

  //agrega un producto al carrito
  const addProductToCart = (newProduct) => {
    // revisa si el producto ya esta en el carrito
    let result = productsInCart.some(
      (Element) => Element.product.id === newProduct.product.id
    );

    // si el producto ya esta en el carrito, entonces actualiza la cantidad
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
      // si el producto no esta en el carrito, entonces lo agrega
      setProductsInCart([...productsInCart, newProduct]);
    }
  };

  //elimina un producto del carrito
  const deleteProductInCart = (id) => {
    const newProducts = productsInCart.filter(
      (product) => product.product.id !== id
    );
    setProductsInCart(newProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        globalUser,
        allProducts,
        productsInCart,
        category,
        minPrice,
        maxPrice,
        filteredProducts,
        setCategory,
        setGlobalUser,
        getProducts,
        addProductToCart,
        deleteProductInCart,
        filterProducts,
        setMinPrice,
        setMaxPrice,
        setSearchWord,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
