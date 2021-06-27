import "./styles.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/cart/cart";
import Header from "./components/header/header";
import SaveList from "./components/savelist/savelist";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/save" exact>
          <SaveList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
