import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  _handleInputChange = e => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  _handleFacebookLogin = response => {
    console.log(response);
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleSubmit={this._handleSubmit}
        handleInputChange={this._handleInputChange}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
}

export default Container;
