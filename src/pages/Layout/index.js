
import React from 'react';

import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "../Home";
import NavBar from "../../components/NavBar";

import AuthService from "../../services/authService";

import "./Layout.css";

const Layout = () => (
  <div>
    <NavBar />

    <div className="content">
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
