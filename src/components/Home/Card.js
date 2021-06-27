import React, { useContext } from "react";
import { ProductContext } from "../context";
import "./style.css";

function Card({ ...item }) {
  const { addtocart } = useContext(ProductContext);
  return (
    <div className="card">
      <img src={item.img} alt="pic" />
      <h4>{item.name}</h4>
      <p>{item.short}</p>
      <h5>Rs.{item.price}</h5>
      <button onClick={() => addtocart(item.id)}>Add to Cart</button>
    </div>
  );
}
export default Card;
