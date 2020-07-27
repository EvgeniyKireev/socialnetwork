import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import Dialogs from "../Dialogs";


const User = (props) => {
  const path = '/dialogs/' + props.id
  return (
    <div className={s.user}>
      <NavLink to={path}>{props.userName}</NavLink>
    </div>
  );
};


export default User;
