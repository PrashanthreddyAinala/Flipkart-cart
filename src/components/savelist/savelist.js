import React, { useContext } from "react";
import { ProductContext } from "../context";
import SaveItem from "./saveitem";

function SaveList() {
  const { saveitem } = useContext(ProductContext);
  return (
    <div>
      <h2>Save Later List</h2>
      {saveitem.map((item) => (
        <SaveItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default SaveList;
