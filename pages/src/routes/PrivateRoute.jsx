import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "../views/HomePage";
const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default PrivateRoute;
