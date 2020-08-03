import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import User from "./User/User";
import Message from "./Message/Message";
import { updateNewTextMesActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let sendMes = () => {
    props.dispatch(sendMessageActionCreator());
    props.dispatch(updateNewTextMesActionCreator(''));
  };
  let updateMesText = (text) => {
    props.dispatch(updateNewTextMesActionCreator(text));
  };
  return (
    <Dialogs newMessageText={props.state.newMessageText} sendMes={sendMes} updateMesText={updateMesText} users={props.state.dialogUsers} messages={props.state.dialogMessages}/>
  );
};

export default DialogsContainer;
