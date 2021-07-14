import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main.js";
import List from "./pages/List/List.js";
import Detail from "./pages/Detail/Detail.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import Footer from "./component/Footer/Footer.js";
import Nav from "./component/Nav/Nav.js";
import Shopping from "./pages/Shopping/Shopping.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Nav />
          <Route exact path="/main" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Route exact path="/shopping" component={Shopping} />
        <Footer />
      </Router>
    );
  }
}

export default Routes;
