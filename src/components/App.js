import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Properties from "./Properties"
import './home.css';
import About from "./About";

function App() {
  return <div>
  <NavBar />
  <Switch>
    <Route path="/About" component={About} />
    <Route path="/Properties" component={Properties} />
    <Route path="/" exact component={Home} />
  </Switch>
</div>;
}

export default App;
