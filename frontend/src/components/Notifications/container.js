import React, { Component } from "react";
import Notifications from "./presenter";

class Container extends Component {
  componentDidMount() {
    this.props.getNotifications();
  }

  render() {
    const { notifications } = this.props;
    return <Notifications notifications={notifications} />;
  }
}

export default Container;
