import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired
  };

  _handleInputChange = e => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    usernameLogin(username, password);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
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
