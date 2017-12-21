import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapStateToProps = state => {
  const { user: { notifications } } = state;
  return {
    notifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotifications: () => {
      dispatch(userAction.getNotifications());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
