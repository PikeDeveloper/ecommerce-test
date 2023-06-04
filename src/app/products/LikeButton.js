"use client";
import { useState } from "react";
import styles from "./products.module.css";
export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return <div className= {styles.like} onClick={() => setLiked(!liked)}>{liked ? "❤️" : "♡"}</div>;
}
