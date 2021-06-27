import React, { createContext, useState } from "react";
import Data from "./data/data";
export const ProductContext = createContext();

function ProductsData(props) {
  const [data, setData] = useState(Data);
  const [cart, setCart] = useState([]);
  const [saveitem, setsaveItem] = useState([]);
  const [cartSubTotal, setcartSubTotal] = useState(0);
  const [cartTax, setcartTax] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  // adding item to cart
  function addtocart(id) {
    const newData = data.find((item) => item.id === id);
    setCart([...cart, newData]);
    addTotal();
  }
  // removing item from cart
  function remove(id) {
    const newData = cart.filter((item) => item.id !== id);
    setCart(newData);
    addTotal();
  }

  // incrementing the count of item
  function increment(id) {
    let tempCart = [...cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);

    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
    addTotal();
  }

  // decrementing the count of item
  function decrement(id) {
    let tempCart = [...cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);

    const product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.count * product.price;
    if (product.count < 1) {
      remove(id);
    } else {
      setCart([...tempCart]);
      addTotal();
    }
  }
  // remove saved item
  function removesaved(id) {
    const newData = saveitem.filter((item) => item.id !== id);
    setsaveItem(newData);
  }

  // adding total
  function addTotal() {
    const initialValue = 0;
    const total = cart.reduce(
      (accumulator, current) => accumulator + current.price * current.count,
      initialValue
    );
    const tempTax = total * 0.01;
    const tax = parseFloat(tempTax.toFixed(2));
    const totalprice = total + tax;

    // console.log(total);
    setcartSubTotal(total);
    setcartTax(tax);
    setcartTotal(totalprice);
  }

  // save for later
  function save(id) {
    const data = [...cart];
    const newData = data.filter((item) => item.id !== id);
    const newData2 = data.find((item) => item.id === id);
    setCart(newData);
    addTotal();
    setsaveItem([...saveitem, newData2]);
  }

  // move to cart
  function movetocart(id) {
    const data = [...saveitem];
    const newData = data.filter((item) => item.id !== id);
    const newData2 = data.find((item) => item.id === id);
    setsaveItem(newData);
    setCart([...cart, newData2]);
    addTotal();
  }

  return (
    <ProductContext.Provider
      value={{
        data,
        cart,
        saveitem,
        addtocart,
        save,
        remove,
        increment,
        decrement,
        addTotal,
        cartSubTotal,
        cartTax,
        cartTotal,
        removesaved,
        movetocart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductsData;
