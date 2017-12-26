import React, { Component } from 'react'
import PropTypes from "prop-types";

import { Card, CardActions, CardText, CardTitle } from "material-ui/Card";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class AuthForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: props.error
    }
  }

  render() {
    return (
      <Card style={{ textAlign: 'center' }}>
        <CardTitle>
          <h3>Login</h3>
        </CardTitle>

        <CardText>
          {
            this.state.error &&
            <p className="LoginErrorText">
              {this.state.error}
            </p>
          }

          <TextField
            className="Form-Input" 
            hintText="username"
            hintStyle={{color:'#ccc'}} 
            id={"1"} 
            type="text"
            value={this.state.username} 
            onChange={this.editUsername} 
          />
          <br/>
          <TextField
            className="Form-Input" 
            hintText="password"
            hintStyle={{color:'#ccc'}} 
            id={"2"} 
            type="password"
            value={this.state.password} 
            onChange={this.editPassword} 
          />
        </CardText>

        <CardActions>
          <FlatButton
            type="submit"
            primary
            label="Connexion"
            onClick={this.handleSubmit}
          />
        </CardActions>
      </Card>
    )
  }

  handleSubmit = () => {
    if(!this.state.username && !this.state.password) {
      this.setState({error: "Please fill in the fields"})
    }

    else{
      this.props.handleLogin({...this.state})
      this.setState({username: "", password: "", error: ""});
    }
  }

  editUsername = (e) => {
    this.setState({username: e.target.value, error: ""});
  }

  editPassword = (e) => {
    this.setState({password: e.target.value, error: ""});
  }
}

AuthForm.propTypes = {
  error: PropTypes.string.isRequired
}

export default AuthForm;