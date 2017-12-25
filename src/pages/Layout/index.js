
import React from 'react';

import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "../Home";

import AuthService from "../../services/authService";

const Layout = () => (
  <div>
    {
      !AuthService.isLoggedIn &&
      <Redirect to="/login" />
      //<NavBar history={this.props.history} />
    }
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers" component={Home} />
        <Route path="/rentals" component={Home} />
        <Route component={Home} />
      </Switch>
    </div>
  </div>
);

export default Layout;
