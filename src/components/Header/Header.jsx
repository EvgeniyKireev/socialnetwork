import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
    <header className={s.header}>
      <img
        className={s.logo}
        src={require("../common/iconMain.png")}
      />
      <div className={s.loginBlock}>{props.isAuth ? <div>{props.login} - <button className={<s className="myButton"></s>} onClick={props.logout}>logout</button> </div> : <NavLink to={'/login'}>login</NavLink>}</div>
    </header>
  );
};

export default Header;
