import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import User from "./User/User";
import Message from "./Message/Message";
import { updateNewTextMesActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  let newMesElement = React.createRef();
  let sendMes = () => {
    props.dispatch(sendMessageActionCreator(newMesElement.current.value));
  };
  let UpdateMesText = () => {
    props.dispatch(updateNewTextMesActionCreator(newMesElement.current.value));
  };
  const componentUsers = props.state.dialogUsers.map((el) => (
    <User userName={el.userName} id={el.id} />
  ));
  const componentMessage = props.state.dialogMessages.map((el) => (
    <Message message={el.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.users}>{componentUsers}</div>
      <div className={s.userMessages}>{componentMessage}</div>
      <div>
        <textarea
          onChange={UpdateMesText}
          ref={newMesElement}
          value={props.state.newMessageText}
        ></textarea>
        <button onClick={sendMes}>Опубликовать</button>
      </div>
    </div>
  );
};

export default Dialogs;
