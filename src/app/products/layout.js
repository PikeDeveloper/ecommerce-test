import ShoppingCart from "@/shared_components/shopping_cart/ShoppingCart";


export default function PostLayout({ children }) {
  return (
    <div>
      <ShoppingCart  />
      {children}
    </div>
  );
}
