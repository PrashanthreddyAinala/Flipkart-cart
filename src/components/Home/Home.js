import React, { useContext } from "react";
import { ProductContext } from "../context";
import Card from "./Card";
function Home() {
  const { data } = useContext(ProductContext);
  return (
    <div className="grid">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Home;
