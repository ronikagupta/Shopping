import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import Collection from "./Collection"



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" exact="" component={Navbar} />
      <Route path="/Navbar" component={Navbar} />
      <Route path="/Collection" component={Collection} />



      {/* <Route path="/Sidebar" component={Sidebar} /> */}
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
