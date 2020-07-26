import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  const path = '/dialogs/' + props.id
  return (
    <div>
      <NavLink to={path}>{props.userName}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.users}>
        <User userName="Evgeny" id='1'/>
        <User userName="Liza" id='2'/>
        <User userName="Olya" id='3'/>
        <User userName="Sasha" id='4'/>
      </div>
      <div className={s.userMessages}>
        <Message message='Hello how are you?'/>
        <Message message='Whats app'/>
        <Message message='Go walk on the street'/>
        <Message message='ya poshel spat`'/>
      </div>
    </div>
  );
};

export default Dialogs;
