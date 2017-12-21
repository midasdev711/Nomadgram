import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: ""
  };

  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  };

  render() {
    return (
      <Navigation
        value={this.state.term}
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        profile={this.props.profile}
      />
    );
  }

  _onInputChange = e => {
    const { target: { value } } = e;
    this.setState({ term: value });
  };
  _onSubmit = e => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    e.preventDefault();
    goToSearch(term);
    this.setState({ term: "" });
  };
}

export default Container;
