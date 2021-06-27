import React, { useContext } from "react";
import { ProductContext } from "../context";
import "./style.css";

function CartItem({ ...item }) {
  const { remove, increment, decrement, save } = useContext(ProductContext);
  return (
    <div className="cart-item">
      <div>
        <img src={item.img} alt="cart" />
        <br />
        <p>
          <button onClick={() => decrement(item.id)}>-</button>
          <p>{item.count}</p>
          <button onClick={() => increment(item.id)}>+</button>
        </p>
      </div>
      <div>
        <p>{item.short}</p>
        <p>size: {item.size}</p>
        <p>seller: {item.brand}</p>
        <h3>Price: Rs. {item.price}</h3>
        <button onClick={() => save(item.id)}>SAVE FOR LATER</button>
        <button onClick={() => remove(item.id)}>REMOVE</button>
      </div>
    </div>
  );
}

export default CartItem;
