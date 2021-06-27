import React, { useContext } from "react";
import { ProductContext } from "../context";
import "./style.css";

function SaveItem({ ...item }) {
  const { movetocart, removesaved } = useContext(ProductContext);
  return (
    <div className="saved-item">
      <div>
        <img src={item.img} alt="cart" />
        <h3>Price: Rs. {item.price}</h3>
      </div>
      <div>
        <p>{item.short}</p>
        <p>size: {item.size}</p>
        <p>seller: {item.brand}</p>

        <button onClick={() => movetocart(item.id)}>MOVE TO CART</button>
        <button onClick={() => removesaved(item.id)}>REMOVE</button>
      </div>
    </div>
  );
}

export default SaveItem;
