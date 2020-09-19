import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import {setAuthUserData, authMe, logout} from "../../redux/auth-reducer";
import { userApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
   this.props.authMe(); 
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { authMe, logout})(HeaderContainer);
