import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import components
import Navbar from "../components/Navbar";
import About from "../components/about";
import Shop from "../components/shop";
import ItemDetail from "../components/ItemDetail"
//import css
import "./styles.css";

export default function App() {
  const Home = () => {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    );
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}
