import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h3>
        <Link to="/" className="link">
          Flipkart
        </Link>
      </h3>
      <input type="text" placeholder="search for products, brand and more" />
      <h4>Login</h4>
      <h4>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </h4>
      <h4>
        <Link to="/save" className="link">
          Save
        </Link>
      </h4>
    </div>
  );
}

export default Header;
