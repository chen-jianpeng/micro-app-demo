import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import App from "./App";

const win: any = window;
let basename = ''
if (win.__POWERED_BY_QIANKUN__) {
  basename = "/home/react";
}

export default () => (
  <Router basename={basename}>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
