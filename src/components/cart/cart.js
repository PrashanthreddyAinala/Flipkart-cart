import React, { useContext } from "react";
import { ProductContext } from "../context";
import CartItem from "./cartItem";
import Amount from "./amount";

function Cart() {
  const { cart } = useContext(ProductContext);
  return (
    <div className="cart">
      <h1>My Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>
        <Amount />
      </div>
    </div>
  );
}

export default Cart;
