import React from "react";
import {
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.dialogUsers,
    messages: state.dialogsPage.dialogMessages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMes: (newMessageText) => {
      dispatch(sendMessageActionCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
