import React, { useContext } from "react";
import { ProductContext } from "../context";

function Amount() {
  const { cartSubTotal, cartTax, cartTotal } = useContext(ProductContext);
  return (
    <div className="total">
      <h2>Subtotal: Rs.{cartSubTotal}</h2>
      <h2>Tax: Rs.{cartTax}</h2>
      <h2>Total: Rs.{cartTotal}</h2>
    </div>
  );
}

export default Amount;
