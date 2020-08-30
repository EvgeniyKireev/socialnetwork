import React from "react";
import s from "./Dialogs.module.css";
import { NavLink, Redirect } from "react-router-dom";
import User from "./User/User";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let newMesElement = React.createRef();
  let sendMes = () => {
   props.sendMes();
  };
  let updateMesText = () => {
    props.updateMesText(newMesElement.current.value);
  };
  const componentUsers = props.users.map((el) => (
    <User userName={el.userName} key={el.id} id={el.id} />
  ));
  const componentMessage = props.messages.map((el) => (
    <Message id={el.id} key={el.id} message={el.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.users}>{componentUsers}</div>
      <div className={s.userMessages}>{componentMessage}</div>
      <div>
        <textarea
          onChange={updateMesText}
          ref={newMesElement}
          value={props.newMessageText}
        ></textarea>
        <button onClick={sendMes}>Опубликовать</button>
      </div>
    </div>
  );
};

export default Dialogs;
