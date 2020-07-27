import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import User from './User/User';
import Message  from './Message/Message';




const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.users}>
        { props.componentUsers }
      </div>
      <div className={s.userMessages}>
        { props.componentMessage }
      </div>
    </div>
  );
};

export default Dialogs;
