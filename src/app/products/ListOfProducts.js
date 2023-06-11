'use client'
import AddToCart from '@/components/add_to_cart/AddToCart'
import StarRating from '@/components/stars_rating/stars'
import { useProducts } from '@/context/ProductsContext'
import Link from 'next/link'
import { LikeButton } from './LikeButton'
import styles from './products.module.css'
import { useEffect } from 'react'

export async function ListOfProducts() {
  const { allProducts, category, getProducts } = useProducts()
  const minPrice = 0
  const maxPrice = 1000

  useEffect(() => {
    getProducts()
  })

  // Filtra los productos por precio y categoria
  // const filteredPosts = posts.filter((post) => {
  //   return (
  //     post.price >= minPrice &&
  //     post.price <= maxPrice &&
  //     (post.category === category || category === "All")
  //   );
  // });

  // console.log(filteredPosts);

  // return (
  //   <div>
  //     <h1>Hola mundo</h1>
  //   </div>
  // )

  return allProducts.map((post) => (
    <div className={styles.product} key={post.id}>
      <div className={styles.like_and_add_to_cart}>
        <LikeButton />
        <AddToCart product={post} />
      </div>
    </div>
  ))
}
