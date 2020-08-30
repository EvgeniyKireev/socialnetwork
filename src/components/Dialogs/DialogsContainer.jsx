import React from "react";
import {
  updateNewTextMesActionCreator,
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
    sendMes: () => {
      dispatch(sendMessageActionCreator());
      dispatch(updateNewTextMesActionCreator(""));
    },
    updateMesText: (text) => {
      dispatch(updateNewTextMesActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
