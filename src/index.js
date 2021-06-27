import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsData from "./components/context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <ProductsData>
        <App />
      </ProductsData>
    </Router>
  </StrictMode>,
  rootElement
);
