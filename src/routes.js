import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/main.js";
import List from "./pages/List/list.js";
import Detail from "./pages/Detail/detail.js";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/List" component={List} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
