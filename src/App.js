import "./App.css";
import Home from "./Page/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import React from "react";
import LikePostHome from "./Page/LikePost/LikePostHome"

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/likePost">
          <LikePostHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
