import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main.js";
import List from "./pages/List/List.js";
import Detail from "./pages/Detail/Detail.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";

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
