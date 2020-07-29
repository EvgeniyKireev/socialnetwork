import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMesElement = React.createRef();
  let sendMes = () => {
    alert(newMesElement.current.value);
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
      <form>
        <textarea ref={newMesElement}></textarea>
        <button onClick={sendMes}>Опубликовать</button>
      </form>
    </div>
  );
};

export default Dialogs;
