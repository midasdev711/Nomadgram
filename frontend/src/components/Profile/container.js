import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Profile profile={profile} />
      </div>
    );
  }
}

export default Container;
