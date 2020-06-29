import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import About from "./About";

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
