import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import ModularGameSystem from "views/ModularGameSystem/ModularGameSystem.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="*" component={ModularGameSystem} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
