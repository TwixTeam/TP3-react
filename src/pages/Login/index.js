import React, { Component } from 'react'

import AuthForm from "../../components/AuthForm";
import AuthService from "../../services/authService";

class Login extends Component {

  constructor() {
    super();

    this.state = {
      error: ""
    }
  }

  render() {
    return (
      <AuthForm handleLogin={this.handleLogin} {...this.state} />
    )
  }

  handleLogin = (credentials) => {
    localStorage.clear();
    AuthService.setToken("boubloublouboubolouoolu");
    this.props.history.push('/');
  }
}

export default Login;