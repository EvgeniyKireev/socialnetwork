import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsFR = (state) => {
  return {
    auth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.auth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToPropsFR)(RedirectComponent);
};
