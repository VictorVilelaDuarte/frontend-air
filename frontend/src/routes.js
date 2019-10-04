import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login/Index";
import Dashboard from "./pages/Dashboard/Index";
import New from "./pages/New/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
