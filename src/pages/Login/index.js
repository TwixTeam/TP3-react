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
    AuthService.login(credentials.username, credentials.password)
  }
}

export default Login;