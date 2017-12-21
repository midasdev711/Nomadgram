import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapStateToProps = state => {
  const { user: { profile } } = state;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { username } } } = ownProps;
  return {
    getProfile: () => {
      dispatch(userAction.getProfile(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
