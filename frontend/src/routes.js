import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginEmail from "./Pages/Login/Email";
import Dashboard from "./Pages/Dashboard";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/login-email" component={LoginEmail}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}
