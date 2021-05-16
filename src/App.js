import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Herosection/Hero";
import Cards from "./Pages/Cards/Cards";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Cards" exact component={Cards} />
      </Switch>
    </Router>
  );
}
export default App;
